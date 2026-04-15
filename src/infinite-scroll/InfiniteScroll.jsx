import React, { useEffect, useRef, useState } from 'react'
import './style.css'

import Post from './post/Post';


function InfiniteScroll() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)
  const lastPostRef = useRef(null)


  // api cll
  useEffect(() => {
    setLoading(true)

    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
      .then((res) => {
        return res.json()
      })
      .then((fetchedData) => {
        setData(prev => [...prev, ...fetchedData])
        setLoading(false)
      })
      .catch(() => setLoading(false))
  }, [page])

  // intersection observer
  useEffect(() => {
    if (!lastPostRef.current) return;

    const callback = (entries) => {
      if(entries[0].isIntersecting && !loading){
        setPage(prev => prev + 1)
      }
    }

    const options = {
      threshold: 0.5,
    }

    const observer = new IntersectionObserver(callback, options)
    
    observer.observe(lastPostRef.current);
    

    return () => observer.disconnect();

  }, [data, loading])

  return (
    <div className='scroll-container'>
      {
        data.map((item, index) => {
          return (
            <Post key={item.id} item={item} ref = {index === data.length - 1 ? lastPostRef : null} />
          )
        })
      }

      {loading && <p>loading...</p>}
    </div>
  )
}

export default InfiniteScroll
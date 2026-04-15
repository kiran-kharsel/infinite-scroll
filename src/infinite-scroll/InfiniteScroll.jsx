import React, { useEffect, useState } from 'react'
import './style.css'

import Post from './post/Post';


function InfiniteScroll() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(1)


  useEffect(()=>{
    fetch(`https://picsum.photos/v2/list?page=${page}&limit=3`)
    .then((res) => {
      return res.json()
    })
    .then((fetchedData) => {
      setData(prev => [...prev, ...fetchedData])
    })
  },[page])

  return (
    <div className='scroll-container'>
      <Post data={data} setPage={setPage}/>
    </div>
  )
}

export default InfiniteScroll
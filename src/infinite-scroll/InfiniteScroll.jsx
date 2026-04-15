import React, { useEffect, useState } from 'react'
import './style.css'

import Post from './post/Post';


function InfiniteScroll() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    fetch('https://picsum.photos/v2/list?page=1&limit=4')
    .then((res) => {
      return res.json()
    })
    .then((fetchedData) => {
      setData(prev => [...prev, ...fetchedData])
    })
  },[])

  return (
    <div className='scroll-container'>
      <Post data={data}/>
    </div>
  )
}

export default InfiniteScroll
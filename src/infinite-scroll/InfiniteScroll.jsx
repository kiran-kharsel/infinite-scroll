import React, { useEffect, useState } from 'react'
import './style.css'

import Post from './post/Post';


function InfiniteScroll() {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(false)


  useEffect(()=>{
    fetch('https://picsum.photos/v2/list?page=1&limit=3')
    .then((res) => {
      return res.json()
    })
    .then((data) => {
      console.log(data)
      setData(prev => [...prev, ...data])
    })
  },[])

  return (
    <div className='scroll-container'>
      <Post data={data}/>
    </div>
  )
}

export default InfiniteScroll
import React, { useState } from 'react'
import './style.css'


const THRESHOLD = 20;


function InfiniteScroll() {
  const [data, setData] = useState([...new Array(40)])
  const [loading, setLoading] = useState(false)


  function loadMore(){
    setLoading(true)
    setTimeout(() => {
      setData(prev => [...prev, ...new Array(10)])
      setLoading(false)
    }, 3000);
  }

  function handleScroll(e){
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    const remainingScroll = scrollHeight - ( scrollTop + clientHeight)

    if(remainingScroll < THRESHOLD && !loading){
      loadMore()
    }
  }

  return (
    <div onScroll={handleScroll} className='scroll-container'>
      {
        data.map((row, index) => {
          return(
            <div className='row-data' key={index}>{index + 1}</div>
          )
        })
      }

      {
        loading && <div>loading...</div>
      }
    </div>
  )
}

export default InfiniteScroll
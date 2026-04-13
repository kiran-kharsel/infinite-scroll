import React, { useState } from 'react'
import './style.css'


const THRESHOLD = 20;
function InfiniteScroll() {
  const [data, setData] = useState([...new Array(40)])


  function loadMore(){
    setTimeout(() => {
      setData(prev => [...prev, ...new Array(10)])
    }, 3000);
  }

  function handleScroll(e){
    console.log('scrolling')
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    const remainingScroll = scrollHeight - ( scrollTop + clientHeight)

    if(remainingScroll < THRESHOLD){
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
    </div>
  )
}

export default InfiniteScroll
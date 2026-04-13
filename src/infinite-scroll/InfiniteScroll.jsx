import React, { useState } from 'react'
import './style.css'

function InfiniteScroll() {
  const [data, setData] = useState([... new Array(40)])


  function loadMore(){

  }

  function handleScroll(e){
    console.log('scrolling')
    const scrollTop = e.target.scrollTop;
    const scrollHeight = e.target.scrollHeight;
    const clientHeight = e.target.clientHeight;

    console.log(scrollTop)
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
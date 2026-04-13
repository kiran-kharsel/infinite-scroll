import React, { useState } from 'react'
import './style.css'

function InfiniteScroll() {
  const [data, setData] = useState([... new Array(40)])


  return (
    <div className='scroll-container'>
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
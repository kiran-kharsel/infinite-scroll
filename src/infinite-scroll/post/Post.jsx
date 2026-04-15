import React from 'react'
import './style.css'

function Post({data}) {
  return (
    <div className='post-container'>
        {
            data.map((item) => {
                return (
                    <div className='post' key={item.id}>
                        <img className='post-image' src={item.download_url} alt='post-image' />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Post

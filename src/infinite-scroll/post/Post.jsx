import React from 'react'

function Post({data}) {
  return (
    <div>
        {
            data.map((item) => {
                return (
                    <div key={item.id}>
                        <img src={item.download_url} alt='post-image' />
                    </div>
                )
            })
        }
    </div>
  )
}

export default Post

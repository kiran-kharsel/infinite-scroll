import React, { forwardRef } from 'react'
import './style.css'

const Post = forwardRef(({ item }, ref) => (
  <div className="post" ref={ref}>
    <img className="post-image" src={item.download_url} alt="post" />
  </div>
));

export default Post

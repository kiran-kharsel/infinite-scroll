import React, { useEffect } from 'react'
import './style.css'

function Post({ data, setPage }) {

    useEffect(() => {

        const callback = (entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    // loadmore
                    setPage(prev => prev + 1)
                }
            });
        }

        const options = {
            threshold: 0.5,
        }


        const observer = new IntersectionObserver(callback, options)
        const target = document.querySelector('.post:last-child')
        if(target){
            observer.observe(target);
        }

        return () => observer.disconnect();

    }, [data.length])

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

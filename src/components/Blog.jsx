import React, { useEffect, useState } from 'react';
import Heading from './Heading';

const Blog = () => {

    const [blogs, setblogs] = useState([])

    useEffect(() => {
        fetch('blog.json').then(res => res.json()).then(data => setblogs(data))
    }, [])


    return (
        <div data-aos="fade-down" className='grid grid-cols-1 md:grid-cols-2 gap-5'>
            <Heading></Heading>
            {
                blogs.map(blog =>
                    <div className="card w-96 bg-base-100 shadow-xl">
                        <div className="card-body items-center text-center">
                            <h2 className="card-title font-bold">{blog.name}</h2>
                            <p className='mt-5'><span className='italic font-medium '>Description : </span>{blog.description}</p>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Blog;
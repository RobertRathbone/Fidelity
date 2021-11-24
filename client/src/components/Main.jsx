import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Display from './Display';

import BlogForm from './BlogForm';


export default () => {
    const [blogs, setBlogs] =useState([]);
    const [updated, setUpdated] = useState(false);

    useEffect(()=>{
    axios.get('http://localhost:8000/api/blogs')
    .then(res=>setBlogs(res.data))
    .catch(err=>console.log("Again?", err))
    },[updated])

    const removeFromDom = blogId => {
        setBlogs(blogs.filter(blog => blog._id != blogId));
    }
    return (
        <>
        <Display blogs = {blogs} removeFromDom = {removeFromDom} />
        <BlogForm  setUpdated = {setUpdated}
        />
        </>
    )
}
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate  } from '@reach/router';


export default props => {
    const { removeFromDom } = props;
    const [descDisplay, setdescDisplay] = useState("");
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
    const deleteProduct =(blogId) => {
        console.log(blogId);
        axios.delete(`http://localhost:8000/api/blog/${blogId}`)
            .then(res => {
                removeFromDom(blogId)
            })
    }

    const updateProduct =(blogId, blogTitle, blogBody, blogDesc) => navigate(`/update/${blogId}/${blogTitle}/${blogBody}/${blogDesc}`)

    const viewDetail =(blogId, blogBody) => navigate(`/${blogId}/${blogBody}`)

    return(
        <div>
            {props.blogs.map((blog, index)=> {
                return <p key = {index} > 
                {blog.title}, {blog.description}
            
            <button onClick={(e)=> {deleteProduct(blog._id)}}>
                Delete
            </button>
            <button onClick={(e)=> {viewDetail(blog._id, blog.body)}}>
                Body
            </button>
            <button onClick={(e)=> {updateProduct(blog._id, blog.title, blog.body, blog.description)}}>
                Update
            </button>
            {/* <Link to="/id">
                <button >
                     <p>Click Me!</p>
                 </button>
            </Link> */}
            </p>
            })}
        </div>

    
    )     

}

// , setTitle =blog.title, setBody=blog.body}
import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';
export default props => {
    const { id, oldTitle, oldBody, oldDesc } = props;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");


    // useEffect(() => {
    //     axios.get('http://localhost:8000/api/products' + id)
    //     .then(res=> {
    //         setTitle(res.data.title);
    //         setBody(res.data.body);
    //         setDescription(res.data.description);
    //     })
    // }, [])
    const updateBlog = e => {
        e.preventDefault();
        console.log(id, title, body, description);
        axios.put(`http://localhost:8000/api/blog/${id}`, {
            title,
            body,
            description
        })
        .then(res => console.log(res));
        navigate('/');
    }
    return (
        <div>
            <h3>Update a Blog</h3>
            <form onSubmit={updateBlog}>

                <p>
                    <label>Title</label>
                    <input type ="text" name = "title" placeholder = {oldTitle} value = {title} onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                {/* <p>
                    <label>Body</label>
                    <input type ="text" name = "body" placeholder = {oldBody} value = {body} onChange={(e) => {setBody(e.target.value)}}/>
                </p> */}

                <p>
                    <label>Body</label>
                    <textarea  rows = {6} placeholder = {oldBody}  onChange={e=>setBody(e.target.value)}/>
                </p>

                <p>
                    <label>Description</label>
                    <input type ="text" name = "description" placeholder = {oldDesc} value = {description} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input type = "submit" />
            </form>        
        </div>
    )
}
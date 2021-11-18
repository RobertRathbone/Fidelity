import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");

    const onSubmitHandler = e => {
        e.preventDefault();
        axios.post('http://localhost:8000/api/blogs', {
            title,
            body,
            description
        })
        .then(res=> {
            console.log("Yup", res)
            props.setUpdated(true);
            e.target.reset();
            
            // navigate('/');  
        })
        .catch(err=>console.log("Nope", err));
        
    }

    return (
        <form onSubmit={onSubmitHandler}>
            <p>
                <label>Title</label>
                <input type="text" onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>
                <label>Body</label>
                <textarea  rows = {6} onChange={e=>setBody(e.target.value)}/>
            </p>
            <p>
                <label>Description</label>
                <input type="text" onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
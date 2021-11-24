import React from 'react';
import axios from 'axios';
import { Link } from '@reach/router';
import { navigate } from '@reach/router';

export default props => {
    const { id, desc } = props;
    const deleteBlog =(blogId) => {
        console.log(blogId);
        axios.delete(`http://localhost:8000/api/blog/${blogId}`)
            .then(res => {
                console.log(id)
            })
        navigate('/');
    }

    return(
        <div>
            <h3>{desc}</h3>
            <button onClick={(e)=> {deleteBlog(id)}}>
                Delete
            </button>
            <button onClick={(e)=> {navigate('/' )}}>
                Go Back
            </button>
        </div>

    )
}
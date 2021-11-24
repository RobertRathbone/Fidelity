import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { navigate } from '@reach/router';

export default props => {
    const { id, oldTitle, oldBody, oldDesc } = props;
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    // const [updated, setUpdated] = useState(true);

    const updateBlog = e => {
        e.preventDefault();
        console.log(id, title, body, description);
        axios.put(`http://localhost:8000/api/blog/${id}`, {
            title,
            body,
            description
        })
        .then(res => console.log(res));
        navigate('/')
        .catch(err=>{
            const errResponse = err.response.data.errors;
            const errArr =[];
            for (const key of Object.keys(errResponse)){
                errArr.push(errResponse[key].message)
            }
            setErrors(errArr)
        })
    }
    return (
        <div>
            <h1> Fidelity Project </h1>
            <h3 class = "Update">Update a Blog</h3>
            <form onSubmit={updateBlog}>{errors.map((err, index) => <p key={index}>{err}</p>)}

                <p>
                    <input type ="text" name = "title" required value = {title} style = {{width: "500px"}} placeholder = {oldTitle}
                    onChange={(e) => {setTitle(e.target.value)}}/>
                </p>
                <p>
                    <textarea  rows = {6} placeholder = {oldBody}
                    style = {{width: "500px"}}
                    required  onChange={e=>setBody(e.target.value)}/>
                </p>

                <p>
                    <input type ="text" name = "description" placeholder = {oldDesc} required value = {description} style = {{width: "500px"}} onChange={(e) => {setDescription(e.target.value)}}/>
                </p>
                <input type = "submit" />
            </form> 
            <button onClick={(e)=> {navigate('/' )}}>
                Go Back
            </button>       
        </div>
    )
}
import React, { useEffect, useState } from 'react';
import { navigate } from '@reach/router';

import axios from 'axios';

export default props => {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [description, setDescription] = useState("");
    const [errors, setErrors] = useState([]);
    const [updated, setUpdated] = useState(true);

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
            navigate('/', {state: {setUpdated: setUpdated}});
        })
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
        
        <form style={{ height: "100vh", paddingTop: "10px" }} onSubmit={onSubmitHandler}>{errors.map((err, index) => <p key={index}>{err}</p>)}
        
            <p>

                <input type="text" placeholder ="Title" style={{width: "500px"}}  onChange={e=>setTitle(e.target.value)}/>
            </p>
            <p>

                <textarea  placeholder = "Body" rows = {6} style={{width: "500px"}} onChange={e=>setBody(e.target.value)}/>
            </p>
            <p>
 
                <input type="text" placeholder = "Description" style={{width: "500px"}}  onChange={e=>setDescription(e.target.value)}/>
            </p>
            <input type="submit"/>
        </form>
    )
}
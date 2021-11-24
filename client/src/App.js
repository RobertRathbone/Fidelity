import React, { useEffect, useState } from 'react'
import axios from 'axios';
import './App.css';
import { Router } from '@reach/router';
import Main from './components/Main';
import Update from './components/Update';
import DisplayRoute from './components/DisplayRoute';

function App() {
  const [ message, setMessage ] = useState("Loading...")
  useEffect(()=>{
      axios.get("http://localhost:8000/api")
          .then(res=>setMessage(res.data.message))       
  }, []);


  return (
    <div className="App">
      
      

      <Router>
      
        <Update path="/update/:id/:oldTitle/:oldBody/:oldDesc"/>
        <DisplayRoute path="/:id/:desc"/>
        <Main path="/"></Main>
      </Router>
    </div>
  );
}

export default App;

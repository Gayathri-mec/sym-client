import React, { useState } from 'react';
import axios from 'axios';
import './app.css';
import { Link } from 'react-router-dom';


const Create= () => {
  const [newuser, setNewuser] = useState({
    fristname: "",
    lastname: "",
    id: null,
    email: "",
    phonenumber: "",
    curr_year: "",
    college: ""
  });
  

  const handlechanger = (e) => {
    setNewuser((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  

  const handleClick = async (e) => {
    e.preventDefault();
    try {
      
      await axios.post("http://localhost:2020/new", newuser);
    } catch (err) {
      
      console.error(err);
     
    }
  };

  return (
    <header>
      
     
      <div className="information">
        <label>First Name</label>
        <input type="text" name="fristname" onChange={handlechanger} />
        <label>Last Name</label>
        <input type="text" name="lastname" onChange={handlechanger} />
        <label>ID Number</label>
        <input type="number" name="id" onChange={handlechanger} />
        <label>E-mail</label>
        <input type="text" name="email" onChange={handlechanger} />
        <label>Phone Number</label>
        <input type="number" name="phonenumber" onChange={handlechanger} />
        <label>Current Year</label>
        <input type="number" name="curr_year" onChange={handlechanger} />
        <label>College</label>
        <input type="text" name="college" onChange={handlechanger} />
        <button onClick={handleClick}>Submit</button>
      </div><br/>
      <nav align="center"><Link to ='/Home'>list of participant</Link></nav>
    </header>
  

  );
};

export default Create;

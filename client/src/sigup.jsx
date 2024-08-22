

import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "../src/signup.css"
import axios from 'axios';

function Sign() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.post('http://localhost:5000/register', { name, email, password })
      .then(result => {
        console.log(result);
        navigate('/login');
      })
      .catch(err => console.log(err));
  }

  return (
    <div className="one">
      <div>
        <h2>Register</h2>
        <form onSubmit={handleSubmit}>
          <div>
            <label>Name</label>
            <input 
              type="text"
              placeholder="Enter Name"
              autoComplete="off"
              onChange={(e) => setName(e.target.value)}
            />
          </div>
          <div>
            <label>Email</label>
            <input 
              type="email"
              placeholder="Enter Email"
              autoComplete="off"
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>
          <div>
            <label>Password</label>
            <input 
              type="password"
              placeholder="Enter Password"
              onChange={(e) => setPassword(e.target.value)}
            />
          </div>
          <button type="submit">Register</button>
        </form>
        <p>Already have an account? <Link to="/login">Login</Link></p>
      </div>
    </div>
  );
}

export default Sign;


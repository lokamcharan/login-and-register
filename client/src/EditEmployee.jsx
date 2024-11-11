import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import './EditEmployee.css';

function EditEmployee() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [employee, setEmployee] = useState({
    name: "",
    email: "",
    password: "",
    phoneNumber: "",
    profession: ""
  });

  useEffect(() => {
    axios.get(`http://localhost:5000/employees/${id}`)
      .then(response => setEmployee(response.data))
      .catch(err => console.error(err));
  }, [id]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEmployee(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    axios.put(`http://localhost:5000/employees/${id}`, employee)
      .then(() => navigate("/home"))
      .catch(err => console.error(err));
  };

  return (
    <div className="edit-container">
      <br></br>
      <h2 style={{textShadow:"2px 2px 2px orange"}}>Edit </h2>
      <form onSubmit={handleSubmit} className="edit-form">
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={employee.name}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={employee.email}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="password"
          placeholder="Password"
          value={employee.password}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="phoneNumber"
          placeholder="Phone Number"
          value={employee.phoneNumber}
          onChange={handleChange}
          className="form-input"
        />
        <input
          type="text"
          name="profession"
          placeholder="Profession"
          value={employee.profession}
          onChange={handleChange}
          className="form-input"
        />
        <button type="submit" className="submit-button">Update</button>
      </form>
    </div>
  );
}

export default EditEmployee;


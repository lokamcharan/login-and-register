import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import './home.css'; 

function Home() {
  const [employees, setEmployees] = useState([]);
  const navigate = useNavigate();

 
  useEffect(() => {
    axios.get("http://localhost:5000/employees")
      .then(response => setEmployees(response.data))
      .catch(err => console.error(err));
  }, []);

 
  const handleDelete = (id) => {
    axios.delete(`http://localhost:5000/employees/${id}`)
      .then(() => {
        setEmployees(employees.filter(employee => employee._id !== id));
      })
      .catch(err => console.error(err));
  };

 
  const handleEdit = (id) => {
    navigate(`/edit/${id}`);
  };

  return (
    <div className="home-container">
      <h2 style={{textShadow:"2px 2px 2px orange"}}>Registered Users</h2>
      <br></br>
      <br></br>
      <div className="card-container">
        {employees.map(employee => (
          <div key={employee._id} className="employee-card">
            <p><strong> Name : </strong>{employee.name}</p>
            <p> <strong>E-Mail : </strong>{employee.email}</p>
            <p><strong>Phone :</strong> {employee.phoneNumber}</p>
            <p><strong>Profession :</strong>{employee.profession}</p>
            <div className="button-container">
              <button onClick={() => handleEdit(employee._id)} style={{backgroundColor:"lightgreen"}}>Update</button>
              <button onClick={() => handleDelete(employee._id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home;




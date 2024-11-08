
// // import React, { useState } from "react";
// // import { Link, useNavigate } from "react-router-dom";
// // import axios from "axios";
// // import "../src/login.css"; // Make sure to create this CSS file

// // function Login() {
// //   const [email, setEmail] = useState('');
// //   const [password, setPassword] = useState('');

// //   const navigate = useNavigate();

// //   const handleSubmit = (e) => {
// //     e.preventDefault();
// //     axios.post('http://localhost:5000/login', { email, password })
// //       .then(result => {
// //         console.log(result);
// //         if (result.data === "Success") {
// //           navigate('/home');
// //         }
// //       })
// //       .catch(err => console.log(err));
// //   }

// //   return (
// //     <div className="login-container">
// //       <div className="login-box">
// //         <h2>Login</h2>
// //         <form onSubmit={handleSubmit}>
// //           <div className="input-group">
// //             <label>
// //               <strong>Email</strong>
// //             </label>
// //             <input
// //               type="email"
// //               placeholder="Enter Email"
// //               autoComplete="off"
// //               onChange={(e) => setEmail(e.target.value)}
// //               className="login-input"
// //             />
// //           </div>
// //           <div className="input-group">
// //             <label>
// //               <strong>Password</strong>
// //             </label>
// //             <input
// //               type="password"
// //               placeholder="Enter Password"
// //               onChange={(e) => setPassword(e.target.value)}
// //               className="login-input"
// //             />
// //           </div>
// //           <button type="submit" className="login-button">Login</button>
// //         </form>
// //         <p>Don't have an account? <Link to="/register" className="login-link">Register</Link></p>
// //       </div>
// //     </div>
// //   );
// // }

// // export default Login;


// import React, { useState } from "react";
// import { useNavigate } from "react-router-dom";
// import axios from "axios";
// import "../src/login.css";

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     axios.post("http://localhost:5000/login", { email, password })
//       .then((result) => {
//         console.log(result);
//         if (result.data === "Success") {
//           navigate("/home"); // Redirect to home page after successful login
//         } else {
//           alert("Invalid login credentials");
//         }
//       })
//       .catch((err) => console.log(err));
//   };

//   return (
//     <div className="login-container">
//       <div className="login-box">
//         <h2>Login</h2>
//         <form onSubmit={handleSubmit}>
//           <div className="input-group">
//             <label>Email</label>
//             <input
//               type="email"
//               placeholder="Enter Email"
//               onChange={(e) => setEmail(e.target.value)}
//               className="login-input"
//             />
//           </div>
//           <div className="input-group">
//             <label>Password</label>
//             <input
//               type="password"
//               placeholder="Enter Password"
//               onChange={(e) => setPassword(e.target.value)}
//               className="login-input"
//             />
//           </div>
//           <button type="submit" className="login-button">Login</button>
//         </form>
//         <p>Don't have an account? <a href="/register" className="login-link">Register</a></p>
//       </div>
//     </div>
//   );
// }

// export default Login;

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap is imported

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5000/login", { email, password })
      .then((result) => {
        console.log(result);
        if (result.data === "Success") {
          navigate("/home"); // Redirect to home page after successful login
        } else {
          alert("Invalid login credentials");
        }
      })
      .catch((err) => console.log(err));
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center mb-4">Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-3">
          <label className="form-label">Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter Password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <button type="submit" className="btn btn-primary w-100">
          Login
        </button>
      </form>

      <p className="text-center mt-3">
        Don't have an account? <a href="/register">Register</a>
      </p>
    </div>
  );
}

export default Login;




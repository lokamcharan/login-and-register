// const express = require('express');
// const mongoose = require('mongoose');
// const cors = require('cors');
// const EmployeeModel = require('./models/employee');

// const app = express();
// app.use(express.json());
// app.use(cors());

// // MongoDB connection
// mongoose.connect("mongodb://127.0.0.1:27017/employee");

// // Create Employee
// app.post('/register', (req, res) => {
//     EmployeeModel.create(req.body)
//         .then(employee => res.json(employee))
//         .catch(err => res.status(500).json(err));
// });

// // Get All Employees
// app.get('/employees', (req, res) => {
//     EmployeeModel.find()
//         .then(employees => res.json(employees))
//         .catch(err => res.status(500).json(err));
// });

// // Update Employee
// app.put('/employees/:id', (req, res) => {
//     const { id } = req.params;
//     EmployeeModel.findByIdAndUpdate(id, req.body, { new: true })
//         .then(employee => res.json(employee))
//         .catch(err => res.status(500).json(err));
// });

// // Delete Employee
// app.delete('/employees/:id', (req, res) => {
//     const { id } = req.params;
//     EmployeeModel.findByIdAndDelete(id)
//         .then(() => res.json({ message: 'Employee deleted' }))
//         .catch(err => res.status(500).json(err));
// });

// // Login endpoint
// app.post("/login", (req, res) => {
//     const { email, password } = req.body;
//     EmployeeModel.findOne({ email: email })
//         .then(user => {
//             if (user) {
//                 if (user.password === password) {
//                     res.json("Success");
//                 } else {
//                     res.json("Incorrect password");
//                 }
//             } else {
//                 res.json("No record found");
//             }
//         })
//         .catch(err => res.status(500).json(err));
// });

// app.listen(5000, () => {
//     console.log('Server is running on port 5000');
// });

// user name 3 characters 
// email validate 
// phone number validate 0 
// update


const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bcrypt = require('bcryptjs'); // Import bcrypt for password comparison
const EmployeeModel = require('./models/employee');

const app = express();
app.use(express.json());
app.use(cors());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/employee");

// Create Employee (Register)
app.post('/register', (req, res) => {
    EmployeeModel.create(req.body)
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json(err));
});

// Get All Employees
app.get('/employees', (req, res) => {
    EmployeeModel.find()
        .then(employees => res.json(employees))
        .catch(err => res.status(500).json(err));
});

// Update Employee
app.put('/employees/:id', (req, res) => {
    const { id } = req.params;
    EmployeeModel.findByIdAndUpdate(id, req.body, { new: true })
        .then(employee => res.json(employee))
        .catch(err => res.status(500).json(err));
});

// Delete Employee
app.delete('/employees/:id', (req, res) => {
    const { id } = req.params;
    EmployeeModel.findByIdAndDelete(id)
        .then(() => res.json({ message: 'Employee deleted' }))
        .catch(err => res.status(500).json(err));
});

// Login endpoint
app.post("/login", (req, res) => {
    const { email, password } = req.body;
    EmployeeModel.findOne({ email: email })
        .then(user => {
            if (user) {
                // Compare the password with the hashed password
                bcrypt.compare(password, user.password, (err, isMatch) => {
                    if (err) return res.status(500).json(err);
                    if (isMatch) {
                        res.json("Success");
                    } else {
                        res.json("Incorrect password");
                    }
                });
            } else {
                res.json("No record found");
            }
        })
        .catch(err => res.status(500).json(err));
});

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});


const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); 

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    profession: String
});


EmployeeSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next(); 
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword; 
        next();
    });
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

module.exports = EmployeeModel;


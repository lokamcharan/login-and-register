

// const  mongoose=require('mongoose')

// const EmployeeSchema=new mongoose.Schema({
//     name:String,
//     email:String,
//     password:String,
//     phoneNumber:Number,
//     profession:String
// })


// const EmployeeModel=mongoose.model("employees",EmployeeSchema)

// module.exports=EmployeeModel

const mongoose = require('mongoose');
const bcrypt = require('bcryptjs'); // Import bcrypt

const EmployeeSchema = new mongoose.Schema({
    name: String,
    email: String,
    password: String,
    phoneNumber: Number,
    profession: String
});

// Hash password before saving it to the database
EmployeeSchema.pre('save', function (next) {
    if (!this.isModified('password')) return next(); // If password isn't modified, skip hashing
    bcrypt.hash(this.password, 10, (err, hashedPassword) => {
        if (err) return next(err);
        this.password = hashedPassword; // Set the hashed password
        next();
    });
});

const EmployeeModel = mongoose.model('employees', EmployeeSchema);

module.exports = EmployeeModel;


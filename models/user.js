const mongoose = require('mongoose');
const schema = mongoose.Schema;

const userSchema = new schema({
    id: Number,
    _id: String,
    firstName: String,
    lastName: String,
    email: String,
    dob: Date,
    department: Number,
    joinedDate: Date,
    resignedDate: Date,
    username: String,
    password: String,
    confirmPassword: String,
    address: String,
    active: Boolean
});

const User = mongoose.model('User', userSchema);

module.exports = User;
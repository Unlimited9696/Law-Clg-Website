const mongoose = require('mongoose');

const facultySchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, 'Name is required'],
        trim: true
    },
    designation: {
        type: String,
        required: [true, 'Designation is required'],
        trim: true
    },
    department: {
        type: String,
        required: [true, 'Department is required'],
        trim: true
    },
    qualification: {
        type: String,
        required: [true, 'Qualification is required']
    },
    experience: {
        type: Number,
        required: [true, 'Experience is required']
    },
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: true,
        trim: true,
        lowercase: true
    },
    phone: {
        type: String,
        required: [true, 'Phone number is required']
    },
    image: {
        type: String,
        default: 'default-faculty.jpg'
    },
    bio: {
        type: String,
        required: [true, 'Bio is required']
    },
    isActive: {
        type: Boolean,
        default: true
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Faculty', facultySchema); 
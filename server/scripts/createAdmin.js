const mongoose = require('mongoose');
const User = require('../src/model/user.model');
const dotenv = require('dotenv');
const bcrypt = require('bcryptjs');

dotenv.config();

const createAdmin = async () => {
    try {
        // Connect to MongoDB
        await mongoose.connect(process.env.MONGODB_URI);
        console.log('Connected to MongoDB');

        // Check if admin already exists
        const adminExists = await User.findOne({ email: 'admin@lawcollege.com' });
        if (adminExists) {
            console.log('Admin account already exists');
            process.exit(0);
        }

        // Create admin user
        const admin = await User.create({
            name: 'Admin',
            email: 'admin@lawcollege.com',
            password: 'Admin@123', // This will be hashed by the pre-save hook
            isAdmin: true,
            isActive: true
        });

        console.log('Admin account created successfully:');
        console.log('Email:', admin.email);
        console.log('Password: Admin@123');
        console.log('\nPlease change this password after first login!');

    } catch (error) {
        console.error('Error creating admin:', error);
    } finally {
        process.exit(0);
    }
};

createAdmin(); 
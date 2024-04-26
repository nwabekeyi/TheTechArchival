const express = require('express');
const path = require('path');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const mongoose = require('mongoose');
const { User } = require('./models/User.js');
require('dotenv').config();
const connectDB = require('./configs/dbConns.js');


// Establish connection to MongoDB
connectDB();

const app = express();
const clientSide = path.join(__dirname, '../client_side/build');

app.use(express.static(clientSide));
app.use(cors({
    origin: 'http://localhost:3000',
}));
app.use(express.json());

console.log(process.env.ACCESS_TOKEN_SECRET);

// Login route
app.post('/signin', (req, res) => {
    console.log(req.body);
    const { email, password } = req.body;

    // Check if the username and password match any user in the users array
    const user = users.find(user => user.email === email && user.password === password);

    if (user) {
        // If user is found, send a success response
        const accessToken = jwt.sign(
            { email: user.email },
            access,
            { expiresIn: '30m' } // Change token expiry time to 30 minutes
        );
        return res.status(200).json({ accessToken });
    } else {
        // If user is not found, send an error response
        return res.status(401).json({ error: 'Invalid username or password' }); // Add return statement
    }
});

// Get user info route
app.get('/users', (req, res) => {
    try {
        // Send the users object as a JSON response
        return res.status(200).json(users);
    } catch (error) {
        // If an error occurs, handle it properly
        console.error('Error fetching user data:', error);
        return res.status(500).json({ error: 'Internal server error' }); // Add return statement
    }
});

// Serve index.html for any other requests
app.get('*', (req, res) => {
    console.log(req.url);
    return res.sendFile(path.join(clientSide, 'index.html'));
});

// Add hardcoded user data to the database
const addUserToDB = async () => {
    try {
        const userData = {
            userEmail: 'test@example.com',
            password: 'password123'
        };

        // Create a new user instance
        const newUser = new User(userData);

        // Save the user to the database
        await newUser.save();
        console.log('User added to the database');
    } catch (error) {
        console.error('Error adding user to the database:', error);
    }
};


// Call the function to add hardcoded user data to the database
addUserToDB();

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB');
    app.listen(5000, () => {
        console.log('Listening @ port 5000..');
    });
});

mongoose.connection.on('error', err => {
    console.error('MongoDB connection error:', err);
});

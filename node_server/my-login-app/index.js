const express = require('express');
const cors = require('cors');


const mongoose = require('mongoose');
const user1Schema = new mongoose.Schema({
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true,
    }
  });
  const User = mongoose.model('User', user1Schema);

const bodyParser = require('body-parser');

const app = express();
app.use(cors({
    origin: 'http://localhost:5173' // Allow requests from this origin only
  }));
  
const PORT = process.env.PORT || 7000;

// Middleware
app.use(bodyParser.json());


// MongoDB Atlas connection
mongoose.connect('mongodb+srv://vmepani257:If2nL1518UlAKi8T@cluster0.1teemlz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
 
}).then(() => console.log('MongoDB connected'))
  .catch(err => console.error(err));

// Routes
app.post('/login', (req, res) => {
  // Validation - check if email and password are provided
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ error: 'Email and password are required' });
  }

  // Store data in MongoDB
  // Your Mongoose model and save operation will go here

  res.json({ message: 'Login successful' });
});
app.post('/login', async (req, res) => {
    const { email, password } = req.body;
  
    // Validation - check if email and password are provided
    if (!email || !password) {
      return res.status(400).json({ error: 'Email and password are required' });
    }
  
    try {
      // Create a new user instance
      const newUser = new User({
        email,
        password
      });
  
      // Save user data to MongoDB
      await newUser.save();
  
      res.json({ message: 'User created successfully' });
    } catch (error) {
      console.error('Error:', error);
      res.status(500).json({ error: 'Server error' });
    }
  });

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const multer = require('multer');
const path = require('path');
const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ origin: '*' }));
app.use(bodyParser.json());

// Connect to MongoDB Atlas with additional options
mongoose.connect("mongodb+srv://vmepani257:If2nL1518UlAKi8T@cluster0.1teemlz.mongodb.net/rentify?retryWrites=true&w=majority&appName=Cluster0", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  
})
.then(() => console.log('MongoDB connected'))
.catch(err => {
  console.error('MongoDB connection error:', err);
  process.exit(1); // Exit the application if connection fails
});

const userSchema = new mongoose.Schema({
  name: String,
  email: { type: String, unique: true }, // Ensure email uniqueness
  password: String,
  phone: String
});

const User = mongoose.model('User', userSchema);
const formDataSchema = new mongoose.Schema({
  ownerName: String,
  ownerMobileNumber: String,
  houseLocalityAndCity: String,
  yourMobileNumber: String,
  yourName: String,
  agreeChecked: Boolean
});

// Create a Mongoose model based on the schema
const FormData = mongoose.model('FormData', formDataSchema);


const referSchema = new mongoose.Schema({
  yourName: String,
  mobileNumber: Number,
  friendLocation: String,
  friendName: String,
  friendMobileNumber: Number
});

const Refer = mongoose.model('Refer', referSchema);





const propertySchema = new mongoose.Schema({
  sname: String,
  saddress: String,
  sarea: String,
  scity: String,
  sstate: String,
  shouse: String,
  sprice: String,
  stype: String,
  savail: String,
  sdescript: String,
  images: String
});

const Property = mongoose.model('Property', propertySchema);
const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    cb(null, file.fieldname + '-' + Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({
  storage: storage,
}).single('image');


app.post('/api/signup', async (req, res) => {
  try {
    const { name, email, password, phone } = req.body;
    const hashedPassword = await bcrypt.hash(password, 10); // Hash the password
    const newUser = new User({ name, email, password: hashedPassword, phone });
    await newUser.save();
    res.status(201).json({ message: 'User created successfully' });
  } catch (error) {
    console.error('Error creating user:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(400).json({ error: 'Invalid credentials' });
    }
    res.json({ message: 'Login successful' });
  } catch (error) {
    console.error('Error logging in:', error);
    res.status(500).json({ error: 'Internal server error' });
  }
});
   app.post('/api/property', (req, res) => {
    upload(req, res, async function (err) {
      if (err instanceof multer.MulterError) {
        return res.status(500).json({ success: false, message: 'File upload error' });
      } else if (err) {
        return res.status(500).json({ success: false, message: 'Unknown error occurred' });
      }
  
  
    

    // Create a new Property instance
    const newProperty = new Property({
      sname:req.body.sname,
      saddress:req.body.saddress,
      sarea:req.body.sarea,
      scity:req.body.scity,
      sstate:req.body. sstate,
      shouse:req.body. shouse,
      sprice:req.body.sprice,
      stype:req.body.stype,
      savail:req.body.savail,
      sdescript:req.body. sdescript,
      images:req.file.filename,

    });
    try {
      // Save property to database
      const savedProperty = await newProperty.save();
      res.status(200).json({ success: true, message: 'Property listed successfully', property: savedProperty });
    } catch (error) {
      console.error('Error saving property:', error);
      res.status(500).json({ success: false, message: 'Failed to list property' });
    }
  });
   });
   app.post('/api/storeFormData', async (req, res) => {
    try {
      // Extract form data from request body
      const { ownerName, ownerMobileNumber, houseLocalityAndCity, yourMobileNumber, yourName, agreeChecked } = req.body;
      
      // Create a new document using the FormData model
      const formData = new FormData({
        ownerName,
        ownerMobileNumber,
        houseLocalityAndCity,
        yourMobileNumber,
        yourName,
        agreeChecked
      });
  
      // Save the document to the database
      await formData.save();
  
      res.status(201).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error saving form data:', error);
      res.status(500).json({ error: 'Internal server error' });
    }
  });

  app.post('/api/storeData', async (req, res) => {
    try {
      const { yourName, mobileNumber, friendLocation, friendName, friendMobileNumber } = req.body;
      // Create a new document using the Refer model
      const refer = new Refer({ yourName, mobileNumber, friendLocation, friendName, friendMobileNumber });
      // Save the document to the database
      await refer.save();
      // Send a success response
      res.status(200).json({ message: 'Form data saved successfully' });
    } catch (error) {
      console.error('Error storing form data:', error);
      // Send an error response
      res.status(500).json({ error: 'Failed to store form data' });
    }
  });


app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

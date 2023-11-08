const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const Inquiry = require('./models/Inquiry');

const app = express();
const port = process.env.PORT || 3001;

app.use(bodyParser.json());

// Replace with your MongoDB connection string
mongoose.connect('mongodb+srv://saravanakumar11941:KByULd6R9deKFFuG@cluster0.ofeztld.mongodb.net/Lab', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;

db.on('error', (error) => {
  console.error('MongoDB connection error:', error);
});

db.once('open', () => {
  console.log('Connected to MongoDB');
});

app.post('/create-inquiry', (req, res) => {
  const { issueType, location, description } = req.body;

  if (!issueType || !location || !description) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newInquiry = new Inquiry({
    issueType,
    location,
    description,
  });

  newInquiry
    .save()
    .then((inquiry) => {
      console.log('Inquiry created:', inquiry);

      // Fetch all inquiries (including the newly created one)
      Inquiry.find()
        .then((inquiries) => {
          res.json({ message: 'Inquiry created successfully', inquiries });
        })
        .catch((err) => {
          console.error('Error getting inquiries:', err);
          res.status(500).json({ error: 'Failed to get inquiries' });
        });
    })
    .catch((err) => {
      console.error('Error creating inquiry:', err);
      res.status(500).json({ error: 'Failed to create inquiry' });
    });
});

app.get('/get-all-inquiries', (req, res) => {
  Inquiry.find()
    .then((inquiries) => {
      res.json(inquiries);
    })
    .catch((err) => {
      console.error('Error getting inquiries:', err);
      res.status(500).json({ error: 'Failed to get inquiries' });
    });
});

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

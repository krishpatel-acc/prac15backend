require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;
const FRONTEND_URL = process.env.FRONTEND_URL || 'http://localhost:3001';

app.use(
  cors({
    origin: FRONTEND_URL,
  })
);
app.use(express.json());

app.get('/message', (req, res) => {
  res.json({ message: 'this is krish from backend!' });
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Name and email are required.',
    });
  }

  return res.json({
    message: 'Form submitted successfully!',
    submittedData: { name, email },
  });
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

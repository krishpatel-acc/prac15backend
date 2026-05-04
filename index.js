require('dotenv').config();

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;
const users = [];

app.use(
  cors({
    origin: '*',
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type'],
  })
);
app.use(express.json());

app.get('/message', (req, res) => {
  res.json({ message: 'this is krish from backend!' });
});

app.get('/users', (req, res) => {
  res.json({ users });
});

app.post('/submit', (req, res) => {
  const { name, email } = req.body;

  if (!name || !email) {
    return res.status(400).json({
      message: 'Name and email are required.',
    });
  }

  const user = {
    id: Date.now(),
    name,
    email,
  };

  users.push(user);

  return res.json({
    message: 'Form submitted successfully!',
    users,
  });
});

if (require.main === module) {
  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

module.exports = app;

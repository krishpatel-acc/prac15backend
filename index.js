const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5050;

app.use(cors());
app.use(express.json());

app.get('/message', (req, res) => {
  res.json({ message: 'Welcome to the React and Node.js API app!' });
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

// Create web server
const express = require('express');
const app = express();
const cors = require('cors');

app.use(express.json());
app.use(cors());

const comments = [];

app.get('/comments', (req, res) => {
  res.json(comments);
});

app.post('/comments', (req, res) => {
  const { user, text } = req.body;
  if (user && text) {
    comments.push({ user, text });
    res.status(201).json('Comment added');
  } else {
    res.status(400).json('Invalid comment');
  }
});

app.listen(3001, () => {
  console.log('Server running on port 3001');
});
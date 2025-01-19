
const express = require('express');
const cors = require('cors');

const app = express();
const port = 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Sample route
app.get('/', (req, res) => {
  res.send('Hello from the backend!');
});

// API route example
app.get('/api/data', (req, res) => {
  res.json({ message: 'Data from the server' });
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

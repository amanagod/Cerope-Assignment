const express = require('express');
const cors = require('cors');
const connectDB = require('./models/db.config');

const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to MongoDB
connectDB();

// Example route
app.get('/', (req, res) => {
  res.send('Hello World!');
});

// Start Server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

const express = require('express');
const cors = require('cors');
require('dotenv').config();

const contactRoutes = require('./routes/contactRoutes');
const volunteerRoutes = require('./routes/volunteerRoutes');

const app = express();
const PORT = process.env.PORT || 5000;

// Enable CORS (Cross-Origin Resource Sharing)
// This permits our frontend (e.g. running on http://localhost:5173) to communicate with this backend.
app.use(cors());

// Enable parsing of JSON data in the request body
app.use(express.json());

// Basic test route to check if server is running
app.get('/', (req, res) => {
  res.json({ 
    success: true,
    message: 'Welcome to the She Can Foundation API!' 
  });
});

// Mount our API routes under /api
// This means contact form submission will be on: POST http://localhost:5000/api/contact
app.use('/api', contactRoutes);
app.use('/api', volunteerRoutes);

// Fallback for handling 404 routes
app.use((req, res) => {
  res.status(404).json({
    success: false,
    message: 'API Route not found'
  });
});

// Start listening for client requests
app.listen(PORT, () => {
  console.log(`🚀 Server is running on port ${PORT}`);
  console.log(`🔗 Backend Health Check: http://localhost:${PORT}/`);
  console.log(`🔗 Submit Form Endpoint: http://localhost:${PORT}/api/contact`);
});

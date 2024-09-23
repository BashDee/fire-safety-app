const express = require('express');
const cors = require('cors');
const db = require('./config/db');
const authRoutes = require('./routes/authRoutes');
const certificateRoutes = require('./routes/certificateRoutes');

// Initialize app
const app = express();
app.use(cors());
app.use(express.json());

// Connect to the database
// mysql();

// API routes
app.use('/api', authRoutes);
app.use('/api/certificates', certificateRoutes);


// Listen on port
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

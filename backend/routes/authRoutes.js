const express = require('express');
const bcrypt = require('bcryptjs');
const pool = require('../db');  // Import the connection pool
const router = express.Router();
const jwt = require('jsonwebtoken');

// Registration route
router.post('/register', async (req, res) => {
  const { name, username, email, password } = req.body;

  try {
    // Check if username or email already exists
    const [existingUser] = await promisePool.query(
        'SELECT * FROM users WHERE username = ? OR email = ?', 
        [username, email]
      );
      if (existingUser.length > 0) {
        return res.status(400).json({ message: 'Username or email already exists' });
      }


    // Hash the password before saving to the database
    const hashedPassword = await bcrypt.hash(password, 10);

    // Insert the user into the MySQL database
    const [result] = await promisePool.query(
        'INSERT INTO users (name, username, email, password) VALUES (?, ?, ?, ?)',
        [name, username, email, hashedPassword]
      );

    // Send back the new user details
    res.status(201).json({ id: result.insertId, name, username, email });
  } catch (err) {
    console.error('Database Connection Error', err);
    res.status(500).json({ error: 'Registration failed' });
  }
});


module.exports = router;

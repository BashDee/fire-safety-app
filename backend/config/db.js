const mysql = require('mysql2/promise');

// Load environment variables (if using dotenv)
require('dotenv').config();


// MySQL connection pool
const pool = mysql.createPool({
  host: process.env.DB_HOST || 'localhost',
  user: process.env.DB_USER || 'mysql',
  database: process.env.DB_NAME || 'fire_safety_db',
  password: process.env.DB_PASSWORD || 'mysql',
  waitForConnections: true,
  connectionLimit: 10,  // Maximum number of connections in the pool
  queueLimit: 0         // No limit on the number of requests queued
});


// Promisify the pool for async/await queries
const promisePool = pool.promise();

promisePool.getConnection()
  .then(() => console.log('Connected to MySQL Database'))
  .catch(err => console.error('Database connection error:', err));

module.exports = pool;

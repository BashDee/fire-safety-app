const { Pool } = require('pg');

const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'fire_safety_db',
  password: 'postgresql',
  port: 5432,
});

const db = async () => {
  try {
    await pool.connect();
    console.log('Connected to PostgreSQL Database');
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = db;

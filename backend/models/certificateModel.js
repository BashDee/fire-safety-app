const { Pool } = require('pg');
const pool = new Pool();

const createCertificate = async (userId, buildingName, location, fireSafetyMeasures) => {
  const result = await pool.query(
    'INSERT INTO certificates (user_id, building_name, location, fire_safety_measures, status) VALUES ($1, $2, $3, $4, $5) RETURNING id',
    [userId, buildingName, location, fireSafetyMeasures, 'Pending']
  );
  return result.rows[0];
};

const findCertificateById = async (id) => {
  const result = await pool.query('SELECT * FROM certificates WHERE id = $1', [id]);
  return result.rows[0];
};

module.exports = {
  createCertificate,
  findCertificateById,
};

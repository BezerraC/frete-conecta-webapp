const { Pool } = require('pg');
require('dotenv').config();

const pool = new Pool({
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  max: process.env.DB_MAX || 10,
  idleTimeoutMillis: process.env.DB_IDLE_TIMEOUT || 30000,
  connectionTimeoutMillis: process.env.DB_CONNECTION_TIMEOUT || 2000,
});

pool.on('connect', () => {
  console.log('Banco de dados conectado com sucesso.');
});

pool.on('error', (err) => {
  console.error('Erro no pool de conexões:', err);
});

module.exports = pool;

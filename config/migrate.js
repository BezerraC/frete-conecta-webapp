const pool = require('./db');

const createUsersTable = async () => {
  const query = `
    CREATE TABLE IF NOT EXISTS users (
      id SERIAL PRIMARY KEY,
      fname VARCHAR(255) NOT NULL,
      lname VARCHAR(255) NOT NULL,
      phone VARCHAR(20) NOT NULL,
      email VARCHAR(255) UNIQUE NOT NULL,
      password VARCHAR(255) NOT NULL,
      type VARCHAR(50) DEFAULT 'cliente',
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;

  try {
    await pool.query(query);
    console.log('Tabelas criadas ou já existe.');
  } catch (err) {
    console.error('Erro ao criar a tabela:', err);
  } 
};

createUsersTable();

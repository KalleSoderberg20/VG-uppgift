// /*
// Importerar moduler
// */
// const { Sequelize } = require('sequelize');

// /*
// Skapar en ny databasanslutning (Sequelize-instans)
// Använder vi SQLite som databas
// */
// const sequelize = new Sequelize({
//   dialect: 'sqlite',
//   storage: './database.sqlite', 
//   logging: false
// });

// /*
// Exporterar 
// */
// module.exports = sequelize;

// databas.js

require('dotenv').config();
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize(
  process.env.DB_NAME,       // databasnamn
  process.env.DB_USER,       // användarnamn
  process.env.DB_PASSWORD,   // lösenord
  {
    host: process.env.DB_HOST,   // t.ex. 'localhost'
    port: process.env.DB_PORT,   // t.ex. 5432
    dialect: 'postgres',
    logging: false,
  }
);

module.exports = sequelize;



const mysql = require('mysql');

const db = mysql.createConnection({
  host: process.env.HOST,
  port: process.env.PORT,
  user: 'admin',
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports.db = db;
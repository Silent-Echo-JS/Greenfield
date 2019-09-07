const mysql = require('promise-mysql');
const initializeSchema = require('.initializeSchema');

const db = mysql.createPool({
  host: process.env.HOST,
  port: process.env.PORT,
  user: process.env.USER,
  password: process.env.PASSWORD,
  database: process.env.DATABASE,
});

module.exports.db = db;
module.exports.initializeSchema = initializeSchema;
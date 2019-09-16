const fs = require('fs');
const path = require('path');
const Sequelize = require('sequelize');
// var env = process.env.NODE_ENV || "development";
// var config = require(path.join(__dirname, "..", "config", "config.json"))[env];
// var sequelize = new Sequelize(
//   config.database,
//   config.username,
//   config.password,
//   config
// );

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT,
} = process.env;

console.log('HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', HOST);
console.log('HOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOOO', DATABASE);

const sequelize = new Sequelize(DATABASE, USER_NAME, USER_PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

const db = {};

fs.readdirSync(__dirname)
  .filter((file) => file.indexOf(".") !== 0 && file !== "index.js")
  .forEach((file) => {
    let model = sequelize.import(path.join(__dirname, file));
    db[model.name] = model;
  });

Object.keys(db).forEach((modelName) => {
  if ('associate' in db[modelName]) {
    db[modelName].associate(db);
  }
});

db.sequelize = sequelize;
db.Sequelize = Sequelize;

module.exports = db;

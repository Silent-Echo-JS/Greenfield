module.exports = ({ connection, dbName }) => {
  return Promise.resolve()
    .then(() => connection.query(`CREATE DATABASE IF NOT EXISTS ${dbName}`))
    .then(() => connection.query(`USE ${dbName}`))
    // .then(() => connection.query(`
    //   CREATE TABLE IF NOT EXISTS links (
    //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     url VARCHAR(255),
    //     baseUrl VARCHAR(255),
    //     code VARCHAR(5),
    //     title VARCHAR(255),
    //     visits INT NOT NULL DEFAULT 0
    //   )
    // `))
    // .then(() => connection.query(`
    //   CREATE TABLE IF NOT EXISTS clicks (
    //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     linkId INT
    //   )
    // `))
    // .then(() => connection.query(`
    //   CREATE TABLE IF NOT EXISTS users (
    //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     username VARCHAR(40) UNIQUE,
    //     password VARCHAR(64),
    //     salt VARCHAR(64)
    //   )
    // `))
    // .then(() => connection.query(`
    //   CREATE TABLE IF NOT EXISTS sessions (
    //     id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
    //     hash VARCHAR(64),
    //     userId INT
    //   )
    // `));
};

module.exports = function (sequelize, Sequelize) {
  var Deposit = sequelize.define("deposit", {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER
    },
    account: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    date:{
      type: Sequelize.STRING,
      notEmpty: true
    },
    notes: {
      type: Sequelize.STRING,
      notEmpty: true
    },
    checkNumber: {
      type: Sequelize.INTEGER,
      notEmpty: true
    },
    amount: {
      type: Sequelize.DECIMAL,
      notEmpty: true
    },
    created: {
      type: Sequelize.DATE,
      notEmpty: true
    },
    user: {
      type: Sequelize.DATE,
      notEmpty: true
    },
  });
  return Deposit;
};

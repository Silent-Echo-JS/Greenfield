module.exports = function (sequelize, Sequelize) {
  const Expense = sequelize.define('expense', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    account: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    category: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    date: {
      type: Sequelize.DATE,
      notEmpty: true,
    },
    notes: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    checkNumber: {
      type: Sequelize.INTEGER,
      notEmpty: true,
    },
    amount: {
      type: Sequelize.DECIMAL,
      notEmpty: true,
    },
    created: {
      type: Sequelize.DATE,
      notEmpty: true,
    },
    user: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
  });
  return Expense;
};

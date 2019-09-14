module.exports = function (sequelize, Sequelize) {
  let Tenants = sequelize.define('tenants', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    user: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    firstName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    lastName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    created: {
      type: Sequelize.DATE,
      notEmpty: true,
    },
    date: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    email: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    phone: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    altPhone: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    emContactName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    emContactNumber: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    unit: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    address: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    monthly: {
      type: Sequelize.DECIMAL,
      notEmpty: true,
    },
    ownership: {
      type: Sequelize.DECIMAL,
      notEmpty: true,
    },
    notes: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    board: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
  });
  return Tenants;
};

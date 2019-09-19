module.exports = function (sequelize, Sequelize) {
  const User = sequelize.define('user', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    operationName: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    address: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    city: {
      type: Sequelize.TEXT,
    },
    state: {
      type: Sequelize.STRING,
      allowNull: false,
    },
    zipcode: {
      type: Sequelize.INTEGER(11),
      allowNull: false,
    },
    phone: {
      type: Sequelize.STRING,
      allowNull: true,
    },
    email: {
      type: Sequelize.STRING,
      validate: {
        isEmail: true,
      },
    },
    firebaseId: {
      type: Sequelize.STRING,
      allowNull: false,
    },
  });
  // User.sync();
  return User;
};

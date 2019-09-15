module.exports = function (sequelize, Sequelize) {
  var Subcategory = sequelize.define('Subcategory', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    type: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    created: {
      type: Sequelize.DATE,
      notEmpty: true,
    },
    notes: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
  });
  return Subcategory;
};

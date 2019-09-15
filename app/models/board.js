module.exports = function (sequelize, Sequelize) {
  var Board = sequelize.define('board', {
    id: {
      autoIncrement: true,
      primaryKey: true,
      type: Sequelize.INTEGER,
    },
    name: {
      type: Sequelize.STRING,
      notEmpty: true,
    },
    position: {
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
  return Board;
};

const authController = require('../controllers/authcontroller.js');
module.exports = (app) => {
  app.get('/signup', authController.signup);
}
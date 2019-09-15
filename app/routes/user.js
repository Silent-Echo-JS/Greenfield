const express = require('express');

const users = express.Router();
const cors = require('cors');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');

const User = require('../models');

users.use(cors());

users.post('/register', (req, res) => {
  const userData = {
    firstname: req.body.first_name,
    lastname: req.body.last_name,
    username: req.body.email,
    password: req.body.password,
  };

  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    // TODO bcrypt
    .then((user) => {
      if (!user) {
        bcrypt.hash(req.body.password, 10, (err, hash) => {
          userData.password = hash;
          User.create(userData)
            .then((user) => {
              res.json({ status: `${user.email}Registered!` });
            })
            .catch((err) => {
              res.send(`error: ${err}`);
            });
        });
      } else {
        res.json({ error: 'User already exists' });
      }
    })
    .catch((err) => {
      res.send(`error: ${err}`);
    });
});

users.post('/login', (req, res) => {
  User.findOne({
    where: {
      email: req.body.email,
    },
  })
    .then((user) => {
      if (user) {
        if (bcrypt.compareSync(req.body.password, user.password)) {
          const token = jwt.sign(user.dataValues, process.env.SECRET_KEY, {
            expiresIn: 1440,
          });
          res.send(token);
        }
      } else {
        res.status(400).json({ error: 'User does not exist' });
      }
    })
    .catch((err) => {
      res.status(400).json({ error: err });
    });
});

module.exports = users;

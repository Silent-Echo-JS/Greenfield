require('dotenv').config();
const express = require('express');
const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const { db } = require('./db/index');
const exphbs = require("express-handlebars");
const models = require('../app/models');

models.sequelize
  .sync()
  .then(function() {
    console.log("Nice! Database looks fine");
  })
  .catch(function(err) {
    console.log(err, "Something went wrong with the Database Update!");
  });

// for handlebars
app.set("views", "./app/views");
app.engine(
  "hbs",
  exphbs({
    extname: ".hbs"
  })
);
app.set("view engine", ".hbs");

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(session({ secret: 'secret',resave: true, saveUninitialized:true}));
app.use(passport.initialize());
app.use(passport.session());

app.use(express.static(__dirname + '/../client/dist'));

app.get('/', (req, res) => {
  // res.send('Welcome to the site');
});

app.get('/accounts', (req, res) => {
  const query = 'SELECT * FROM accounts';

  db.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.get /accounts');
    } else {
      console.log(accounts, 'app.get /accounts');
      res.send(accounts);
    }
  });
});

app.post('/accounts', (req, res) => {
  const { accountName } = req.body;

  const query = `INSERT INTO accounts (account) VALUES ('${accountName}')`;

  db.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.post /accounts');
    } else {
      res.send(accounts);
    }
  });
});

app.post('/deposit', (req, res) => {
  const { account, date, category, notes, amount, checkNumber, decimal, created } = req.body;
  const deci = decimal;

  const query = `INSERT INTO deposit (checkNumber, date, created, amount, category, notes, deci, account) 
  VALUES ('${checkNumber}', '${date}', '${created}', '${amount}', '${category}', '${notes}', '${deci}', '${account}')`;

  db.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.get accounts');
    } else {
      res.send(accounts);
    }
  });
});

app.post('/category', (req, res) => {
  const { categoryName } = req.body;

  const query = `INSERT INTO categories (category) VALUES ('${categoryName}')`;

  db.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.post /category');
    } else {
      res.send(accounts);
    }
  });
});

app.get('/category', (req, res) => {
  const query = 'SELECT * FROM categories';

  db.query(query, (error, categories) => {
    if (error) {
      console.log(error, 'app.get /categories');
    } else {
      res.send(categories);
    }
  });
});

app.get('/recentDeposits', (req, res) => {
  const query = 'SELECT * FROM deposit ORDER BY id DESC LIMIT 10;';

  db.query(query, (error, recentDeposits) => {
    if (error) {
      console.log(error, 'app.get /categories');
    } else {
      res.send(recentDeposits);
    }
  });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const partials = require('express-partials');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();
const { db } = require('./db/index');

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

app.get('/', (req, res) => {
  
});

app.get('/login', (req, res) => {
  
});

app.get('/signup', (req, res) => {
  
});

app.get('/about', (req, res) => {
  
});

app.get('/tutorial', (req, res) => {
  
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
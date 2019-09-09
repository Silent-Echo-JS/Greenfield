require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const partials = require('express-partials');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const app = express();

app.use(partials());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static(__dirname + '/../client/dist'));


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

app.listen(3000, () => {
  console.log('listening on port 3000');
});

app.get('/accounts', (req, res) => {
  const query = 'SELECT * FROM accounts';

  con.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.get accounts');
    } else {
      res.send(accounts);
    }
  });
});

app.post('/accounts', (req, res) => {
  const { accountName } = req.body;

  const query = `INSERT INTO accounts (account) VALUES ('${accountName}')`;

  con.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.get accounts');
    } else {
      res.send(accounts);
    }
  });
});

app.post('/deposit', (req, res) => {
  const { account, date, category, notes, amount, checkNumber, decimal, created } = req.body;
  const deci = decimal;

  console.log(req.body);

  const query = `INSERT INTO deposit (checkNumber, date, created, amount, category, notes, deci, account) 
  VALUES ('${checkNumber}', '${date}', '${created}', '${amount}', '${category}', '${notes}', '${deci}', '${account}')`;

  con.query(query, (error, accounts) => {
    if (error) {
      console.log(error, 'app.get accounts');
    } else {
      res.send(accounts);
    }
  });
});
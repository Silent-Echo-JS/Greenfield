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
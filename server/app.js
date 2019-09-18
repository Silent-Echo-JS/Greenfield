require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const models = require('../app/models');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true
}));

app.use(express.static(`${__dirname}/../client/dist`));


//* ****************************
// REVENUES
//* ****************************

// Add a Deposit
app.post('/api/addDeposit', (req, res) => {


});

// View All Deposits/Revenue
app.get('/api/viewRevenues' (req, res) => {


});


//* ****************************
// EXPENSES
//* ****************************

// Add an Expense
app.post('/api/addExpense', (req, res) => {


});

// View Expenses
app.get('/api/viewExpenses' (req, res) => {


});


//* ****************************
// HOMEOWNERS
//* ****************************

// Add a Homeowner
app.post('/api/addHomeOwner', (req, res) => {

});

// Delete a Homeowner

app.post('/api/removeHomeowner', (req, res) => {


});

// Update a Homeowner

app.put('/api/updateHomeowner', (req, res) => {


});

// View HomeOwners
app.get('/api/viewHomeowners', (req, res) => {


});

//* ****************************
// STAFF
//* ****************************

// Add a Staff Person
app.post('/api/addStaff', (req, res) => {


});

// View Staff
app.get('/api/viewStaff', (req, res) => {


});

//* ****************************
// WORK TICKETS
//* ****************************

// Add a Work Ticket
app.post('api/addTicket', (req, res) => {


});

// View Open Tickets
app.get('api/viewOpenTickets', (req, res) => {


});

// View All Tickets
app.get('api/viewAllTickets', (req, res) => {


});

// Close a Work Ticket
app.post('api/closeWorkTicket', (req, res) => {


});

//* ****************************
// BOARD MEMBERS
//* ****************************

// Add a Board Member
app.post('/api/addBoardMember', (req, res) => {


});

// Delete a Board Member
app.post('/api/deleteBoardMember', (req, res) => {


});

//* ****************************
// HOA
//* ****************************

// Create a HOA
app.post('api/signUp', (req, res) => {


});

// Login to HOA
app.get('api/login', (req, res) => {


});


const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});
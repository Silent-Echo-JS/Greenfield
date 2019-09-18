require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const models = require('../app/models/db');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

app.use(express.static(`${__dirname}/../client/dist`));


// *****************************
// SAVING PROFILE INFO
// *****************************

app.post('/insertUserInfo', (req, res) => {
  const {
    name, address, city, state, zipcode, phone, email, firebaseId,
  } = req.body;

  // when a user signs in, query the database for the user's firebaseId
  // if the firebaseId already exists (meaning the user has already exists), return their info
  // else, insert the new user's data into the table
  const sqlQuery1 = `SELECT * FROM hoa WHERE firebaseId=${firebaseId}`;

  models.sequelize.query(sqlQuery1, {
    model: models.Hoa,
  })
    .then((currentUserInfo) => {
      if (currentUserInfo) {
        return res.send(currentUserInfo);
      }
      const sqlQuery = `INSERT INTO hoa (name, address, city, state, zipcode, phone, email, firebaseId) 
        VALUES ('${name}', '${address}', '${city}', '${state}', '${zipcode}', '${phone}', '${email}', '${firebaseId}')`;

      return models.sequelize.query(sqlQuery, {
        model: models.Hoa,
      })
        .then((userInfo) => res.send(userInfo))
        .catch((err) => {
          console.error(err, 'ERROR: Info was not saved.');
        });
    });
});

app.get('/checkForUser/:firebaseId', (req, res) => {
  const sqlQuery = `SELECT * FROM users WHERE firebaseId=${req.params.firebaseId}`;
  console.log("======request", req.params);
  return models.sequelize.query(
    sqlQuery,
    {
      model: models.Hoa,
    },
  ).then((records) => res.send({
    registered: !!records.length,
  }))
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT ACCOUNTS.');
    });
});


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

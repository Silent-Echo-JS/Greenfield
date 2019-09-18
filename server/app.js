require('dotenv').config();

const express = require('express');
const session = require('express-session');
const bodyParser = require('body-parser');
const models = require('../app/models/db.js');

const app = express();

app.use(bodyParser.urlencoded({
  extended: true,
}));
app.use(bodyParser.json());
app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,
}));

app.use(express.static(`${__dirname}/../client/dist`));


//* ****************************
// REVENUES
//* ****************************

// Add a Deposit
app.post('/api/addDeposit', (req, res) => {


});

// View All Deposits/Revenue
app.get('/api/viewRevenues', (req, res) => {


});


//* ****************************
// EXPENSES
//* ****************************

// Add an Expense
app.post('/api/addExpense', (req, res) => {


});

// View Expenses
app.get('/api/viewExpenses', (req, res) => {


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
  models.Staff.create({
    hoaId: req.body.hoaId,
    department: req.body.department,
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    fullName: `${req.body.lastName}, ${req.body.firstName}`,
    phone: req.body.phone,
    email: req.body.email,
  })
    .then(() => {
      res.send(201);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get ALL Staff
app.get('/api/getStaff', (req, res) => {
  models.Staff.findAll()
    .then((staff) => {
      res.send(staff);
    })
    .catch((error) => {
      console.error(error);
    });
});

//* ****************************
// WORK TICKETS
//* ****************************

// Add a Work Ticket
app.post('/api/addTicket', (req, res) => {
  models.WorkTickets.create({
    hoaId: req.body.hoaId,
    title: req.body.title,
    description: req.body.description,
    assignedTo: req.body.assignedTo,
  })
    .then(() => {
      res.send(201);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get Open Tickets
app.get('/api/getOpenTickets', (req, res) => {
  models.WorkTickets.findAll({
    isOpen: 1,
  })
    .then((openTickets) => {
      res.send(openTickets);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Get All Tickets
app.get('/api/getAllTickets', (req, res) => {
  models.WorkTickets.findAll()
    .then((allTickets) => {
      res.send(allTickets);
    })
    .catch((error) => {
      console.error(error);
    });
});

// Close a Work Ticket
app.post('/api/closeWorkTicket', (req, res) => {
  models.WorkTickets.update({
    isOpen: 0,
    dateCompleted: models.sequelize.literal('CURRENT_TIMESTAMP'),
  }, {
    where: {
      id: req.body.id,
    },
  })
    .then(() => {
      res.send(204);
    })
    .catch((error) => {
      console.error(error);
    });
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
  console.log(`you servin on port ${port}`);
});
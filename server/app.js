const express = require('express');

const app = express();
const passport = require('passport');
const session = require('express-session');
const bodyParser = require('body-parser');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(session({ secret: 'secret', resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

const models = require('../app/models');

require('../app/config/passport')(passport, models.user);

models.sequelize
  .sync()
  .then(() => {
    console.log('Nice! Database looks fine');
  })
  .catch((err) => {
    console.log(err, 'Something went wrong with the Database Update!');
  });

app.use(express.static(`${__dirname}/../client/dist`));

//* ****************************
// ACCOUNTS
//* ****************************
app.get('/accounts', (req, res) => {
  const sqlQuery = 'SELECT * FROM accounts';

  models.sequelize.query(sqlQuery, {
    model: models.Accounts,
  })
    .then((records) => {
      console.log(records[0], 'RECORDS');
      res.send(records[0]);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT ACCOUNTS.');
    });
});

app.post('/accounts', (req, res) => {
  const { accountName } = req.body;

  const sqlQuery = `INSERT INTO accounts (account) VALUES ('${accountName}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Accounts,
  })
    .then((records) => {
      res.send(201);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT INTO ACCOUNTS.');
    });
});

//* ****************************
// DEPOSIT
//* ****************************
app.post('/newDeposit', (req, res) => {
  const {
    account, date, category, notes, amount, checkNumber, created,
  } = req.body;

  const sqlQuery = `INSERT INTO deposit (checkNumber, date, created, amount, category, notes, account) 
  VALUES ('${checkNumber}', '${date}', '${created}', '${amount}', '${category}', '${notes}', '${account}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Deposit,
  })
    .then((records) => {
      res.send(201);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT NEW DEPOSIT.');
    });
});

app.get('/recentDeposits', (req, res) => {
  const sqlQuery = 'SELECT * FROM deposit ORDER BY id DESC LIMIT 10';

  models.sequelize.query(sqlQuery, {
    model: models.Deposit,
  })
    .then((records) => {
      console.log(records, 'records');
      res.send(records[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//* ****************************
// EXPENSES
//* ****************************
app.post('/newExpense', (req, res) => {
  const {
    account, date, category, notes, amount, checkNumber, created,
  } = req.body;

  const sqlQuery = `INSERT INTO expense (checkNumber, date, created, amount, category, notes, account) 
  VALUES ('${checkNumber}', '${date}', '${created}', '${amount}', '${category}', '${notes}', '${account}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Accounts,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error);
    });
});

app.get('/recentExpenses', (req, res) => {
  const sqlQuery = 'SELECT * FROM expense ORDER BY id DESC LIMIT 10;';

  models.sequelize.query(sqlQuery, {
    model: models.Expense,
  })
    .then((records) => {
      res.send(records[0]);
    })
    .catch((error) => {
      console.log(error);
    });
});

//* ****************************
// CATEGORY
//* ****************************
app.post('/category', (req, res) => {
  const { categoryName } = req.body;

  const sqlQuery = `INSERT INTO categories (category) VALUES ('${categoryName}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Categories,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT NEW CATEGORY.');
    });
});

app.get('/category', (req, res) => {
  const sqlQuery = 'SELECT * FROM categories';

  models.sequelize.query(sqlQuery, {
    model: models.Categories,
  })
    .then((records) => {
      res.send(records[0]);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT CATEGORIES.');
    });
});

//* ****************************
// TENANT
//* ****************************
app.post('/newTenant', (req, res) => {
  const {
    firstName, lastName, email,
    phone, altPhone, emContactName,
    emContactNumber, notes, ownership,
    unit, address, monthly, date, created,
  } = req.body;

  const sqlQuery = `INSERT INTO tenants (firstName, lastName, email, phone, altPhone, emContactName, emContactNumber, notes, ownership, unit, address, monthly, date, created) VALUES ('${firstName}', '${lastName}', '${email}', '${phone}', '${altPhone}', '${emContactName}', '${emContactNumber}', '${notes}', '${ownership}', '${unit}', '${address}', '${monthly}', '${date}', '${created}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Tenants,
  })
    .then((records) => {
      res.send(201);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT NEW TENANT.');
    });
});

const port = process.env.port || 3000;
app.listen(port, () => {
  console.log(`server listening on port ${port}`);
});

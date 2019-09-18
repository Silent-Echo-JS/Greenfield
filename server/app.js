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

// models.sequelize
//   .sync()
//   .then(() => {
//     console.log('Nice! Database looks fine');
//   })
//   .catch((err) => {
//     console.log(err, 'Something went wrong with the Database Update!');
//   });

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


// *****************************
// ACCOUNTS
// *****************************
app.get('/accounts', (req, res) => {
  const sqlQuery = 'SELECT * FROM Subcategories WHERE type="account"';

  models.sequelize.query(sqlQuery, {
    model: models.Subcategory,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT ACCOUNTS.');
    });
});

app.post('/accounts', (req, res) => {
  const { accountName, type } = req.body;

  const sqlQuery = `INSERT INTO Subcategories (name, type) VALUES ('${accountName}', '${type}')`;

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

// *****************************
// DEPOSIT
// *****************************
app.post('/newDeposit', (req, res) => {
  const {
    account, date, category, notes, amount, checkNumber, created,
  } = req.body;

  const sqlQuery = `INSERT INTO deposits (checkNumber, date, created, amount, category, notes, account) 
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
  const sqlQuery = 'SELECT * FROM deposits ORDER BY id DESC LIMIT 5';

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

// *****************************
// EXPENSES
// *****************************
app.post('/newExpense', (req, res) => {
  const {
    account, date, category, notes, amount, checkNumber, created,
  } = req.body;

  const sqlQuery = `INSERT INTO expenses (checkNumber, date, created, amount, category, notes, account) 
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
  const sqlQuery = 'SELECT * FROM expenses ORDER BY id DESC LIMIT 5;';

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

// *****************************
// CATEGORY
// *****************************
app.post('/category', (req, res) => {
  const { categoryName, type } = req.body;

  const sqlQuery = `INSERT INTO Subcategories (name, type) VALUES ('${categoryName}', '${type}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Subcategory,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT NEW CATEGORY.');
    });
});

app.get('/category', (req, res) => {
  const sqlQuery = 'SELECT * FROM Subcategories WHERE type="category"';

  models.sequelize.query(sqlQuery, {
    model: models.Subcategory,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT SUBCATEGORY.');
    });
});

// *****************************
// TENANT
// *****************************
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

app.get('/getTenants', (req, res) => {
  const sqlQuery = 'SELECT * FROM tenants ORDER BY id DESC';

  models.sequelize.query(sqlQuery, {
    model: models.Tenants,
  })
    .then((records) => {
      res.send(records[0]);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT TENANTS.');
    });
});

app.get('/getPositions', (req, res) => {
  const sqlQuery = 'SELECT * FROM Subcategories WHERE type="position"';

  models.sequelize.query(sqlQuery, {
    model: models.Subcategory,
  })
    .then((positions) => {
      res.send(positions);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT POSITIONS.');
    });
});


app.get('/getMembers', (req, res) => {
  const sqlQuery = 'SELECT * FROM boards ORDER BY id DESC LIMIT 5;';

  models.sequelize.query(sqlQuery, {
    model: models.Board,
  })
    .then((members) => {
      console.log(members, 'MEMBERS');
      res.send(members[0]);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT SELECT MEMBERS.');
    });
});

app.post('/newPosition', (req, res) => {
  const { positionName, type } = req.body;

  const sqlQuery = `INSERT INTO Subcategories (name, type) VALUES ('${positionName}', '${type}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Subcategory,
  })
    .then((records) => {
      res.send(records);
    })
    .catch((error) => {
      console.log(error, 'ERROR: CANNOT INSERT NEW POSITION.');
    });
});

app.post('/newMember', (req, res) => {
  const { tenant, position } = req.body;

  const sqlQuery = `INSERT INTO boards (name, position) VALUES ('${tenant}', '${position}')`;

  models.sequelize.query(sqlQuery, {
    model: models.Board,
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

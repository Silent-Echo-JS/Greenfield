const Sequelize = require('sequelize');

const {
  DATABASE,
  USER_NAME,
  USER_PASSWORD,
  HOST,
  DB_PORT,
} = process.env;

const sequelize = new Sequelize(DATABASE, USER_NAME, USER_PASSWORD, {
  host: HOST,
  port: DB_PORT,
  dialect: 'mysql',
});

// test the db connection
sequelize.authenticate()
  .then(() => {
    console.log('Connection has been established successfully.');
  })
  .catch((err) => {
    console.error('Unable to connect to the database:', err);
  });

// make a HOA table
const Hoa = sequelize.define('hoa', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  name: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  zipcode: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  firebaseId: {
    type: Sequelize.STRING,
    allowNull: false,
  },
}, {
  freezeTableName: true,
  timeStamps: true,
});

// make a homeowners table
const Homeowners = sequelize.define('homeowners', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  address: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  state: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  zipcode: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
  monthlyDues: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  balanceDue: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  isBoardMember: {
    type: Sequelize.TINYINT(1),
    allowNull: true,
  },
  boardMemberId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: true,
});

// make a boardMembers table
const BoardMembers = sequelize.define('boardMembers', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  accountId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Homeowners,
      key: 'id',
    },
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  position: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make an expenses table
const Expenses = sequelize.define('expenses', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  accountId: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    foreignKey: true,
    references: {
      model: Homeowners,
      key: 'id',
    },
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  payType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amount: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make an revenues table
const Revenues = sequelize.define('revenues', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  accountId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Homeowners,
      key: 'id',
    },
  },
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  payType: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  amountPaid: {
    type: Sequelize.DECIMAL,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});


// make an staff table
const Staff = sequelize.define('staff', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  department: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  firstName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  fullName: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  phone: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  email: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  createdAt: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a workTickets table
const WorkTickets = sequelize.define('workTickets', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  title: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  description: {
    type: Sequelize.STRING,
    allowNull: true,
  },
  assignedTo: {
    type: Sequelize.INTEGER(11),
    allowNull: true,
    foreignKey: true,
    references: {
      model: Staff,
      key: 'id',
    },
  },
  isOpen: {
    type: Sequelize.TINYINT(1),
    allowNull: true,
  },
  dateCompleted: {
    type: Sequelize.DATE,
    allowNull: true,
  },
}, {
  freezeTableName: true,
  timeStamps: false,
});

// make a YTD revenue table
const RevenueYTD = sequelize.define('revenueYTD', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  totalYTD: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jan: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  feb: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  mar: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  apr: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  may: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jun: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jul: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  aug: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  sep: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  oct: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  nov: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  dec: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
});

// make a YTD expense table
const ExpenseYTD = sequelize.define('expenseYTD', {
  id: {
    type: Sequelize.INTEGER(11),
    autoIncrement: true,
    primaryKey: true,
  },
  hoaId: {
    type: Sequelize.INTEGER(11),
    allowNull: false,
    foreignKey: true,
    references: {
      model: Hoa,
      key: 'id',
    },
  },
  totalYTD: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jan: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  feb: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  mar: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  apr: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  may: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jun: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  jul: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  aug: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  sep: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  oct: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  nov: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
  dec: {
    type: Sequelize.DECIMAL,
    allowNull: true,
  },
});

// sync all of the models
// Hoa.sync();
// Homeowners.sync();
// BoardMembers.sync();
// Staff.sync();
// WorkTickets.sync();
// Revenues.sync();
// RevenueYTD.sync();
// Expenses.sync();
// ExpenseYTD.sync();


// export all of the models
module.exports.sequelize = sequelize;
module.exports.Hoa = Hoa;
module.exports.Homeowners = Homeowners;
module.exports.BoardMembers = BoardMembers;
module.exports.Revenues = Revenues;
module.exports.Expenses = Expenses;
module.exports.Staff = Staff;
module.exports.WorkTickets = WorkTickets;
module.exports.RevenueYTD = RevenueYTD;
module.exports.ExpenseYTD = ExpenseYTD;
module.exports.Sequelize = Sequelize;

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
  }
}, {
  freezeTableName: true,
  timeStamps: false,
});

// favRecipes.belongsToMany(Users, {
//   through: 'users_recipes',
//   foreignKey: 'recipeId',
//   onDelete: 'cascade',
//   hooks: true,
// });

// Users.belongsToMany(favRecipes, {
//   through: 'users_recipes',
//   foreignKey: 'userId',
//   onDelete: 'cascade',
//   hooks: true,
// });

// make an expenses table
const Expenses = sequelize.define('expenses', {
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
  date: {
    type: Sequelize.DATE,
    allowNull: true,
  },
  payType: {
    type: Sequelize.ENUM,
    allowNull: true,
    values: ['credit', 'check', 'cash'],
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
    type: Sequelize.ENUM,
    allowNull: true,
    values: ['credit', 'check', 'cash'],
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
    type: Sequelize.ENUM,
    allowNull: true,
    values: ['maintenance', '', ''],
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
    }
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

// sync all of the models
Hoa.sync();
Homeowners.sync();
BoardMembers.sync();
Revenues.sync();
Expenses.sync();
Staff.sync();
WorkTickets.sync();


// export all of the models
module.exports.Hoa = Hoa;
module.exports.Homeowners = Homeowners;
module.exports.BoardMembers = BoardMembers;
module.exports.Revenues = Revenues;
module.exports.Expenses = Expenses;
module.exports.Staff = Staff;
module.exports.WorkTickets = WorkTickets;

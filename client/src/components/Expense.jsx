import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';
import ListDeposits from './ListDeposits.jsx';

class Expense extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      account: null,
      date: null,
      created: new Date(),
      category: null,
      checkNumber: '0000',
      amount: 0,
      notes: null,
      accounts: { data: [' '] },
      categories: { data: [' '] },
      recentExpenses: { data: [' '] }
    };

    this.handleChange = this.handleChange.bind(this);

    this.addNewAccount = this.addNewAccount.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.getAccounts = this.getAccounts.bind(this);

    this.addNewCategory = this.addNewCategory.bind(this);
    this.createCategory = this.createCategory.bind(this);
    this.getCategories = this.getCategories.bind(this);

    this.submit = this.submit.bind(this);

    this.getRecentExpenses = this.getRecentExpenses.bind(this);
  }

  componentDidMount() {
    this.getAccounts();
    this.getCategories();
    this.getRecentExpenses();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /*TODO: ADD VERIFICATION.*/
  addNewAccount() {
    const accountName = window.prompt('Type new account name:');
    this.createAccount({ accountName: accountName, type: 'account' });
    window.alert('Created a new account.');
    this.setState({ account: accountName });
    this.componentDidMount();
  }

  createAccount(accountName) {
    axios.post('/accounts', accountName)
      .then((res) => {
        console.log('CREATED NEW ACCOUNT.');
      })
      .catch((error) => {
        console.log(error, '[deposit/createAccount()]');
      });
  }

  getAccounts() {
    axios.get('/accounts')
      .then((accountNames) => {
        this.setState({ accounts: accountNames });
        this.setState({ account: accountNames.data[0].name });
      })
      .catch((error) => {
        console.log(error, 'getAccounts');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  addNewCategory() {
    const categoryName = window.prompt('Type new category name:');
    this.createCategory({ categoryName: categoryName, type: 'category' });
    window.alert('Created a new category.');
    this.setState({ category: categoryName });
    this.componentDidMount();
  }

  createCategory(categoryName) {
    axios.post('/category', categoryName)
      .then((res) => {
        console.log('CREATED NEW CATEGORY.');
      })
      .catch((error) => {
        console.log(error, '[deposit/createCategory()]');
      });
  }

  getCategories() {
    axios.get('/category')
      .then((categoryNames) => {
        this.setState({ categories: categoryNames });
        this.setState({ category: categoryNames.data[0].name });
      })
      .catch((error) => {
        console.log(error, '[deposit/getCategories()]');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    const { amount, checkNumber } = this.state;
    this.setState({ amount: parseInt(amount, 10) });
    this.setState({ checkNumber: parseInt(checkNumber, 10) })
    this.setState({ created: new Date() });
    this.submitExpense(this.state);
    window.alert('Submitted a new expense.');
    this.componentDidMount();
  }

  submitExpense(expenseSlip) {
    axios.post('/newExpense', expenseSlip)
      .then((res) => {
        console.log('SUBMIT EXPENSE');
      })
      .catch((error) => {
        console.log(error, 'SUBMIT EXPENSE');
      });
  }

  getRecentExpenses() {
    axios.get('/recentExpenses')
      .then((recentExpenses) => {
        this.setState({ recentExpenses: recentExpenses });
      })
      .catch((error) => {
        console.log(error, 'getRecentExpenses');
      });
  }

  render() {
    const { accounts, account, date, categories, category, checkNumber, amount, notes, recentExpenses } = this.state;

    return (
      <center>
        <div className='subHead'><h1>Expense</h1></div>

        <div className="fieldDiv">
          <center><h2>New Expense</h2></center>

    <div class='subDiv'>
          <h4>Select Account:</h4><br />
          <select id="account" value={account} onChange={this.handleChange}>
            {accounts.data.map(accountOption => {
              return <Option optionName={accountOption.name} id={accountOption.id} />
            })}
          </select><br />
          <button id="addAccount" type="submit" onClick={this.addNewAccount}>Add New Account</button>
          <br /><br />

          <h4>Date:</h4><br />
          <input id="date" type="date" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Category:</h4><br />
          <select id="category" onChange={this.handleChange} value={category}>
            {categories.data.map(categoryOption => {
              return <Option optionName={categoryOption.name} />
            })}
          </select><br />
          <button id="addCategory" type="submit" onClick={this.addNewCategory}>Add New Category</button>
          <br /><br />

          <h4>Check number:</h4><br />
          <input id="checkNumber" onChange={this.handleChange} value={checkNumber} />
          <br /><br />

          <h4>Amount:</h4><br />
          <p>$</p><input id="amount" type="number" maxLength="10" size="10" onChange={this.handleChange} value={amount} />
          <br /><br />

          <h4>Notes:</h4><br />
          <textarea id="notes" onChange={this.handleChange} value={notes} />
          <br /><br />

          <button id="submit" type="submit" onClick={this.submit}>Submit</button>
          </div>
        </div>

        <div className="fieldDiv">
          <center>
            <h2>Recent Expenses</h2>
            <ul>
            {recentExpenses.data.map(expense => {
              return <ListDeposits method={expense} id={expense.id} />
            })}
          </ul>
        </center>
      </div>
      </center>
    );
  }
}

export default Expense;

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
      category: null,
      checkNumber: null,
      amount: null,
      decimal: null,
      notes: null,
      accounts: { data: ['null'] },
      categories: { data: ['null']},
      recentExpenses: { data: ['null']}
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

  componentDidMount(){
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
    this.createAccount({ accountName });
    window.alert('Created a new account.');
    this.setState({ account: accountName });
  }

  createAccount(accountName) {
    axios.post('/accounts', accountName)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, 'createAccounts');
      });
  }

  getAccounts() {
    axios.get('/accounts')
      .then((accountNames) => {
        this.setState({ accounts: accountNames });
      })
      .catch((error) => {
        console.log(error, 'getAccounts');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  addNewCategory() {
    const categoryName = window.prompt('Type new category name:');
    this.createCategory({ categoryName });
    window.alert('Created a new category.');
    this.setState({ category: categoryName });
  }

  createCategory(categoryName) {
    axios.post('/category', categoryName)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, 'createCategory');
      });
  }

  getCategories() {
    axios.get('/category')
      .then((categoryNames) => {
        console.log(categoryNames, 'get categories');
        this.setState({ categories: categoryNames });
      })
      .catch((error) => {
        console.log(error, 'getCategories');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    const { amount, checkNumber, decimal } = this.state;
    this.setState({ amount: parseInt(amount, 10) });
    this.setState({ checkNumber: parseInt(checkNumber, 10) })
    this.setState({ decimal: parseInt(decimal, 10) });
    this.setState({ created: new Date() });
    this.submitExpense(this.state);
    window.alert('Submitted a new deposit.');
  }

  submitExpense(expenseSlip) {
    axios.post('/expense', expenseSlip)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, 'submitExpense');
      });
  }

  getRecentExpenses(){
    axios.get('/recentExpenses')
      .then((recentDeposits) => {
        console.log(recentDeposits, 'herrehrehrehrere');
        this.setState({ recentExpenses: recentExpenses });
      })
      .catch((error) => {
        console.log(error, 'getRecentExpenses');
      });
  }

  render() {
    const { accounts, account, date, categories, category, checkNumber, amount, decimal, notes, recentDeposits } = this.state;

    return (
      <center>
        <h1>Expense</h1><br /><br />

        <div className="fieldDiv">
          <center><h2>New Expense</h2></center><br /><br />

          <h4>Select Account:</h4><br />
          <select id="account" value={account} onChange={this.handleChange}>
            {accounts.data.map(accountOption => {
              return <Option optionName={accountOption.account} id={accountOption.id} />
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
              return <Option optionName={categoryOption.category}/>
            })}
          </select><br />
          <button id="addCategory" type="submit" onClick={this.addNewCategory}>Add New Category</button>
          <br /><br />

          <h4>Check number:</h4><br />
          <input id="checkNumber" onChange={this.handleChange} value={checkNumber} />
          <br /><br />

          <h4>Amount:</h4><br />
          <p>$</p><input id="amount" type="number" maxLength="10" size="10" onChange={this.handleChange} value={amount} />
          <p><b>.</b></p>&nbsp;
          <input id="decimal" type="number" min="00" max="99" value="00" onChange={this.handleChange} value={decimal} />
          <br /><br />

          <h4>Notes:</h4><br />
          <textarea id="notes" onChange={this.handleChange} value={notes} />
          <br /><br />

          <button id="submit" type="submit" onClick={this.submit}>Submit</button>
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

import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';
import ListDeposits from './ListDeposits.jsx';

class Deposit extends React.Component {
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
      categories: { data: [' ']},
      recentDeposits: { data: [' ']}
    };

    this.handleChange = this.handleChange.bind(this);

    this.addNewAccount = this.addNewAccount.bind(this);
    this.createAccount = this.createAccount.bind(this);
    this.getAccounts = this.getAccounts.bind(this);

    this.addNewCategory = this.addNewCategory.bind(this); 
    this.createCategory = this.createCategory.bind(this);   
    this.getCategories = this.getCategories.bind(this);

    this.submit = this.submit.bind(this);

    this.getRecentDeposits = this.getRecentDeposits.bind(this);
  }

  componentDidMount(){
    this.getAccounts();
    this.getCategories();
    this.getRecentDeposits();
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  /*TODO: ADD VERIFICATION.*/
  addNewAccount() {
    const accountName = window.prompt('Type new account name:');
    this.createAccount({ 
      accountName: accountName, 
      type: 'account',
      created: new Date()
    });
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
        console.log('accounts retrieved.')
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
    this.createCategory({ 
      categoryName: categoryName, 
      created: new Date(), 
      type: 'category' });
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
        this.setState({ categories: categoryNames});
        this.setState({ category: categoryNames.data[0].name });
      })
      .catch((error) => {
        console.log(error, '[deposit/getCategories()]');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    const { amount, checkNumber} = this.state;
    this.setState({ amount: parseInt(amount, 10) });
    this.setState({ checkNumber: parseInt(checkNumber, 10) })
    this.setState({ created: new Date() });
    console.log(this.state, 'state');
    this.submitDeposit(this.state);
    window.alert('Submitted a new deposit.');
    this.componentDidMount();
  }

  submitDeposit(depositSlip) {
    axios.post('/newDeposit', depositSlip)
      .then((res) => {
        console.log('SUBMIT DEPOSIT');
      })
      .catch((error) => {
        console.log(error, 'SUBMIT DEPOSIT');
      });
  }

  getRecentDeposits(){
    axios.get('/recentDeposits')
      .then((recentDeposits) => {
        this.setState({ recentDeposits: recentDeposits });
      })
      .catch((error) => {
        console.log(error, 'getRecentDeposits');
      });
  }

  render() {
    const { accounts, account, date, categories, category, checkNumber, amount, notes, recentDeposits } = this.state;

    return (
      <center>
        <h1>Deposit</h1><br /><br />

        <div className="fieldDiv">
          <center><h2>New Deposit</h2></center><br /><br />

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

      <div className="fieldDiv">
        <center>
          <h2>Recent Deposits</h2>
            <ul>
            {recentDeposits.data.map(deposit => {
              return <ListDeposits method={deposit} id={deposit.id} />
            })}
          </ul>
        </center>
      </div>
      </center>
    );
  }
}

export default Deposit;

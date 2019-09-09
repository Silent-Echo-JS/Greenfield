import React from 'react';

import Option from './Option.jsx';

class Deposit extends React.Component {
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
    };

    this.handleChange = this.handleChange.bind(this);
    this.addNewCategory = this.addNewCategory.bind(this);
    this.addNewAccount = this.addNewAccount.bind(this);
    this.submit = this.submit.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  addNewCategory() {
    window.alert('feature not yet available.');
  }

  addNewAccount() {
    const { createAccount } = this.props;
    const accountName = window.prompt('Type new account name:');
    createAccount({ accountName });
    window.alert('Created a new account.');
    this.setState({ account: accountName });
  }

  submit() {
    const newSlip = {};

    const {
      account, date, category, notes, amount, checkNumber, decimal,
    } = this.state;

    newSlip.account = account;
    newSlip.date = date;
    newSlip.category = category;
    newSlip.notes = notes;
    newSlip.amount = parseInt(amount, 10);
    newSlip.checkNumber = parseInt(checkNumber, 10);
    newSlip.decimal = parseInt(decimal, 10);
    newSlip.created = new Date();

    const { submitDeposit } = this.props;
    console.log(newSlip);
    submitDeposit(newSlip);
  }

  render() {
    const {
      account,
      date,
      category,
      checkNumber,
      amount,
      decimal,
      notes,
    } = this.state;

    const { accountNames, submitDeposit } = this.props;

    return (
      <center>
        <h1>Deposit</h1>
        <br /><br />

        <div className="fieldDiv">
          <h2>New Deposit</h2><br /><br />

          <h4>Select Account:</h4><br />
          <select id="account" value={account} onChange={this.handleChange}>
            {accountNames.data.map(accountOption => <Option accountName={accountOption.account} id={accountOption.id} />)}
          </select><br />
          <button id="addAccount" type="submit" onClick={this.addNewAccount}>Add New Account</button>
          <br /><br />

          <h4>Date:</h4><br />
          <input id="date" type="date" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Category:</h4><br />
          <select id="category" onChange={this.handleChange} value={category}>
            {/* {this.props.accounts.map(accountOption => <Option />)} */}
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
            <h2>Recent Deposit(s)</h2>
          </center>
        </div>
      </center>
    );
  }
}

export default Deposit;


//   handleClick() {
//     const account = document.getElementById('account').value;
//     const date = document.getElementById('date').value;
//     const category = document.getElementById('category').value;
//     const checkNumber = document.getElementById('checkNumber').value;
//     const amount = document.getElementById('amount').value;
//     const notes = document.getElementById('notes').value;
//     const form = {
//       account,
//       date,
//       category,
//       checkNumber,
//       amount,
//       notes,
//     };
//     console.log(form);

//     //NEED TO CREATE CHECK TO SEE IF DATA IS CORRECT TYPE

//     const confirmDeposit = window.confirm(`Create New Deposit?

// Account:
// ${account}

// Date:
// ${date}

// Category:
// ${category}

// Check #${checkNumber}

// Amount:
// $${amount}

// Notes: ${notes}
// `);

//     console.log(confirmDeposit);
//     if (confirmDeposit) {
//       sendDeposit();
//     } else {
//       //CLEAR FIELDS
//     }
//   };
// };

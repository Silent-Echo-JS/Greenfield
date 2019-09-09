import React from 'react';
import axios from 'axios';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from './Login.jsx/index.js.js';
import About from './HomePages/About.jsx';
import Tutorial from './HomePages/Tutorial.jsx';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Deposit from './Deposit.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      accounts: { data: ['test'] },
    }

    this.getAccounts = this.getAccounts.bind(this);
    this.getCategories = this.getCategories.bind(this);
    this.createAccount = this.createAccount.bind(this);
  }

  componentDidMount() {
    this.getAccounts();
    // this.getCategories();
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

  getCategories() {

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

  submitDeposit(depositSlip) {
    axios.post('/deposit', depositSlip)
      .then((res) => {
        console.log(res);
      })
      .catch((error) => {
        console.log(error, 'createAccounts');
      });
  }

  render() {
    const { accounts } = this.state;
    return (
      <Router>
        <div>
          <Navbar />
          <Route name="login" exact path="/" component={Login} />
          <Route name="about" exact path="/About" component={About} />
          <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />

          <Deposit
            accountNames={accounts}
            createAccount={this.createAccount}
            submitDeposit={this.submitDeposit}
          />
        </div>  
      </Router>
    )
  }
}

export default App;

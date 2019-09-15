import React from 'react';
import { BrowserRouter as  Router, Switch } from 'react-router-dom';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Dashboard from './DashboardComponents/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: true
    }
    this.authenticate = this.authenticate.bind(this);
  }

    authenticate() {
      // // do something to check if logged in
      // if (loggedIn) {
      //   this.setState({isAuth:true})
      // }
      // the following is used for testing only. REMOVE LATER
      this.setState({
        isAuth: !this.state.isAuth
      })
    }

  render() {
    return (
      <Router>
          {/* button is temporary. FOR TESTING */}
          <button onClick={this.authenticate}>REMOVE ME LATER</button>
        <Switch>
          {this.state.isAuth ? <Navbar /> : <Dashboard />}
        </Switch>
      </Router>
    );
  }
}

export default App;

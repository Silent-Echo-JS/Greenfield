import React from 'react';
import axios from 'axios';
import { BrowserRouter as  Router, Route, Link } from 'react-router-dom';
import { browserHistory } from 'react-router';
import Login from './Login.jsx';
import About from './HomePages/About.jsx';
import Tutorial from './HomePages/Tutorial.jsx';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Deposit from './Deposit.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
    }
  }

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route name="login" exact path="/" component={Login} />
          <Route name="about" exact path="/About" component={About} />
          <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />
        </div>  
        <Deposit />
      </Router>
    )
  }
}

export default App;

import React from 'react';
import { BrowserRouter as  Router, Route, Switch } from 'react-router-dom';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Dashboard from './DashboardComponents/Dashboard.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isAuth: true
    }
  }

  render() {
    return (
      <Router>
          <Navbar />
          <Dashboard />

      </Router>
    );
  }
}

export default App;

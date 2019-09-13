import React from 'react';
import { BrowserRouter as  Router, Route } from 'react-router-dom';
import Login from './Login.jsx';
import Register from './Register.jsx';
import About from './HomePages/About.jsx';
import Tutorial from './HomePages/Tutorial.jsx';
import Navbar from './HeaderComponent/Navbar.jsx'; 
import Sidebar from './SidebarComponents/Sidebar.jsx';
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
          <Sidebar />
          <Route name="login" exact path="/" component={Login} />
          <Route name="register" exact path="/Register" component={Register} />
          <Route name="about" exact path="/About" component={About} />
          <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />
          <Route name="deposit" exact path="/Deposit" component={Deposit} />
        </div>
      </Router>
    );
  }
}

export default App;

import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../HomePages/Login.jsx';
import Tutorial from '../HomePages/Tutorial.jsx';
import About from '../HomePages/About.jsx';
import Register from '../HomePages/Register.jsx';

class NavBar extends React.Component {
  render() {
    return (
      <Router>
      <div class='title'><h1>Simple HOA</h1></div>
        <div class='header'>
          <ul class="headerButtons">
            <li className="navButton"><Link to="Tutorial">Tutorial</Link></li>
            <li className="navButton"><Link to="About">About</Link></li>
            <li className="navButton"><Link to="">Home</Link></li>
          </ul>
        </div>
        <Route name="login" exact path="/" component={Login} />
        <Route name="about" exact path="/About" component={About} />
        <Route name="tutorial" exact path="/Tutorial" component={Tutorial} />
        <Route name="Register" exact path="/Register" component={Register} />
      </Router>
    )
  }
}
export default NavBar;
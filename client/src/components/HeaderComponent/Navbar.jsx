import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Login from '../HomePages/Login.jsx';
import About from '../HomePages/About.jsx';
import Register from '../HomePages/Register.jsx';

class NavBar extends React.Component {
  render() {
    return (
      <Router>
        <center><br /><br />
          <div class='title'>
            <center><img class='imgsplash' src="https://i.ibb.co/J2skB7Y/logo.png" />
              <br /><h1>Simple HOA</h1></center><br />
            <div class='about'>
              <h2>Introducing</h2><br />
              <h3>A home owner association management system<br />
                with the basic features to keep your workspace<br />
                simple and easy to update and maintain.</h3><br /><br />

              <h2>Manage</h2><br /><h3>Board members, tenants, deposits and expenses<br />
              for which you can choose the categories on how you see fit.</h3>
            </div>
            </div>
          <div class='login'>
            <Route name="Login" exact path="/" component={Login} />
            <Route name="Register" exact path="/Register" component={Register} />
            </div>
            <br /><br />
            <div class='footer'>
            Simple HOA 2019<br />
            Programming & Design by SilentEcho JS<br />
            Nick Kolodziej, Gary Marino, & May Do
          </div>
        </center>
        {/* <div class='header'>
          <ul class="headerButtons">
            <li className="navButton"><Link to="About">About</Link></li>
            <li className="navButton"><Link to="">Home</Link></li>
          </ul>
        </div> */}
        {/*  */}
        {/* <Route name="about" exact path="/About" component={About} /> */}
      </Router>
    )
  }
}
export default NavBar;
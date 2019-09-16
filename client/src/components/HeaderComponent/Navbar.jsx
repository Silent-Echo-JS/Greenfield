import React from 'react';
import {Link} from 'react-router-dom'
// import { HashLink as Link} from "react-router-hash-link";

class NavBar extends React.Component {
  render() {
    return (
      <div class='title'>
        <h1>Simple HOA</h1>
        <div class='header'>
          <ul class="headerButtons">
            <li className="navButton"><Link to="/about">About</Link></li>
            <li className="navButton"><Link to="/">Home</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default NavBar;
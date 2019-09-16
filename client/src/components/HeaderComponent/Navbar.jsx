import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div class='title'>
        <h1>Simple HOA</h1>
        <div class='header'>
          <ul class="headerButtons">
            <li className="navButton"><Link to="/">Home</Link></li>
            <li className="navButton"><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default NavBar;
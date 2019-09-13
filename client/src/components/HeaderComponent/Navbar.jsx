import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <div class='header'>
        <ul class="headerButtons">
          <li className="navButton"><Link to="Tutorial">Tutorial</Link></li>
          <li className="navButton"><Link to="About">About</Link></li>
          <li className="navButton"><Link to="">Home</Link></li>
        </ul>
        <div class='title'><h1>Simple HOA</h1></div>
      </div>
    )
  }
}
export default NavBar;
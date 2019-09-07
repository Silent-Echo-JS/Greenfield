import React from 'react';
import { Link } from 'react-router-dom';

class NavBar extends React.Component {
  render() {
    return (
      <header>
        <ul id="headerButtons">
          <li className="navButton"><Link to="">Home</Link></li>
          <li className="navButton"><Link to="About">About</Link></li>
          <li className="navButton"><Link to="Tutorial">Tutorial</Link></li>
        </ul>
      </header>
    )
  }
}
export default NavBar;
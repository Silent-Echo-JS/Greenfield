import React from 'react';
import {Link} from 'react-router-dom'

class NavBar extends React.Component {
  render() {
    return (
      <div className='title'>
        <h1>Simple HOA</h1>
        <div className='header'>
          <ul className="headerButtons">
            <li className="navButton"><Link to="/">Home</Link></li>
            <li className="navButton"><Link to="/about">About</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}
export default NavBar;
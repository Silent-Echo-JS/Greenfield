import React from 'react';
import {Link, withRouter} from 'react-router-dom'

class NavBar extends React.Component {
  
  logoutUser() {
    localStorage.clear();
    this.props.history.push('/login');
  }

  render() {
    const firebaseId = localStorage.getItem('uid');
    return (
      <div className='title'>
        <h1>Simple HOA</h1>
        <div className='header'>
          <ul className="headerButtons">
            <li className="navButton"><Link to="/">Home</Link></li>
            <li className="navButton"><Link to="/about">About</Link></li>
            <li className="navButton">
              {firebaseId && <Link to="#" onClick={this.logoutUser.bind(this)}>Logout</Link>}
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
export default withRouter(NavBar);
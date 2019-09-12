import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div>
        <ul id="sideButtons">
          <li className="sideNavButton"><Link to="Deposit">Deposit</Link></li>
          <li className="sideNavButton"><Link to="Expense">Expense</Link></li>
        </ul>
      </div>
    )
  }
}

export default Sidebar;
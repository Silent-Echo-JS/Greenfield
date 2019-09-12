import React from 'react';
import { Link } from 'react-router-dom';

class Sidebar extends React.Component {
  render() {
    return (
      <div class='sidebar'>
        <ul class="sideButtons">
          <li className="sideNavButton"><Link to="Board">Board</Link></li>
          <li className="sideNavButton"><Link to="Tenants">Tenants</Link></li>
          <li className="sideNavButton"><Link to="Deposit">Deposit</Link></li>
          <li className="sideNavButton"><Link to="Expense">Expense</Link></li>
          <li className="sideNavButton"><Link to="View">View</Link></li>
          <li className="sideNavButton"><Link to="View">Settings</Link></li>
          
        </ul>
      </div>
    )
  }
}

export default Sidebar;
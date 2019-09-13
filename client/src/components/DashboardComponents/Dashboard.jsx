import React from 'react';
import { Link } from 'react-router-dom';

class Dashboard extends React.Component {
  render() {
    return (
      <div class='dashboard'>
        <ul class="dashButtons">
          <li className="dashButton"><Link to="Board">Board</Link></li>
          <li className="dashButton"><Link to="Tenants">Tenants</Link></li>
          <li className="dashButton"><Link to="Deposit">Deposit</Link></li>
          <li className="dashButton"><Link to="Expense">Expense</Link></li>
          <li className="dashButton"><Link to="View">View</Link></li>
          <li className="dashButton"><Link to="View">Settings</Link></li>
          
        </ul>
      </div>
    )
  }
}

export default Dashboard;
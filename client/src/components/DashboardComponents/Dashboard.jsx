import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

class Dashboard extends React.Component {
  render() {
    return (
      <div>
        <div class='title'>
          <img class='reduced' src="https://i.ibb.co/J2skB7Y/logo.png" />
          <h1>Simple HOA</h1>
          </div>

        <div class='dashboard'>
          <ul class="dashButtons">
            <li className="dashButton"><Link to="Board">Board</Link></li>
            <li className="dashButton"><Link to="Tenants">Tenants</Link></li>
            <li className="dashButton"><Link to="Deposit">Deposit</Link></li>
            <li className="dashButton"><Link to="Expense">Expense</Link></li>
            <li className="dashButton"><Link to="Settings">Settings</Link></li>
          </ul>
        </div>
      </div>
    )
  }
}

export default Dashboard;
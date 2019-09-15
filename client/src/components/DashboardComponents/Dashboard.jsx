import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Deposit from '../Deposit.jsx';
import Expense from '../Expense.jsx';
import Tenants from '../Tenants.jsx';
import Board from '../Board.jsx';
import Settings from '../Settings.jsx';

class Dashboard extends React.Component {
  render() {
    return (
      <Router>
        <div class='title'><h1>Simple HOA</h1></div>
        <div class='dashboard'>
          <ul class="dashButtons">
            <li className="dashButton"><Link to="Board">Board</Link></li>
            <li className="dashButton"><Link to="Tenants">Tenants</Link></li>
            <li className="dashButton"><Link to="Deposit">Deposit</Link></li>
            <li className="dashButton"><Link to="Expense">Expense</Link></li>
            <li className="dashButton"><Link to="View">View</Link></li>
            <li className="dashButton"><Link to="Settings">Settings</Link></li>
          </ul>
        </div>
        <Route name="Deposit" exact path="/Deposit" component={Deposit} />
        <Route name="Expense" exact path="/Expense" component={Expense} />
        <Route name="Tenants" exact path="/Tenants" component={Tenants} />
        <Route name="Board" exact path="/Board" component={Board} />
        <Route name="Settings" exact path="/Settings" component={Settings} />
      </Router>
    )
  }
}

export default Dashboard;
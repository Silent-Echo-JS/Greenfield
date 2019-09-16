import React from "react";
import { Route, HashRouter } from "react-router-dom";
import { Security, SecureRoute, ImplicitCallback } from "@okta/okta-react";
import Navbar from "./HeaderComponent/Navbar.jsx";
import Dashboard from "./DashboardComponents/Dashboard.jsx";
import Login from "./Auth/Login.jsx";
import About from "./HomePages/About.jsx";
import Deposit from "./Deposit.jsx";
import Expense from "./Expense.jsx";
import Tenants from "./Tenants.jsx";
import Board from "./Board.jsx";
import Settings from "./Settings.jsx";
import NavBar from "./HeaderComponent/Navbar.jsx";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <HashRouter>
        <Security
          issuer="https://dev-785992.okta.com/oauth2/default"
          clientId="0oa1cspbxnLfDPYQb357"
          redirectUri={window.location.origin + "/implicit/callback"}
          onAuthRequired={onAuthRequired}
        >
          {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}
          <Navbar />
          <Route path="/about" component={About} />

          <Route path="/Deposit" component={Deposit} />
          <Route path="/Expense" component={Expense} />
          <Route path="/Tenants" component={Tenants} />
          <Route path="/Board" component={Board} />
          <Route path="/Settings" component={Settings} />

          <SecureRoute path="/" exact={true} component={Dashboard} />
          <Route
            path="/login"
            render={() => <Login baseUrl="https://dev-785992.okta.com" />}
          />
          <Route
            path="/implicit/callback"
            exact={true}
            component={ImplicitCallback}
          />
        </Security>
      </HashRouter>
    );
  }
}

export default App;

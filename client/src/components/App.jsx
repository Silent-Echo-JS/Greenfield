import React from "react";
import { Route, BrowserRouter } from "react-router-dom";
import Axios from "axios";
import Navbar from "./HeaderComponent/Navbar.jsx";
import Dashboard from "./DashboardComponents/Dashboard.jsx";
import Login from "./Auth/Login.jsx";
import About from "./HomePages/About.jsx";
import Deposit from "./Deposit.jsx";
import Expense from "./Expense.jsx";
import Tenants from "./Tenants.jsx";
import Board from "./Board.jsx";
import Settings from "./Settings.jsx";
import InputInfo from "./Auth/InputInfo.jsx";
import Maintenence from "./Maintenence.jsx";
import firebase from "../../../client/src/components/Auth/firebase.js";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      staff: [],
      departments: [],
      homeowners: []
    };
  }

  componentDidMount() {
    this.getAllStaff();
    this.getAllMembers();
  }

  getAllStaff() {
    return Axios.get("/api/getStaff").then(response =>
      this.setState({
        staff: response.data
      })
    );
  }

  getAllMembers() {
    return Axios.get("/api/getHomeowners").then(homeowners =>
      this.setState({
        homeowners: homeowners.data
      })
    );
  }

  render() {
    const { staff, homeowners } = this.state;
    return (
      <BrowserRouter>
        {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}
        <Navbar />
        <Route
          path="/"
          render={props => (
            <Dashboard {...props} staff={staff} homeowners={homeowners} />
          )}
        />
        <Route path="/login" component={Login} />
        <Route path="/InputInfo" component={InputInfo} />
        <Route path="/about" component={About} />
        <Route path="/Deposit" component={Deposit} />
        <Route path="/Expense" component={Expense} />
        <Route path="/Tenants" component={Tenants} />
        <Route path="/Board" staff={staff} component={Board} />
        <Route path="/Settings" component={Settings} />
        <Route path="/Maintenance" component={Mainetence} />
      </BrowserRouter>
    );
  }
}

export default App;

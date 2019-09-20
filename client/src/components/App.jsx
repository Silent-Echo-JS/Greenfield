import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
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
import CalendarPage from "./CalendarPage.jsx";
import firebase from "../../../client/src/components/Auth/firebase.js";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: 1,
      staff: [],
      departments: [],
      homeowners: [],
      workTickets: []
    };
    this.getAllWorkTickets = this.getAllWorkTickets.bind(this);
    this.closeWorkTicket = this.closeWorkTicket.bind(this);
  }

  componentDidMount() {
    this.getAllStaff();
    this.getAllMembers();
    this.getAllWorkTickets();
  }

  // Sets state.staff to an array of all current staff members
  getAllStaff() {
    return Axios.post("/api/getStaff", {
      hoaId: this.state.hoaId
    }).then(response =>
      this.setState({
        staff: response.data
      })
    );
  }

  // Sets state.homeowners to an array of all current members of the HOA
  getAllMembers() {
    return Axios.get("/api/getHomeowners").then(homeowners =>
      this.setState({
        homeowners: homeowners.data
      })
    );
  }

  // Sets state.workTickets to an array of all open work tickets
  getAllWorkTickets() {
    return Axios.post("/api/getOpenTickets", {
      hoaId: 1
    }).then(tickets =>
      this.setState({
        workTickets: tickets.data
      })
    );
  }

  closeWorkTicket(ticket) {
    return Axios.post("/api/closeWorkTicket", {
      id: ticket.id
    })
      .then(response => {
        Swal.fire(`Your ticket has been closed`);
        console.log(response);
      })
      .catch(err => {
        console.error(err);
      });
  }

  render() {
    const { staff, homeowners, workTickets } = this.state;
    const token = localStorage.getItem("uid");
    return (
      <BrowserRouter>
        {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}

        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/InputInfo" component={InputInfo} />
          <Navbar>
            <Route
              path="/"
              exact
              render={props => (
                <Dashboard {...props} staff={staff} homeowners={homeowners} />
              )}
            />
            <Route path="/about" component={About} />
            <Route path="/Deposit" component={Deposit} />
            <Route path="/Expense" component={Expense} />
            <Route path="/Tenants" component={Tenants} />
            <Route path="/Board" staff={staff} component={Board} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Calendar" component={CalendarPage} />
            <Route
              path="/Maintenance"
              render={props =>
                token ? (
                  <Maintenence
                    {...props}
                    workTickets={workTickets}
                    staff={staff}
                    getAllWorkTickets={this.getAllWorkTickets}
                    closeWorkTicket={this.closeWorkTicket}
                  />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
          </Navbar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

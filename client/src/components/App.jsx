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
import MemberList from "./Members.jsx";
import Board from "./Board.jsx";
import Settings from "./Settings.jsx";
import InputInfo from "./Auth/InputInfo.jsx";
import Maintenence from "./Maintenence.jsx";
import CalendarPage from "./CalendarPage.jsx";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem('hoaId'),
      hoaInfo: JSON.parse(localStorage.getItem('hoaInfo')) || {},
      staff: [],
      departments: [],
      homeowners: [],
      workTickets: []
    };
    this.getAllStaff = this.getAllStaff.bind(this);
    this.getOpenWorkTickets = this.getOpenWorkTickets.bind(this);
    this.closeWorkTicket = this.closeWorkTicket.bind(this);
  }

  componentDidMount() {
    this.getAllStaff();
    this.getOpenWorkTickets();
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

  // Sets state.workTickets to an array of all open work tickets
  getOpenWorkTickets() {
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
    const { staff, homeowners, workTickets, hoaInfo, hoaId } = this.state;
    const token = localStorage.getItem("uid");
    return (
      <BrowserRouter>
        {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}

        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/InputInfo" component={InputInfo} />
          <Navbar> 
          <Route path="/" exact render={props => (<Dashboard {...props} staff={staff} />)}/>
          <Route path="/about" component={About} />
          <Route path="/deposit" component={Deposit} />
          <Route path="/expense" component={Expense} />
          <Route path="/members" render={props => token ? (<MemberList {...props} hoaId={hoaId} hoaInfo={hoaInfo} />) :
            (<Redirect to="/login" />)} />
          <Route path="/board" staff={staff} component={Board} />
          <Route path="/settings" component={Settings} />
          <Route path="/calendar" render={props => token ? (<CalendarPage {...props} hoaId={hoaId} hoaInfo={hoaInfo} />) :
            (<Redirect to="/login" />)} />
          <Route path="/maintenance" render={props => token ? (<Maintenence {...props} hoaId={hoaId} hoaInfo={hoaInfo} workTickets={workTickets}
            staff={staff} getOpenWorkTickets={this.getOpenWorkTickets} closeWorkTicket={this.closeWorkTicket} />) :
            (<Redirect to="/login" />)} />
          </Navbar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

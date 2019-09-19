import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Axios from "axios";
import Navbar from "./HeaderComponent/Navbar.jsx";
import Dashboard from "./DashboardComponents/Dashboard.jsx";
import Login from "./Auth/Login.jsx";
import About from "./HomePages/About.jsx";
import Deposit from "./Deposit.jsx";
import Expense from "./Expense.jsx";
import HomeOwners from "./HomeOwners.jsx";
import Board from "./Board.jsx";
import Settings from "./Settings.jsx";
import InputInfo from "./Auth/InputInfo.jsx";
import Maintenence from "./Maintenence.jsx";
import CalendarPage from "./CalendarPage.jsx";
import firebase from "./Auth/firebase.js";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaInfo: {},
      staff: [],
      departments: [],
      homeowners: [],
      workTickets: []
    };
    this.getHoaInfo = this.getHoaInfo.bind(this);
    this.getAllStaff = this.getAllStaff.bind(this);
    this.getAllMembers = this.getAllMembers.bind(this);
    this.getAllWorkTickets = this.getAllWorkTickets.bind(this);
  }

  componentDidMount() {
    this.getAllStaff();
    this.getAllMembers();
    this.getAllWorkTickets();
  }

  getHoaInfo() {
    firebase.loginWithGoogle()
      .then((data) => {
        // console.log('HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!!!!!!!!!!!!!!!!!!!!!!!!1', data);
        // data also has idToken and sessionToken properties
        const firebaseId = data.user.uid;
        // console.log('--------------------------fireBasedID', firebaseId);
        localStorage.setItem('uid', firebaseId)
        Axios.get(`/checkForUser/${firebaseId}`)
          .then((res) => {
            // if (res.data.registered) {
            // console.log("========data", res);
            this.setState({
              hoaInfo: res.data.hoaInfoFromDb,
            });
            // console.log(this.state);
            // this.context.history.push('/');
          // }
          // this.context.history.push('/InputInfo');
        // })
      })
      .catch((err) => {
        console.error("=======error", err);
      });
  }
      )};

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

  getAllWorkTickets() {
    return Axios.get("/api/getOpenTickets").then(tickets =>
      this.setState({
        workTickets: tickets.data
      })
    );
  }

  render() {
    console.log('propssssssssssss', this.props);
    const { staff, homeowners, workTickets } = this.state;
    const token = localStorage.getItem('uid');
    return (
      <BrowserRouter>
        {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}

        <Switch>
          <Route path="/login" render={props => <Login {...props} getHoaInfo={this.getHoaInfo} />} />
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
            <Route path="/HomeOwners" component={HomeOwners} />
            <Route path="/Board" staff={staff} component={Board} />
            <Route path="/Settings" component={Settings} />
            <Route path="/Calendar" component={CalendarPage} />
            <Route
              path="/Maintenance"
              render={props => token ? <Maintenence {...props} workTickets={workTickets} staff={staff} /> : <Redirect to='/login' />}
            />
          </Navbar>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

import React from "react";
import { Route, BrowserRouter, Switch, Redirect } from "react-router-dom";
import Axios from "axios";
import Swal from "sweetalert2";
import moment from "moment";
import Navbar from "./HeaderComponent/Navbar.jsx";
import Dashboard from "./DashboardComponents/Dashboard.jsx";
import Login from "./Auth/Login.jsx";
import About from "./HomePages/About.jsx";
import MemberList from "./Members.jsx";
import Board from "./Board.jsx";
import InputInfo from "./Auth/InputInfo.jsx";
import Maintenence from "./Maintenence.jsx";
import CalendarPage from "./CalendarPage.jsx";
import Financials from "./Financials.jsx";

function onAuthRequired({ history }) {
  history.push("/login");
}

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem("hoaId"),
      // hoaInfo: JSON.parse(localStorage.getItem('hoaInfo')) || {},
      staff: [],
      departments: [],
      homeowners: [],
      workTickets: [],
      board: [],
      allRevenues: {
        totalTD: 0
      },
      allExpenses: {
        totalTD: 0
      }
    };
    this.getAllStaff = this.getAllStaff.bind(this);
    this.getOpenWorkTickets = this.getOpenWorkTickets.bind(this);
    this.closeWorkTicket = this.closeWorkTicket.bind(this);
    this.getAllBoardMembers = this.getAllBoardMembers.bind(this);
  }

  componentDidMount() {
    this.getAllStaff();
    this.getOpenWorkTickets();
    this.getAllRevenues();
    this.getAllExpenses();
    this.getAllRevenuesByYear(moment().year());
    this.getAllExpensesByYear(moment().year());
    this.getAllBoardMembers();
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

  getAllBoardMembers() {
    return Axios.post("/api/getBoardMembers", {
      hoaId: this.state.hoaId
    }).then(response =>
      this.setState({
        board: response.data
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

  //get all revenues by hoaId
  getAllRevenues() {
    return Axios.post("/api/getRevenues", {
      hoaId: this.state.hoaId
    })
      .then(revenues => {
        const paymentObjects = revenues.data;
        const paymentArray = paymentObjects.map(paymentObject =>
          Number(paymentObject.amountPaid)
        );
        const totalTD = paymentArray.reduce((a, b) => a + b, 0);
        let allRevenuesCopy = JSON.parse(
          JSON.stringify(this.state.allRevenues)
        );
        allRevenuesCopy.totalTD = totalTD;
        this.setState({
          allRevenues: allRevenuesCopy
        });
      })
      .catch(error => {
        console.error("Storm's a brewin", error);
      });
  }

  //get all revenues by year by hoaId
  getAllRevenuesByYear(year) {
    let yearly = {};
    return Axios.post("/api/getRevenues", {
      hoaId: this.state.hoaId
    })
      .then(deposits => {
        const depositsObjs = deposits.data;
        return depositsObjs.filter(
          depositObj => moment(depositObj.date, "YYYY-MM-DD").year() === year
        );
      })
      .then(yearlyDeposits => {
        const paymentObjects = yearlyDeposits;
        const paymentArray = paymentObjects.map(paymentObject =>
          Number(paymentObject.amountPaid)
        );
        const totalTD = paymentArray.reduce((a, b) => a + b, 0);
        yearly.totalTD = totalTD;
        yearlyDeposits.forEach(deposit => {
          let month = moment(deposit.date, "YYYY-MM-DD").month();
          if (yearly.hasOwnProperty(month)) {
            yearly[month] += Number(deposit.amountPaid);
          } else {
            yearly[month] = Number(deposit.amountPaid);
          }
        });
      })
      .then(yearlyDeposits => {
        let allRevenuesCopy = JSON.parse(
          JSON.stringify(this.state.allRevenues)
        );
        allRevenuesCopy[year] = yearly;
        this.setState({
          allRevenues: allRevenuesCopy
        });
      })
      .catch(error => {
        console.log("Problem With Get Revenues By Year", error);
      });
  }

  //get all expenses by hoaId
  getAllExpenses() {
    return Axios.post("/api/getExpenses", {
      hoaId: this.state.hoaId
    })
      .then(expenses => {
        const expenseObjects = expenses.data;
        const paymentArray = expenseObjects.map(expenseObject =>
          Number(expenseObject.amountPaidOut)
        );
        const totalTD = paymentArray.reduce((a, b) => a + b, 0);
        let allExpensesCopy = JSON.parse(
          JSON.stringify(this.state.allExpenses)
        );
        allExpensesCopy.totalTD = totalTD;
        this.setState({
          allExpenses: allExpensesCopy
        });
      })
      .catch(error => {
        console.error("Storm's a brewin", error);
      });
  }

  // get all Expenses by year by hoaId
  getAllExpensesByYear(year) {
    let yearly = {};
    return Axios.post("/api/getExpenses", {
      hoaId: this.state.hoaId
    })
      .then(expenses => {
        const expenseObjs = expenses.data;
        return expenseObjs.filter(
          expenseObj => moment(expenseObj.date, "YYYY-MM-DD").year() === year
        );
      })
      .then(yearlyExpenses => {
        const paymentObjects = yearlyExpenses;
        const paymentArray = paymentObjects.map(paymentObject =>
          Number(paymentObject.amountPaidOut)
        );
        const totalTD = paymentArray.reduce((a, b) => a + b, 0);
        yearly.totalTD = totalTD;
        yearlyExpenses.forEach(expense => {
          let month = moment(expense.date, "YYYY-MM-DD").month();
          if (yearly.hasOwnProperty(month)) {
            yearly[month] += Number(expense.amountPaidOut);
          } else {
            yearly[month] = Number(expense.amountPaidOut);
          }
        });
      })
      .then(yearlyExpenses => {
        let allExpensesCopy = JSON.parse(
          JSON.stringify(this.state.allExpenses)
        );
        allExpensesCopy[year] = yearly;
        this.setState({
          allExpenses: allExpensesCopy
        });
        console.log(this.state.allExpenses);
      })
      .catch(error => {
        console.log("Problem With Get Expenses By Year", error);
      });
  }

  render() {
    const {
      staff,
      homeowners,
      workTickets,
      hoaInfo,
      hoaId,
      getAllStaff
    } = this.state;
    const token = localStorage.getItem("uid");
    console.log("APP STATE BEARS", hoaId);
    return (
      <BrowserRouter>
        {/* render the navbar when a user is not logged in and Dashboard when user is logged in */}

        <Switch>
          <Route path="/login" render={props => <Login {...props} />} />
          <Route path="/InputInfo" component={InputInfo} />
          <Navbar>
            <Route
              path="/"
              exact
              render={props => (
                <Dashboard {...props} staff={staff} getAllStaff={getAllStaff} />
              )}
            />
            <Route path="/about" component={About} />
            <Route
              path="/financials"
              render={props => <Financials {...props} />}
            />
            <Route
              path="/members"
              render={props =>
                token ? (
                  <MemberList {...props} hoaId={hoaId} hoaInfo={hoaInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route path="/board" staff={staff} component={Board} />
            {/* <Route path="/settings" component={Settings} /> */}
            <Route
              path="/calendar"
              render={props =>
                token ? (
                  <CalendarPage {...props} hoaId={hoaId} hoaInfo={hoaInfo} />
                ) : (
                  <Redirect to="/login" />
                )
              }
            />
            <Route
              path="/maintenance"
              render={props =>
                token ? (
                  <Maintenence
                    {...props}
                    hoaId={hoaId}
                    hoaInfo={hoaInfo}
                    workTickets={workTickets}
                    staff={staff}
                    getOpenWorkTickets={this.getOpenWorkTickets}
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

import React, { Component } from "react";
import Chart from "chart.js";
import { Bar, Line } from "react-chartjs-2";
import Axios from "axios";
import moment from "moment";

class FinancialsByMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {},
      allRevenues: {
        totalTD: 0
      },
      allExpenses: {
        totalTD: 0
      },
      hoaId: localStorage.getItem("hoaId")
    };
  }

  componentDidMount() {
    this.getAllExpenses();
    this.getAllRevenues();
    this.getAllRevenuesByYear(moment().year());
    this.getAllExpensesByYear(moment().year());
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
      })
      .catch(error => {
        console.log("Problem With Get Expenses By Year", error);
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

  //this gets the expense data we need for the yearly chart
  getExpenseData(expenses) {
    let expenseData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < expenseData.length; i++) {
      for (let key in expenses) {
        if (i === parseInt(key)) {
          expenseData[i] = expenses[key];
        }
      }
    } // console.log(expenseData);
    return expenseData;
    //loop through the expense object
  }

  //this gets the revenue data we need for the yearly chart
  getRevenueData(revenues) {
    let revenueData = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
    for (let i = 0; i < revenueData.length; i++) {
      for (let key in revenues) {
        if (i === parseInt(key)) {
          revenueData[i] = revenues[key];
        }
      }
    }
    console.log(revenueData);
    return revenueData;
    //loop through the expense object
  }

  //this sets the state to bring in the results of the above functions
  mapFinancialsToChart(expenses, revenues) {
    this.setState({
      chartData: {
        labels: [
          "January",
          "February",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December"
        ],
        datasets: [
          {
            label: "Deposits",
            data: revenues,
            backgroundColor: "#5cb85c"
          },
          {
            label: "Expenses",
            data: expenses,
            backgroundColor: "#d9534f"
          }
        ]
      }
    });
  }

  render(props) {
    const { allExpenses, allRevenues } = this.state;
    let mappedRevenues = this.getRevenueData(allRevenues[2019]);

    let mappedExpenses = this.getExpenseData(allExpenses[2019]);
    console.log("mapped expenses: ", mappedExpenses);
    console.log("mapped revenues: ", mappedRevenues);
    // this.mapFinancialsToChart(mappedExpenses, mappedRevenues);
    return (
      // <div className="chart mb-2">
      <Bar
        data={this.state.chartData}
        height={300}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "Finances by Month",
            fontSize: 18,
            position: "top"
          },
          legend: {
            display: false
          }
        }}
      ></Bar>
      // </div>
    );
  }
}

export default FinancialsByMonth;

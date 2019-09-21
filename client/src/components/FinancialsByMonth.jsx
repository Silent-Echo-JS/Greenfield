import React, { Component } from "react";
import Chart from "chart.js";
import { Bar, Line } from "react-chartjs-2";

class FinancialsByMonth extends Component {
  constructor(props) {
    super(props);
    this.state = {
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
            data: [
              343829,
              229493,
              199311,
              120623,
              343829,
              229493,
              199311,
              120623,
              343829,
              229493,
              199311,
              120623
            ],
            backgroundColor: "#5cb85c"
          },
          {
            label: "Expenses",
            data: [
              343829,
              229493,
              199311,
              120623,
              343829,
              229493,
              199311,
              120623,
              343829,
              229493,
              199311,
              120623
            ],
            backgroundColor: "#d9534f"
          }
        ]
      }
    };
  }

  render() {
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

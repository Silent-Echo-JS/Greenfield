import React, { Component } from "react";
import Chart from "chart.js";
import { Bar, Line } from "react-chartjs-2";

class DBChart extends Component {
  constructor(props) {
    super(props);
    this.state = {
      chartData: {
        labels: ["Revenue", "Expenses"],
        datasets: [
          {
            label: "Monthly financials ",
            data: [],
            backgroundColor: ["#5cb85c", "#d9534f"]
          }
        ]
      }
    };
  }

  componentDidMount() {
    const { allRevenues, allExpenses } = this.props;

    this.setState({
      chartData: {
        labels: ["Revenue", "Expenses"],
        datasets: [
          {
            label: "Monthly financials ",
            data: [allRevenues, allExpenses],
            backgroundColor: ["#5cb85c", "#d9534f"]
          }
        ]
      }
    });
  }

  render() {
    return (
      // <div className="chart mb-2">
      <Bar
        data={this.state.chartData}
        height={210}
        options={{
          maintainAspectRatio: false,
          title: {
            display: true,
            text: "September financials",
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

export default DBChart;

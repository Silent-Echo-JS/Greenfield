import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";
import DBChart from "./DBChart.jsx";
import { Link } from "react-router-dom";
import DepositModal from "../DepositModal.jsx";

class DBFinancials extends Component {
  constructor(props) {
    super(props);
    this.state = {};

    this.thousandsSeparators = this.thousandsSeparators.bind(this);
  }

  thousandsSeparators(num) {
    const num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  }

  handleClick() {}

  render() {
    const { allExpenses, allRevenues, makeDeposit } = this.props;
    return (
      <div className="dashboard-card mb-4 p-4 mt-4">
        <Row>
          <Col>
            <h5>Financials at a glance </h5>
          </Col>
          <Col>
            <Button
              tag={Link}
              to="/financials"
              className="float-right btn-custom"
              size="sm"
            >
              See all Financials
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className="pl-2">
          <Col className="border-right border-dark" md={{ size: 4 }}>
            <DBChart allExpenses={allExpenses} allRevenues={allRevenues} />
          </Col>
          <Col>
            <Row>
              <Col>
                <div className="align-middle">
                  <h6>Current Account Balance</h6>
                  <h5 className="display-4">
                    $
                    {this.thousandsSeparators(
                      allRevenues.totalTD - allExpenses.totalTD
                    )}
                  </h5>
                </div>
              </Col>
              <hr />
              <Col>
                <div className="align-middle">
                  <DepositModal
                    allExpenses={allExpenses}
                    allRevenues={allRevenues}
                    makeDeposit={makeDeposit}
                  />
                  <Button className="btn-danger" block>
                    Record an expense
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                Yearly expenses to date
                <br />
                <h5 className="display-4 text-danger">
                  ${this.thousandsSeparators(allExpenses.totalTD)}
                </h5>
              </Col>
              <Col>
                Yearly revenue to date
                <br />
                <h5 className="display-4 text-success">
                  ${this.thousandsSeparators(allRevenues.totalTD)}
                </h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DBFinancials;

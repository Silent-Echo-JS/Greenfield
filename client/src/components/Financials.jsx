import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FinancialsByMonth from "./FinancialsByMonth.jsx";

const Financials = props => {
  const { allRevenues, allExpenses } = props;
  const thousandsSeparators = num => {
    const num_parts = num.toString().split(".");
    num_parts[0] = num_parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    return num_parts.join(".");
  };

  return (
    <Container className="mt-4">
      <Row>
        <Col>
          <h1>Financials</h1>
          <hr />
          <Row>
            <Col sm={{ size: 4 }}>
              {" "}
              <h6>Current Account Balance</h6>
              <h5 className="display-4">
                $
                {thousandsSeparators(allRevenues.totalTD - allExpenses.totalTD)}
              </h5>
            </Col>
            <Col sm={{ size: 4 }}>
              {" "}
              <h6>Expenses to date</h6>
              <h5 className="display-4 text-danger">
                ${thousandsSeparators(allExpenses.totalTD)}
              </h5>
            </Col>
            <Col sm={{ size: 4 }}>
              {" "}
              <h6>Deposits to date</h6>
              <h5 className="display-4 text-success">
                ${thousandsSeparators(allRevenues.totalTD)}
              </h5>
            </Col>
          </Row>
          <hr />
          <Row>
            <FinancialsByMonth
              allRevenues={allRevenues}
              allExpenses={allExpenses}
            />
          </Row>
        </Col>
      </Row>
    </Container>
  );
};

export default Financials;

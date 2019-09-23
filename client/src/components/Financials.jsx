import React, { Component } from "react";
import { Container, Row, Col } from "reactstrap";
import FinancialsByMonth from "./FinancialsByMonth.jsx";

const Financials = props => {
  const { allRevenues, allExpenses } = props;

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
              <h5 className="display-4">$1,245.22</h5>
            </Col>
            <Col sm={{ size: 4 }}>
              {" "}
              <h6>Expenses</h6>
              <h5 className="display-4 text-danger">-$235.22</h5>
            </Col>
            <Col sm={{ size: 4 }}>
              {" "}
              <h6>Deposits</h6>
              <h5 className="display-4 text-success">$1,235.22</h5>
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

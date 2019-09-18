import React, { Component } from "react";
import { Row, Col, Button } from "reactstrap";

class DBFinancials extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <div
        className="dashboard-card mb-4 p-4 mt-4"
        Style="height:400px width: 100%"
      >
        <Row>
          <Col>
            <h5>Financials at a glance </h5>
          </Col>
          <Col>
            <Button className="float-right btn-custom" size="sm">
              See all Financials
            </Button>
          </Col>
        </Row>
        <hr />
        <Row className="pl-2">
          <Col className="border-right border-dark" md={{ size: 4 }}>
            Graph here
          </Col>
          <Col>
            <Row>
              <Col inline>
                <div className="align-middle">
                  <h6>Current Account Balance</h6>
                  <h5 className="display-4">$1,235.22</h5>
                </div>
              </Col>
              <hr />
              <Col>
                <div className="align-middle">
                  <Button className="btn-custom" size="sm" block>
                    Record a deposit
                  </Button>
                  <Button className="btn-custom" size="sm" block>
                    Record an expense
                  </Button>
                </div>
              </Col>
            </Row>
            <hr />
            <Row>
              <Col>
                Expenses
                <br />
                <h5 className="display-4 text-danger">-$235.22</h5>
              </Col>
              <Col>
                Deposits
                <br />
                <h5 className="display-4 text-success">+$865.44</h5>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    );
  }
}

export default DBFinancials;

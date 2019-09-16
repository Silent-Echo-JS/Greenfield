import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";

class Dashboard extends React.Component {
  render() {
    return (
      <Container>
        <Row>
          <Col md={{ size: 6 }}>
            {/* Financials Component 6 col */}
            {/* Maintenence Ticket Component 6 col */}
          </Col>
          <Col md={{ size: 6 }}>{/* Calendar Component 6 col */}</Col>
        </Row>
        <Row>
          <Col>{/* Tenants table 9-col */}</Col>
          <Col>{/* Board table 3-col */}</Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;

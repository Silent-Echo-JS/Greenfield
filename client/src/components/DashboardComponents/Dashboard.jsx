import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import DBFinancials from "./DBFinancials.jsx";
import DBMaintenenceTicket from "./DBMaintenenceTicket.jsx";
import DBCalendar from "./DBCalendar.jsx";
import DBTenantsTable from "./DBTenantsTable.jsx";
import DBBoardTable from "./DBBoardTable.jsx";

class Dashboard extends React.Component {
  componentDidMount() {
    // check localStorage for firebase id
    // if it doesn't exist (meaning the user is not logged in), redirect to the login page
    if (!localStorage.getItem("uid")) {
      return this.props.history.push("/login");
    }
  }

  render() {
    const { staff, homeowners } = this.props;
    return (
      <Container>
        <Row>
          <Col md={{ size: 12 }}>
            <DBFinancials />
          </Col>
          <Col md={{ size: 6 }}>
            <DBMaintenenceTicket staff={staff} />
          </Col>
          <Col>
            <DBCalendar />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8 }} sm={{ size: 12 }}>
            <DBTenantsTable homeowners={homeowners} />
          </Col>
          <Col md={{ size: 4 }} sm={{ size: 12 }}>
            <DBBoardTable />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;

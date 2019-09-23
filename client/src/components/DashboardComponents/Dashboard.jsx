import React from "react";
import { Container, Row, Col } from "reactstrap";
import axios from "axios";

import DBFinancials from "./DBFinancials.jsx";
import DBMaintenenceTicket from "./DBMaintenenceTicket.jsx";
import DBCalendar from "./DBCalendar.jsx";
import DBTenantsTable from "./DBTenantsTable.jsx";
import DBBoardTable from "./DBBoardTable.jsx";

class Dashboard extends React.Component {
  constructor() {
    super();
    this.state = {
      hoaId: localStorage.getItem("hoaId"),
      homeowners: [],
    };
    this.getAllMembers = this.getAllMembers.bind(this);
  }

  componentDidMount() {
    // check localStorage for firebase id
    // if it doesn't exist (meaning the user is not logged in), redirect to the login page
    if (!localStorage.getItem("uid")) {
      return this.props.history.push("/login");
    }
    this.getAllMembers();
  }

  getAllMembers() {
    const { hoaId } = this.state;
    axios.get(`/api/getHomeowners/${hoaId}`).then(homeowners =>
      this.setState({
        homeowners: homeowners.data || []
      })
    );
  }


  render() {
    const { staff, allRevenues, allExpenses, hoaId, boardMembers, getOpenWorkTickets } = this.props;
    const { homeowners } = this.state;
    return (
      <Container>
        <Row>
          <Col md={{ size: 12 }}>
            <DBFinancials allRevenues={allRevenues} allExpenses={allExpenses} />
          </Col>
          <Col md={{ size: 6 }}>
            <DBMaintenenceTicket getOpenWorkTickets={getOpenWorkTickets} staff={staff} hoaId={hoaId} />
          </Col>
          <Col>
            <DBCalendar />
          </Col>
        </Row>
        <Row>
          <Col md={{ size: 8 }} sm={{ size: 12 }}>
            <DBTenantsTable homeowners={homeowners || {}} hoaId={hoaId} />
          </Col>
          <Col md={{ size: 4 }} sm={{ size: 12 }}>
            <DBBoardTable boardMembers={boardMembers} />
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;

import React from "react";
import {
  Container,
  Col,
  Row,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Table
} from "reactstrap";

const filterStaff = (staff, assignedTo) => {
  return staff.filter(staffMember => {
    return staffMember.id === assignedTo;
  });
};

const filterTickets = ticket => {
  let status = "";
  if (ticket.isOpen === 1) {
    status = "Open";
  } else {
    status = "Closed";
  }
  return status;
};

const Maintenence = props => {
  const { workTickets, staff } = props;
  return (
    <Container>
      <div className="mt-4 mb-2">
        <Row>
          <Col>
            <h1>Maintenance Tickets</h1>
          </Col>
          <Col className="float-right">Sort function here</Col>
        </Row>
        <Table hover bordered size="sm" md={{ size: 10, offset: 1 }}>
          <thead className="bg-green">
            <tr>
              <th className="th-sm">Issue ID</th>
              <th className="th-sm">Issue</th>
              <th className="th-sm">Assigned to</th>
              <th className="th-sm">Status</th>
              <th className="th-sm"></th>
            </tr>
          </thead>
          <tbody>
            {workTickets.map(ticket => {
              let staffMember = filterStaff(staff, ticket.assignedTo);
              return (
                <tr>
                  <td scope="row">{ticket.id}</td>
                  <td className="td-sm">{ticket.title}</td>
                  <td className="td-sm">{staffMember[0].fullName}</td>
                  <td className="td-sm">{filterTickets(ticket)}</td>
                  <td className="td-sm">
                    <Button size="sm" color="primary" className="float-right">
                      See Details
                    </Button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Maintenence;

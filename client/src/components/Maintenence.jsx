import React, { useEffect } from "react";
import { Container, Col, Row, Button, Table } from "reactstrap";
import WorkTicketModal from "./WorkTIcketModal.jsx";

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
  const { workTickets, staff, getOpenWorkTickets, closeWorkTicket } = props;
  useEffect(() => {
    getOpenWorkTickets(workTickets);
  }, []);

  return (
    <Container>
      <div className="mt-4 mb-2">
        <Row>
          <Col>
            <h1>Maintenance Tickets</h1>
          </Col>
          <Col>Sort function here</Col>
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
                <tr key={staffMember.id}>
                  <td scope="row">{ticket.id}</td>
                  <td className="td-sm">{ticket.title}</td>
                  {/* <td className="td-sm">{staffMember[0].fullName}</td> */}
                  <td className="td-sm">{filterTickets(ticket)}</td>
                  <td className="td-sm">
                    <WorkTicketModal
                      closeWorkTicket={closeWorkTicket}
                      staff={staff}
                      ticket={ticket}
                    />
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

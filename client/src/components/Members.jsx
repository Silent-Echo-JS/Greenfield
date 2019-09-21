import React from "react";
import { Table, Button, Row, Col, Container } from "reactstrap";
import MemberModal from "./MemberModal.jsx";

const MemberList = props => {
  return (
    <Container>
      <Row className="mt-4">
        <Col>
          <h1 className="mb-2">HOA Members</h1>
          <Table
            hover
            color="white"
            bordered
            size="sm"
            md={{ size: 10, offset: 1 }}
          >
            <thead className="bg-green">
              <tr>
                <th className="th-sm th-text">Name</th>
                <th className="th-sm th-text">Address</th>
                <th className="th-sm th-text">Primary Phone</th>
                <th className="th-sm th-text">Email</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {props.homeowners.map(homeowner => {
                return (
                  <tr key={homeowner.id}>
                    <td className="td-sm table-text">{homeowner.fullName}</td>
                    <td className="td-sm table-text">{homeowner.address}</td>

                    <td className="td-sm table-text">{homeowner.phone}</td>
                    <td className="td-sm table-text">{homeowner.email}</td>
                    <td>
                      <MemberModal homeowner={homeowner} />
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </Table>
        </Col>
      </Row>
    </Container>
  );
};

export default MemberList;

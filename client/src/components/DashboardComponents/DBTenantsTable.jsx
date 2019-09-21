import React from "react";
import { Table, Button, Row, Col } from "reactstrap";
import { Link } from "react-router-dom";

const DBTenantsTable = props => {
  return (
    <div className="p-4 dashboard-card mb-4">
      <Row>
        <Col>
          <h5>HOA Members</h5>
        </Col>
        <Col>
          <Button
            tag={Link}
            to="/members"
            className="float-right mb-4 btn-custom"
            size="sm"
          >
            Edit members
          </Button>
        </Col>
      </Row>
      <Table
        hover
        color="white"
        bordered
        size="sm"
        md={{ size: 10, offset: 1 }}
      >
        <thead className="bg-green">
          <tr>
            <th className="th-sm">Name</th>
            <th className="th-sm">Primary Phone</th>
            <th className="th-sm">Email</th>
          </tr>
        </thead>
        <tbody>
          {props.homeowners.map(homeowner => {
            return (
              <tr key={homeowner.id}>
                <td className="td-sm">{homeowner.fullName}</td>
                <td className="td-sm">{homeowner.phone}</td>
                <td className="td-sm">{homeowner.email}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default DBTenantsTable;

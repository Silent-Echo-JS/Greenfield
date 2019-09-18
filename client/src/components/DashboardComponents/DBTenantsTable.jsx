import React from "react";
import { Table, Button, Row, Col } from "reactstrap";

const DBTenantsTable = () => {
  return (
    <div className="p-4 dashboard-card mb-4">
      <Row>
        <Col>
          <h5>HOA Members</h5>
        </Col>
        <Col>
          <Button className="float-right mb-4 btn-custom" size="sm">
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
            <th className="th-sm">Unit</th>
            <th className="th-sm">Name</th>
            <th className="th-sm">Primary Phone</th>
            <th className="th-sm">Email</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td scope="row">100</td>
            <td className="td-sm">Raphael Khan</td>
            <td className="td-sm">504-555-6634</td>
            <td className="td-sm">raph@raph.com</td>
          </tr>
          <tr>
            <td scope="row">102</td>
            <td className="td-sm">Dan Murphy</td>
            <td className="td-sm">504-555-2767</td>
            <td className="td-sm">dan@dan.com</td>
          </tr>
          <tr>
            <td scope="row">104</td>
            <td className="td-sm">Samantha De La Fuente</td>
            <td className="td-sm">504-555-4223</td>
            <td className="td-sm">sam@sam.com</td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

export default DBTenantsTable;

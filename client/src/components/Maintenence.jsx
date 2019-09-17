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

const Maintenence = () => {
  return (
    <Container>
      <div className="col-10 offset-1 mt-4 mb-2">
        <Row>
          <Col>
            <h1>Maintenence Tickets</h1>
          </Col>
          <Col>
            <Form>
              <FormGroup inline row>
                <Input
                  type="search"
                  name="search"
                  id="searchTickets"
                  placeholder="Search tickets"
                  className="mr-3"
                />
              </FormGroup>
            </Form>
          </Col>
        </Row>
        <Table hover bordered size="sm" md={{ size: 10, offset: 1 }}>
          <thead className="bg-green">
            <tr>
              <th className="th-sm">Issue #</th>
              <th className="th-sm">Issue</th>
              <th className="th-sm">Assigned to</th>
              <th className="th-sm">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td scope="row">1</td>
              <td className="td-sm">Landscaping</td>
              <td className="td-sm">Raphael Khan</td>
              <td className="td-sm">Open</td>
            </tr>
            <tr>
              <td scope="row">2</td>
              <td>Painting</td>
              <td>Dan Murphy</td>
              <td>Open</td>
            </tr>
            <tr>
              <td scope="row">3</td>
              <td>Landscaping</td>
              <td>Raphael Khan</td>
              <td>Open</td>
            </tr>
          </tbody>
        </Table>
      </div>
    </Container>
  );
};

export default Maintenence;

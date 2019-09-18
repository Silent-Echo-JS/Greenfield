import React, { Component } from "react";
import StaffSelect from "./StaffSelect.jsx";
import {
  Col,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  FormText
} from "reactstrap";

class DBMaintenenceTicket extends Component {
  render() {
    const { staff } = this.props;
    console.log(staff);
    return (
      <Form className="p-4 mb-4 dashboard-card">
        <h5 className="ml-1">Submit a Maintenance Ticket</h5>
        <FormGroup row className="mt-2">
          <Col>
            <Input
              type="text"
              name="issue"
              id="maintenence_issue"
              placeholder="What's the issue?"
              size="sm"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="textarea"
              name="text"
              id="exampleText"
              placeholder="Provide details about the issue"
              size="sm"
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input type="select" name="select" size="sm">
              <option selected>Choose a department</option>
              <option>Maintenance</option>
              <option>Groundskeeping</option>
              <option>Pool Maintenence</option>
              <option>Painters</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <StaffSelect staff={staff} />
          </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <div>
            <Button size="sm" className="ml-3 float-left btn-custom">
              Add this ticket
            </Button>{" "}
            <Button size="sm" className="ml-3 float-right btn-custom">
              See All Open Tickets
            </Button>{" "}
          </div>
        </FormGroup>
      </Form>
    );
  }
}

export default DBMaintenenceTicket;

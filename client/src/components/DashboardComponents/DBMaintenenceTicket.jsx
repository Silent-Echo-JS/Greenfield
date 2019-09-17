import React, { Component } from "react";
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
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Form className="p-4 bg-light mt-2 mb-2">
        <h5 className="ml-1">Submit a Maintenence Ticket</h5>
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
            <Input type="select" name="select" size="sm" id="exampleSelect">
              <option selected>Choose a department</option>
              <option>Maintenence</option>
              <option>Groundskeeping</option>
              <option>Pool Maintenence</option>
              <option>Painters</option>
            </Input>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input type="select" name="select" size="sm" id="exampleSelect">
              <option selected>Assign this task to...</option>
              <option>Dan Murphy</option>
              <option>Raphael Khan</option>
            </Input>
          </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <div>
            <Button
              outline
              size="sm"
              className="ml-3 float-left"
              color="primary"
            >
              Add this ticket
            </Button>{" "}
            <Button
              outline
              size="sm"
              className="ml-3 float-right"
              color="primary"
            >
              See All Open Tickets
            </Button>{" "}
          </div>
        </FormGroup>
      </Form>
    );
  }
}

export default DBMaintenenceTicket;

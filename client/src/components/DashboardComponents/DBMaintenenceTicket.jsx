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
        <h5>Submit a Maintenence Ticket</h5>
        <FormGroup row className="mt-2">
          <Label for="exampleEmail" sm={2}>
            Title
          </Label>
          <Col sm={10}>
            <Input
              type="text"
              name="issue"
              id="maintenence_issue"
              placeholder="What's the issue?"
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Label for="exampleText" sm={2}>
            Text Area
          </Label>
          <Col sm={10}>
            <Input type="textarea" name="text" id="exampleText" placeholder="Please describe the issue that needs to be addressed"/>
          </Col>
        </FormGroup>
        <FormGroup row>
          <Label for="exampleSelect" sm={2}>
            Department
          </Label>
          <Col sm={10}>
            <Input type="select" name="select" id="exampleSelect" />
          </Col>
        </FormGroup>

        
        <FormGroup tag="fieldset" row>
          <Col sm={10}>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option one is this and
                that—be sure to include why it's great
              </Label>
            </FormGroup>
            <FormGroup check>
              <Label check>
                <Input type="radio" name="radio2" /> Option two can be something
                else and selecting it will deselect option one
              </Label>
            </FormGroup>
            <FormGroup check disabled>
              <Label check>
                <Input type="radio" name="radio2" disabled /> Option three is
                disabled
              </Label>
            </FormGroup>
          </Col>
        </FormGroup>
        
      </Form>
    );
  }
}

export default DBMaintenenceTicket;

import React, { Component } from "react";
import StaffSelect from "./StaffSelect.jsx";
import Axios from "axios";
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
    this.state = {
      hoaId: "",
      title: "",
      description: "",
      assignedTo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const ticket = {
      hoaId: this.state.hoaId,
      title: this.state.title,
      description: this.state.description,
      assignedTo: this.state.assignedTo
    };
    Axios.post("/api/addTicket", { ticket })
      .then(res => {
        console.log(res);
      })
      .catch(err => {
        console.error(err);
      });
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value,
      hoaId: event.target.hoaId
    });
  }

  handleDescriptionChange(event) {
    this.setState({
      description: event.target.value
    });
  }

  render() {
    const { staff } = this.props;
    return (
      <Form onSubmit={this.handleSubmit} className="p-4 mb-4 dashboard-card">
        <h5 className="ml-1">Submit a Maintenance Ticket</h5>
        <FormGroup row className="mt-2">
          <Col>
            <Input
              type="text"
              name="title"
              id="maintenence_issue"
              placeholder="What's the issue?"
              size="sm"
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>
        <FormGroup row>
          <Col>
            <Input
              type="textarea"
              name="description"
              id="description"
              placeholder="Provide details about the issue"
              size="sm"
              onChange={this.handleChange}
            />
          </Col>
        </FormGroup>

        <FormGroup row>
          <Col>
            <StaffSelect handleChange={this.handleChange} staff={staff} />
          </Col>
        </FormGroup>
        <hr />
        <FormGroup row>
          <div>
            <button
              type="submit"
              size="sm"
              className="ml-3 float-left btn-custom"
            >
              Add this ticket
            </button>
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

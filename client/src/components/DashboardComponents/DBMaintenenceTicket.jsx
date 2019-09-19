import React, { Component } from "react";
import StaffSelect from "./StaffSelect.jsx";
import { Link } from "react-router-dom";
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
      hoaId: 1,
      title: "",
      description: "",
      assignedTo: ""
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  //small
  handleSubmit(event) {
    event.preventDefault();

    Axios.post("/api/addTicket", {
      hoaId: 1,
      title: this.state.title,
      description: this.state.description,
      assignedTo: parseInt(this.state.assignedTo)
    })
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
            <Button
              type="submit"
              size="sm"
              className="ml-3 float-left btn-custom"
            >
              Add this ticket
            </Button>
            <Link to="/Maintenance">
              <Button size="sm" className="ml-3 float-right btn-custom btn-sm">
                See All Open Tickets
              </Button>
            </Link>
          </div>
        </FormGroup>
      </Form>
    );
  }
}

export default DBMaintenenceTicket;

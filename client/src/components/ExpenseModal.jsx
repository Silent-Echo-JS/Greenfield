import React, { Component } from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  Form,
  FormGroup,
  Col,
  Input,
  ModalFooter
} from "reactstrap";
import Axios from "axios";
import Swal from "sweetalert2";

class EspenseModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hoaId: localStorage.getItem("hoaId"),
      accountId: null,
      amountPaid: null,
      description: ""
    };

    this.handleChange = this.handleChange.bind(this);
    this.toggle = this.toggle.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  handleChange(event) {
    this.setState({
      [event.target.name]: event.target.value
    });
  }

  //   {
  //   "hoaId": 86,
  //     "accountId": 3627,
  //       "amountPaid": 200,
  //         "description": "September Dues"
  // }

  handleSubmit(event) {
    // console.log('DEMAINTENANCETICKETS props', this.props);
    event.preventDefault();
    if (
      this.state.payType.length === 0 ||
      this.state.amountPaidOut.length === 0 ||
      this.state.description.length === 0
    ) {
      Swal.fire("All fields are required");
    } else {
      Axios.post("/api/addExpense", {
        hoaId: this.state.hoaId,
        payType: this.state.payType,
        amountPaidOut: this.state.amountPaidOut,
        description: this.state.description
      })
        .then(response => {
          Swal.fire(`Your Expense has been recorded`);
          console.log(response);
        })
        .catch(err => {
          console.error(err);
        });
    }
  }

  render() {
    const { allExpenses, allRevenues, makeDeposit } = this.props;
    return (
      <div>
        <Button color="danger" className="mt-2" block onClick={this.toggle}>
          Record an expense
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Make a deposit</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleSubmit}>
              <FormGroup row>
                <Col>
                  <Input
                    type="text"
                    name="payType"
                    id="accountId"
                    placeholder="Payment Type"
                    size="sm"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    type="text"
                    name="amountPaidOut"
                    id="deposit"
                    placeholder="Enter amount of expense"
                    size="lg"
                    onChange={this.handleChange}
                  />
                </Col>
              </FormGroup>
              <FormGroup>
                <Input
                  type="textarea"
                  name="description"
                  id="description"
                  placeholder="Provide details about the expense"
                  size="sm"
                  onChange={this.handleChange}
                />
              </FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Button color="success" type="submit" onClick={this.handleSubmit}>
              Make Deposit
            </Button>
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default EspenseModal;

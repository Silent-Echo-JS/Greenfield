import React from "react";
import {
  Form,
  FormGroup,
  Modal,
  ModalBody,
  ModalFooter,
  ModalHeader,
  Button,
  Col,
  Row,
  Input
} from "reactstrap";

class AddMemberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false,
      hoaId: localStorage.getItem("hoaId"),
      firstName: "",
      lastName: "",
      address: "",
      city: "",
      state: "",
      zipcode: "",
      monthlyDues: "",
      email: "",
      phone: ""
    };

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddHomeOwner = this.handleAddHomeOwner.bind(this);
    this.toggle = this.toggle.bind(this);
  }

  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddHomeOwner(event) {
    event.preventDefault();
    this.props.addMember(this.state);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  render() {
    const {
      firstName,
      lastName,
      email,
      phone,
      address,
      monthlyDues
    } = this.state;
    const { showModal, toggleModal, addMember } = this.props;
    return (
      <div>
        <Button className="btn-custom" size="sm" onClick={this.toggle}>
          Add Member
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>Add Homeowner</ModalHeader>
          <ModalBody>
            <Form onSubmit={this.handleAddHomeOwner}>
              <FormGroup row className="mt-2">
                <Col>
                  <Input
                    className="mb-2"
                    id="firstName"
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="First Name"
                    size="sm"
                    value={firstName}
                  />
                  <Input
                    className="mb-2"
                    id="lastName"
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Last Name"
                    value={lastName}
                    size="sm"
                  />
                  <Input
                    className="mb-2"
                    id="email"
                    type="email"
                    onChange={this.handleInputChange}
                    placeholder="Email"
                    value={email}
                    size="sm"
                  />
                  <Input
                    className="mb-2"
                    id="phone"
                    type="tel"
                    placeholder="Phone"
                    onChange={this.handleInputChange}
                    value={phone}
                    size="sm"
                    pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                    required
                  />
                  <Input
                    className="mb-2"
                    id="address"
                    type="text"
                    placeholder="Street Address"
                    onChange={this.handleInputChange}
                    value={address}
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row>
                <Col>
                  <Input
                    className="mb-2"
                    id="monthlyDues"
                    type="text"
                    onChange={this.handleInputChange}
                    placeholder="Monthly Dues"
                    value={monthlyDues}
                    size="sm"
                  />
                </Col>
              </FormGroup>
              <FormGroup row></FormGroup>
            </Form>
          </ModalBody>
          <ModalFooter>
            <Col>
              <Button type="submit" color="primary">
                Add HomeOwner
              </Button>{" "}
            </Col>
            <Col>
              <Button
                color="secondary"
                className="float-right"
                onClick={this.toggle}
              >
                Cancel
              </Button>
            </Col>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default AddMemberModal;

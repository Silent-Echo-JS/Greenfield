import React from "react";
import {
  Button,
  Modal,
  ModalHeader,
  ModalBody,
  ModalFooter,
  Row,
  Col
} from "reactstrap";
import moment from "moment";

class MemberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };

    this.toggle = this.toggle.bind(this);
    this.filterStaff = this.filterStaff.bind(this);
  }

  toggle() {
    this.setState(prevState => ({
      modal: !prevState.modal
    }));
  }

  filterStaff(staff, assignedTo) {
    return staff.filter(staffMember => {
      return staffMember.id === assignedTo;
    });
  }

  render() {
    const { homeowner } = this.props;

    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}>
          View Details
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
          size="lg"
        >
          <ModalHeader toggle={this.toggle}>{homeowner.fullName}</ModalHeader>
          <ModalBody>
            <Row>
              <Col className="border-right" sm={{ size: 6 }} lg={{ size: 4 }}>
                <h6>Address</h6>
                <p>
                  {homeowner.address} <br />
                  {homeowner.city}, {homeowner.state} {homeowner.zipcode}
                </p>
                <h6>Phone</h6>
                <p>Cell: {homeowner.phone}</p>
              </Col>
              <Col>
                <h4>Balance: ${homeowner.balanceDue}</h4>
                <hr />
                <p>Monthly Dues: ${homeowner.monthlyDues}</p>
              </Col>
            </Row>
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>
              Close
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default MemberModal;

<Button size="sm" className="btn-custom">
  See details
</Button>;

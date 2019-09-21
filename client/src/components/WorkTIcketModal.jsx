import React from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
import moment from "moment";

class WorkTicketModal extends React.Component {
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
    const { ticket, staff } = this.props;
    const staffMember = this.filterStaff(staff, ticket.assignedTo);
    const justDay = ticket.createdAt.slice(0, -14);
    const m = moment(justDay, "YYYY-MM-DD");
    const formattedDate = m.format("LL");

    return (
      <div>
        <Button color="primary" size="sm" onClick={this.toggle}>
          View Details
        </Button>
        <Modal
          isOpen={this.state.modal}
          toggle={this.toggle}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggle}>{ticket.title}</ModalHeader>
          <ModalBody>
            {ticket.description}
            <hr />
            <p>
              Assigned to: {staffMember.length && staffMember[0].fullName} <br />
              Ticket Created: {formattedDate}
            </p>
          </ModalBody>
          <ModalFooter>
            <Button
              color="danger"
              onClick={() =>
                this.props.closeWorkTicket(ticket).then(this.toggle)
              }
            >
              Close ticket
            </Button>{" "}
            <Button color="secondary" onClick={this.toggle}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    );
  }
}

export default WorkTicketModal;

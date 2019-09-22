import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class AddMemberModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem('hoaId'),
      firstName: '',
      lastName: '',
      address: '',
      city: '',
      state: '',
      zipcode: '',
      monthlyDues: '',
      email: '',
      phone: '',
      showModal: false,
    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddHomeOwner = this.handleAddHomeOwner.bind(this);
  }

  handleInputChange(event) {
    this.setState({[event.target.id]: event.target.value});
  }

  handleAddHomeOwner(event) {
    event.preventDefault();
    this.props.addMember(this.state);
  }

  render() {
    const { firstName, lastName, email, phone, address, monthlyDues } = this.state;
    const { showModal, toggleModal } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal('showAddModal')}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal('showAddModal')}>Add HomeOwner</ModalHeader>
          <ModalBody>
            {<form onSubmit={this.handleAddHomeOwner}>
              <center><h2>Add Home Owner</h2><br />

                <div className='subDiv'>
                  <h4>First Name:</h4><br />
                  <input id="firstName" type="text" onChange={this.handleInputChange} value={firstName} />
                  <br /><br />

                  <h4>Last Name:</h4><br />
                  <input id="lastName" type="text" onChange={this.handleInputChange} value={lastName} />
                  <br /><br />

                  <h4>Email:</h4><br />
                  <input id="email" type="text" onChange={this.handleInputChange} value={email} />
                  <br /><br />

                  <h4>Phone:</h4><br />
                  <input id="phone" type="text" onChange={this.handleInputChange} value={phone} />
                  <br /><br />

                  <h4>Address:</h4><br />
                  <input id="address" type="text" onChange={this.handleInputChange} value={address} />
                  <br /><br />

                  <h4>Monthly Dues:</h4><br />
                  <input id="monthlyDues" type="text" onChange={this.handleInputChange} value={monthlyDues} />
                  <br /><br />
                  <Button type="submit" color="danger"
                  >
                    Add HomeOwner
            </Button>{" "}
                </div>
              </center>
            </form>}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggleModal('showAddModal')}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default AddMemberModal;
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class EditMemberModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    const { showModal, toggleModal, updateMember, handleMemberInput, homeOwner: { firstName, lastName, email, phone, address, monthlyDues } } = this.props;
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal('showEditModal')}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal('showEditModal')}>Edit HomeOwner</ModalHeader>
          <ModalBody>
            {firstName && <form onSubmit={updateMember}>
              <center><h2>Add Home Owner</h2><br />

                <div className='subDiv'>
                  <h4>First Name:</h4><br />
                  <input id="firstName" type="text" onChange={handleMemberInput} value={firstName} />
                  <br /><br />

                  <h4>Last Name:</h4><br />
                  <input id="lastName" type="text" onChange={handleMemberInput} value={lastName} />
                  <br /><br />

                  <h4>Email:</h4><br />
                  <input id="email" type="text" onChange={handleMemberInput} value={email} />
                  <br /><br />

                  <h4>Phone:</h4><br />
                  <input id="phone" type="text" onChange={handleMemberInput} value={phone} />
                  <br /><br />

                  <h4>Address:</h4><br />
                  <input id="address" type="text" onChange={handleMemberInput} value={address} />
                  <br /><br />

                  <h4>Monthly Dues:</h4><br />
                  <input id="monthlyDues" type="text" onChange={handleMemberInput} value={monthlyDues} />
                  <br /><br />
                  <Button type="submit" color="danger"
                  >
                    Update HomeOwner
            </Button>{" "}
                </div>
              </center>
            </form>}
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={() => toggleModal('showEditModal')}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EditMemberModal;
import React from 'react';
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class EditMemberModal extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={this.toggleModal}
          className={this.props.className}
        >
          <ModalHeader toggle={this.toggleModal}>Edit HomeOwner</ModalHeader>
          <ModalBody>
            {<form onSubmit={console.log('Gotta finish this')}>
              <center><h2>Add Home Owner</h2><br />

                <div className='subDiv'>
                  <h4>First Name:</h4><br />
                  <input id="firstName" type="text" />
                  <br /><br />

                  <h4>Last Name:</h4><br />
                  <input id="lastName" type="text" />
                  <br /><br />

                  <h4>Email:</h4><br />
                  <input id="email" type="text" />
                  <br /><br />

                  <h4>Phone:</h4><br />
                  <input id="phone" type="text" />
                  <br /><br />

                  <h4>Address:</h4><br />
                  <input id="address" type="text" />
                  <br /><br />

                  <h4>Monthly Dues:</h4><br />
                  <input id="monthlyDues" type="text" />
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
            <Button color="secondary" onClick={toggleModal}>
              Cancel
            </Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

export default EditMemberModal;
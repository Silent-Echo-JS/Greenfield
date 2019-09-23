import React from 'react';
import axios from "axios";
import { Modal, ModalBody, ModalFooter, ModalHeader, Button } from 'reactstrap';

class AddBoardModal extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hoaId: localStorage.getItem('hoaId'),
      accountId: '',
      position: '',

    }

    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleAddBoardMember = this.handleAddBoardMember.bind(this);
  }


  handleInputChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleAddBoardMember(event) {
    event.preventDefault();
    const {accountId, position, hoaId} = this.state;
    this.setState({ accountId: '', position: '' }, () => this.props.addBoardMember({accountId, position, hoaId}));
  }

  render() {
    const { accountId, position } = this.state;
    const { showModal, toggleModal, homeowners } = this.props;
    // console.log('hooooommmbbbb', this.props)
    return (
      <div>
        <Modal
          isOpen={showModal}
          toggle={() => toggleModal('showAddModal')}
          className={this.props.className}
        >
          <ModalHeader toggle={() => toggleModal('showAddModal')}>Add BoardMember</ModalHeader>
          <ModalBody>
            {<form onSubmit={this.handleAddBoardMember}>
              <center><h2>Add Board Member</h2><br />

                <div className='subDiv'>
                  <h4>First Name:</h4><br />
                  <select required id="accountId" onChange={this.handleInputChange} value={accountId} >
                    <option value="">Select An Account</option>
                    {homeowners && homeowners.map(homeowner => <option value={homeowner.id}>{homeowner.fullName}</option>)}
                  </select>
                  <br /><br />

                  <h4>Last Name:</h4><br />
                  <select required id="position" onChange={this.handleInputChange} value={position} >
                    <option value="">Select A Position</option>
                    <option value="Emperor">Emperor</option>
                    <option value="Secretary">Secretary</option>
                    <option value="President">President</option>
                    <option value="Vice President">Vice President</option>
                    <option value="Treasurer">Treasurer</option>
                  </select>
                  <br /><br />

                  <Button type="submit" color="danger"
                  >
                    Add BoardMember
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

export default AddBoardModal;
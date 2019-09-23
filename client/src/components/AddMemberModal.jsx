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

// export default AddMemberModal;
// import React from "react";
// import {
//   Form,
//   FormGroup,
//   Modal,
//   ModalBody,
//   ModalFooter,
//   ModalHeader,
//   Button,
//   Col,
//   Row,
//   Input
// } from "reactstrap";

// class AddMemberModal extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       hoaId: localStorage.getItem('hoaId'),
//       firstName: '',
//       lastName: '',
//       address: '',
//       city: '',
//       state: '',
//       zipcode: '',
//       monthlyDues: '',
//       email: '',
//       phone: '',
//       showModal: false,
//     }

//     this.handleInputChange = this.handleInputChange.bind(this);
//     this.handleAddHomeOwner = this.handleAddHomeOwner.bind(this);
//     this.toggle = this.toggle.bind(this);
//   }

//   handleInputChange(event) {
//     this.setState({ [event.target.id]: event.target.value });
//   }

//   handleAddHomeOwner(event) {
//     event.preventDefault();
//     this.props.addMember(this.state);
//   }

//   toggle() {
//     this.setState(prevState => ({
//       modal: !prevState.modal
//     }));
//   }

//   render() {
//     const { firstName, lastName, email, phone, address, monthlyDues } = this.state;
//     const { showModal, toggleModal } = this.props;

//     return (
//       <div>
//         <Button className="btn-custom" size="sm" onClick={this.toggle}>
//           Add Member
//         </Button>
//         <Modal
//           isOpen={showModal}
//           toggle={() => toggleModal('showAddModal')}
//           className={this.props.className}
//         >
//           <ModalHeader toggle={() => toggleModal('showAddModal')}>Add HomeOwner</ModalHeader>
//           <ModalBody>
//             <Form onSubmit={this.handleAddHomeOwner}>
//               <FormGroup row className="mt-2">
//                 <Col>
//                   <Input
//                     className="mb-2"
//                     id="firstName"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="First Name"
//                     size="sm"
//                     value={firstName}
//                   />
//                   <Input
//                     className="mb-2"
//                     id="lastName"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="Last Name"
//                     value={lastName}
//                     size="sm"
//                   />
//                   <Input
//                     className="mb-2"
//                     id="email"
//                     type="email"
//                     onChange={this.handleInputChange}
//                     placeholder="Email"
//                     value={email}
//                     size="sm"
//                   />
//                   <Input
//                     className="mb-2"
//                     id="phone"
//                     type="tel"
//                     placeholder="Phone"
//                     onChange={this.handleInputChange}
//                     value={phone}
//                     size="sm"
//                     pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
//                     required
//                   />
//                   <Input
//                     className="mb-2"
//                     id="address"
//                     type="text"
//                     placeholder="Street Address"
//                     onChange={this.handleInputChange}
//                     value={address}
//                     size="sm"
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup row>
//                 <Col>
//                   <Input
//                     className="mb-2"
//                     id="monthlyDues"
//                     type="text"
//                     onChange={this.handleInputChange}
//                     placeholder="Monthly Dues"
//                     value={monthlyDues}
//                     size="sm"
//                   />
//                 </Col>
//               </FormGroup>
//               <FormGroup row></FormGroup>
//             </Form>
//           </ModalBody>
//           <ModalFooter>
//             <Button color="primary" className="float-right" onClick={() => toggleModal('showAddModal')}>
//               Cancel
//             </Button>
//           </ModalFooter>
//         </Modal>
//       </div>
//     );
//   }
// }

// export default AddMemberModal;

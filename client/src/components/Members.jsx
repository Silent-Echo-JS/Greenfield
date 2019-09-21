import React from 'react';
import axios from 'axios';
import { Table, Button, Row, Col, Container } from "reactstrap";
import EditMemberModal from './EditMemberModal.jsx';
import AddMemberModal from './AddMemberModal.jsx';

class MemberList extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      hoaId: localStorage.getItem('hoaId'),
      selectedHomeowner: null,
      homeOwners: [],
      showEditModal: false,
      showAddModal: false
    };

    this.handleChange = this.handleChange.bind(this);
    this.addMember = this.addMember.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.handleEdit = this.handleEdit.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
    this.popUpAddModal = this.popUpAddModal.bind(this);
  }

  componentDidMount() {
    const { hoaId } = this.state;
    axios.get(`/api/getHomeowners/${hoaId}`)
      .then((homeOwnersRes) => {
        console.log('hooooooooo', homeOwnersRes)
        this.setState({ homeOwners: homeOwnersRes.data });
      })
      .catch((error) => {
        console.log(error, 'getHomeOwners');
      });
  }

  handleEdit(selectedHomeowner) {
    this.setState({ showEditModal: true, selectedHomeowner });
  }

  toggleModal() { 
    this.setState(prevState => ({ showEditModal: !prevState.showEditModal })) 
  }

  addMember(homeOwner) {
    // console.log('yoooo', homeOwner);
    axios.post('/api/addHomeOwner', homeOwner)
      .then((res) => {
        console.log('ADDED HOMEOWNER', res);
        this.setState(prevState => ({ homeOwners: prevState.homeOwners.concat(res.data), showAddModal: false }));
      })
      .catch((error) => {
        console.log('HOMEOWNER WAS NOT ADDED', error);
      });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  handleDelete(id) {
    const { homeOwners } = this.state;
    axios.delete(`/api/removeHomeowner/${id}`)
      .then(res => {
        console.log('The homeowner was sent to the void.', res.data);
        if (res.data.deleted) {
          this.setState({ homeOwners: homeOwners.filter(homeowner => homeowner.id !== id) })
        }
      })
      .catch(err => console.error('The Homeowner was not removed.', err));
  }

  popUpAddModal() {
    this.setState({showAddModal: true})
  }

  render() {
    const { showAddModal, showEditModal, homeOwners, selectedHomeowner } = this.state;

    return (
      <Container>
        {selectedHomeowner && <EditMemberModal showModal={showEditModal} toggleModal={this.toggleModal} homeOwner={selectedHomeowner} />}
        <AddMemberModal addMember={this.addMember} showModal={showAddModal} toggleModal={this.toggleModal} />

        <Row className="mt-4">
          <Col>
            <h1 className="mb-2">Home Owners</h1>
            <Button className="float-right mb-4 btn-custom" size="sm" color="success" onClick={this.popUpAddModal}>Add Home Owner</Button>
            <Table
              hover
              color="white"
              bordered
              size="sm"
              md={{ size: 10, offset: 1 }}
            >
              <thead className="bg-green">
                <tr>
                  <th className="th-sm th-text">Name</th>
                  <th className="th-sm th-text">Address</th>
                  <th className="th-sm th-text">Primary Phone</th>
                  <th className="th-sm th-text">Email</th>
                  <th className="th-sm th-text">Monthly Dues</th>
                  {/* <th className="th-sm th-text">Board Member</th> */}
                  <th className="th-sm th-text">Edit</th>
                  <th className="th-sm th-text">Delete</th>
                </tr>
              </thead>
              <tbody>
                {homeOwners.map(homeowner => {
                  return (
                    <tr key={homeowner.id}>
                      <td className="td-sm table-text">{homeowner.fullName}</td>
                      <td className="td-sm table-text">{homeowner.address}</td>

                      <td className="td-sm table-text">{homeowner.phone}</td>
                      <td className="td-sm table-text">{homeowner.email}</td>
                      <td className="td-sm table-text">{homeowner.monthlyDues}</td>
                      {/* <td className="td-sm table-text">{homeowner.isBoardMember ? 'Yes' : 'No'}</td> */}
                      <td><button onClick={() => console.log('Coming Soon')}>Edit</button></td>
                      <td><button onClick={() => this.handleDelete(homeowner.id)}>Delete</button></td>
                    </tr>
                  );
                })}
              </tbody>
            </Table>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default MemberList;

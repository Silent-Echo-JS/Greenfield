import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';
import ListBoard from './ListBoard.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: { data: [' '] },
      tenant: null,
      positions: { data: [' '] },
      position: null,
      members: { data: [' ']}
      };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getTenants = this.getTenants.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.addPosition = this.addPosition.bind(this);
    this.submitMember = this.submitMember.bind(this);
    this.getMembers = this.getMembers.bind(this);
  }

  componentDidMount(){
    this.getTenants();
    this.getPositions();
    this.getMembers();
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    this.submitMember(this.state);
    window.alert('Added a new board member.');
    this.componentDidMount();
  }

  submitMember(memberSlip) {
    console.log(memberSlip, 'MEMBERSLIP');

    axios.post('/newMember', memberSlip)
      .then((res) => {
        console.log('ADDED MEMBER');
      })
      .catch((error) => {
        console.log(error, 'ADDED MEMBER');
      });
  }

  getTenants() {
    axios.get('/getTenants')
      .then((tenants) => {
        this.setState({ tenants: tenants });
        this.setState({ tenant: tenants.data[0].firstName + ' ' + tenants.data[0].lastName });
      })
      .catch((error) => {
        console.log(error, 'getTenants');
      });
  }

  getMembers() {
    axios.get('/getMembers')
      .then((members) => {
        this.setState({ members: members });
      })
      .catch((error) => {
        console.log(error, 'getTenants');
      });
  }

  getPositions() {
    axios.get('/getPositions')
      .then((positions) => {
        this.setState({ positions: positions });
        return positions;
      })
      .then((positions) => {
        this.setState({ position: positions.data[0].name });
      })
      .catch((error) => {
        console.log(error, 'getPositions');
      });
  }

  addPosition() {
    const positionName = window.prompt('Type new position name:');
    this.createPosition({ 
      positionName: positionName,
      type: 'position'
   });
    window.alert('Created a new position.');
    this.setState({ position: positionName });
    this.componentDidMount();
  }

  createPosition(newPosition){
    axios.post('/newPosition', newPosition)
      .then((res) => {
        console.log('CREATED NEW POSITION.');
      })
      .catch((error) => {
        console.log(error, '[deposit/createPosition()]');
      });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
    this.componentDidMount();
  }

  render() {
const { tenants, position, positions, tenant, members } = this.state;
    return (
      <center>
        <br />
        <div className='subHead'><h1>Board</h1></div><br /><br />

        <div className="fieldDiv">
          <center><h2>Add Board Member</h2></center><br />
          <center>
          <div class='subDiv'>
              <h4>Select Tenant for Board Member:</h4><br />
              <select id="tenant" value={tenant} onChange={this.handleChange}>
                {tenants.data.map(tenantOption => {
                  return <Option optionName={tenantOption.firstName + ` ` + tenantOption.lastName} id={tenantOption.id} />
                })}
              </select>
              <br /><br />

              <h4>Select Position:</h4><br />
              <select id="position" value={position} onChange={this.handleChange}>
                {positions.data.map(positionOption => {
                  return <Option optionName={positionOption.name} id={positionOption.id} />
                })}
              </select><br />
              <h4>Or:</h4><button id="addPosition" type="submit" onClick={this.addPosition}>Add New Position</button>
              <br /><br />

          <button id="submit" type="submit" onClick={this.submit}>Submit</button>
          </div>
          </center>
      </div>

        <div className="fieldDiv">
          <center>
            <h2>Board Members</h2>
            <ul>
              {members.data.map(member => {
                return <ListBoard method={member} id={member.id} />
              })}
            </ul>
          </center>
        </div>
      </center>
    );
  }
}

export default Board;

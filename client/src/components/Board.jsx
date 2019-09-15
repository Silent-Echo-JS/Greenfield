import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';

class Board extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      tenants: { data: ['null'] },
      tenant: null,
      positions: { data: ['null'] },
      position: null,
      };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.getTenants = this.getTenants.bind(this);
    this.getPositions = this.getPositions.bind(this);
    this.addPosition = this.addPosition.bind(this);
    this.submitMember = this.submitMember.bind(this);
  }

  componentDidMount(){
    this.getTenants();
    this.getPositions();
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    window.alert('Added a new board member.');
    this.submitMember(this.state);
    this.componentDidMount();
  }

  submitMember(memberSlip) {
    axios.post('/newMember', memberSlip)
      .then((res) => {
        console.log('ADDED MEMBER');
      })
      .catch((error) => {
        console.log(error, 'SUBMIT MEMBER');
      });
  }

  getTenants() {
    axios.get('/getTenants')
      .then((tenants) => {
        this.setState({ tenants: tenants });
      })
      .catch((error) => {
        console.log(error, 'getTenants');
      });
  }

  getPositions() {
    axios.get('/getPositions')
      .then((positions) => {
        this.setState({ positions: positions });
      })
      .catch((error) => {
        console.log(error, 'getPositions');
      });
  }

  addPosition() {
    const positionName = window.prompt('Type new position name:');
    this.createPosition({ positionName });
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
  }

  render() {
const { tenants, position, positions, tenant } = this.state;
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
            <h2>Board Members</h2><br /><br />
        </center>
      </div>
      </center>
    );
  }
}

export default Board;

import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';
import ListHomeOwners from './ListHomeOwners.jsx';

class HomeOwners extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     firstName: null,
     lastName: null,
     address: null,
     city: null,
     state: null,
     zipcode: null,
     monthlyDues: null,
     email: null,
     phone: null,

    //  notes: null,
    //  ownership: null,
    //  unit: null,
    //  monthly: null,
    //  date: null,
    homeOwners: { data: ['null'] }
      };

    this.handleChange = this.handleChange.bind(this);
    this.submit = this.submit.bind(this);
    this.submitHomeOwner = this.submitHomeOwner.bind(this);
    this.getHomeOwners = this.getHomeOwners.bind(this);
  }

  componentDidMount(){
    this.getHomeOwners();
  }

  getHomeOwners() {
    axios.get('/api/getHomeowners')
      .then((homeOwners) => {
        this.setState({ homeOwners: homeOwners });
      })
      .catch((error) => {
        console.log(error, 'getHomeOwners');
      });
  }

  /*TODO: ADD VERIFICATION.*/
  submit() {
    window.alert('Added a new home owner.');
    this.submitHomeOwner(this.state);
    this.componentDidMount();
  }

  submitHomeOwner(homeownerSlip) {
    axios.post('api/addHomeOwner', homeownerSlip)
      .then((res) => {
        console.log('ADDED HOMEOWNER');
      })
      .catch((error) => {
        console.log(error, 'SUBMIT HOMEOWNER');
      });
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {

    console.log('PROPPPSSSSSSSSSSSSSSSSSSSSSSSS', this.props);

    const { firstName, lastName, email, phone, notes, ownership, unit, address, monthlyDues, date, homeOwners } = this.state;
    
    return (
      <center>
        <div className='subHead'><h1>Home Owners</h1></div>

        <div className="fieldDiv">
          <center><h2>Add Home Owner</h2><br />
          
          <div className='subDiv'>
          <h4>First Name:</h4><br />
          <input id="firstName" type="text" onChange={this.handleChange} value={firstName} />
          <br /><br />

          <h4>Last Name:</h4><br />
          <input id="lastName" type="text" onChange={this.handleChange} value={lastName} />
          <br /><br />

          <h4>Email:</h4><br />
          <input id="email" type="text" onChange={this.handleChange} value={email} />
          <br /><br />

          <h4>Phone:</h4><br />
          <input id="phone" type="text" onChange={this.handleChange} value={phone} />
          <br /><br />

          <h4>Address:</h4><br />
          <input id="address" type="text" onChange={this.handleChange} value={address} />
          <br /><br />

          <h4>Monthly Dues:</h4><br />
          <input id="monthlyDues" type="text" onChange={this.handleChange} value={monthlyDues} />
          <br /><br />

          {/* <h4>Date:</h4><br />
          <input id="date" type="date" onChange={this.handleChange} value={date} />
          <br /><br /> */}

          {/* 
          <h4>Alt. Phone:</h4><br />
          <input id="altPhone" type="text" onChange={this.handleChange} value={altPhone} />
          <br /><br />

          <h4>Emergency Contact:</h4><br />
          <h4>Name:</h4>
          <input id="emContactName" type="text" onChange={this.handleChange} value={emContactName} /><br />
          <h4>Phone:</h4>
          <input id="emContactNumber" type="text" onChange={this.handleChange} value={emContactNumber} />
          <br /><br />
          </div> */}
          {/* <div className='subDiv'>
          <h4>Unit:</h4><br />
          <input id="unit" type="text" onChange={this.handleChange} value={unit} />
          <br /><br /> */}

          {/* <h4>Monthly:</h4><br />
          <input id="monthly" type="text" onChange={this.handleChange} value={monthly} />
          <br /><br /> */}

          {/* <h4>Ownership:</h4> <p>(%)</p><br />
          <input id="ownership" type="text" onChange={this.handleChange} value={ownership} />
          <br /><br /> */}
{/* 
          <h4>Notes:</h4><br />
          <textarea id="notes" onChange={this.handleChange} value={notes} />
          <br /><br /> */}
      </div>
      <br /><br />
          <button id="submit" type="submit" onClick={this.submit}>Submit</button>
          </center>
      </div>

      <div className="fieldDiv">
        <center>
            <h2>Home Owner</h2><br /><br />
            <table>
              <tr className='head'>
                <td>First Name</td>
                <td>Last Name</td>
                {/* <td>I.C.E Name</td>
                <td>I.C.E Number</td>
                <td>Unit</td>
                <td>More Info</td> */}
                <td>Edit</td>
              </tr>
              
              {/* {homeOwners.data.map(indvTenant => {
                  return <ListHomeOwners method={indvTenant} id={indvTenant.id} />
                })} */}
              
          </table>
        </center>
      </div>
      </center>
    );
  }
}

export default HomeOwners;

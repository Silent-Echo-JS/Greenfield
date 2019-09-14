import React from 'react';
import axios from 'axios';

import Option from './Option.jsx';
import ListDeposits from './ListDeposits.jsx';

class Tenants extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
     
    };

  
  }

  componentDidMount(){

  }

  // handleChange(event) {
  //   this.setState({ [event.target.id]: event.target.value });
  // }

  render() {
    const { accounts, account, date, categories, category, checkNumber, amount, notes, recentDeposits } = this.state;

    return (
      <center>
        <br />
        <div className='subHead'><h1>Tenants</h1></div><br /><br />

        <div className="fieldDiv">
          <center><h2>Add Tenant</h2></center><br />
          <center>
          <div class='subDiv'>
          <h4>First Name:</h4><br />
          <input id="firstName" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Last Name:</h4><br />
          <input id="lastName" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Date:</h4><br />
          <input id="date" type="date" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Email:</h4><br />
          <input id="email" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Phone:</h4><br />
          <input id="phone" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Alt. Phone:</h4><br />
          <input id="altPhone" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Emergency Contact:</h4><br />
          <input id="emContact" type="date" onChange={this.handleChange} value={date} />
          <br /><br />
          </div>

          <div class='subDiv'>
          <h4>Unit:</h4><br />
          <input id="unit" type="date" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Address:</h4><br />
          <input id="address" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Monthly:</h4><br />
          <input id="monthly" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Ownership:</h4> <p>(%)</p><br />
          <input id="ownership" type="text" onChange={this.handleChange} value={date} />
          <br /><br />

          <h4>Notes:</h4><br />
          <textarea id="notes" onChange={this.handleChange} value={notes} />
          <br /><br />
      </div>
      <br /><br />
          <button id="submit" type="submit" onClick={this.submit}>Submit</button>
          </center>
      </div>

      <div className="fieldDiv">
        <center>
          <h2>Tenants</h2>
            <ul>
            {/* {recentDeposits.data.map(deposit => {
              return <ListDeposits method={deposit} id={deposit.id} />
            })} */}
          </ul>
        </center>
      </div>
      </center>
    );
  }
}

export default Tenants;

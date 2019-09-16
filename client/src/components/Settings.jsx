import React from 'react';

class Settings extends React.Component {
  render() {
    return (
      <center>
        <div className='subHead'><h1>Settings</h1></div><br /><br />
        <br/><br/>
        <div className="fieldDiv">
          <button onClick={this.toggleSignout}>Signout</button>
        </div>
      </center>
    )
  }
}

export default Settings;

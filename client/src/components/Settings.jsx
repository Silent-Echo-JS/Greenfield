import React from 'react';
import axios from 'axios';
import Popup from './SettingsPopup.jsx';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignout: false,
      showChangeEmail: false,
      showChangePassword: false
    }

    this.signout = this.signout.bind(this);
    this.changeEmail = this.changeEmail.bind(this);
    this.changePassword = this.changePassword.bind(this);
  }

  changeEmail() {
    // make axios request to server with the new email
    // the button will prompt a popup box for user input
    this.setState({
      showChangeEmail: !this.state.showChangeEmail
    });
  }

  changePassword() {
    // make axios request to server with the new password
    // the button will prompt a popup box for user input
    this.setState({
      showChangePassword: !this.state.showChangePassword
    });
  }

  signout() {
    // the button will prompt a popup box for user confirmation
    // user has to click yes or no
    this.setState({
      showSignout: !this.state.showSignout
    });
  }

  render() {
    return (
      <center>
        <h1>Settings</h1>
        <br/><br/>
        <div className="fieldDiv">
          <button onClick={this.changeEmail}>Change Email</button>
          <button onClick={this.changePassword}>Change Password</button>
          <button onClick={this.signout}>Signout</button>
          {this.state.showChangeEmail ? 
            <Popup title="Change Email" text='Change your email here' closePopup={this.changeEmail.bind(this)} />
            : null
          }
          {this.state.showChangePassword ?
            <Popup title="Change Password" text='Change your password here' closePopup={this.changePassword.bind(this)} />
            : null
          }
          {this.state.showSignout ?
            <Popup title="Sign Out" text='Are you sure you want to sign out?' closePopup={this.signout.bind(this)} />
            : null
          }
        </div>
      </center>
    )
  }
}

export default Settings;

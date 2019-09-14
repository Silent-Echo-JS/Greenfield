import React from 'react';
import axios from 'axios';
import SettingsChangePopup from './SettingsChangePopup.jsx'
import SignoutPopup from './SignoutPopup.jsx';

class Settings extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showSignout: false,
      showChangeEmail: false,
      showChangePassword: false
    }
    this.toggleEmail = this.toggleEmail.bind(this);
    this.togglePassword = this.togglePassword.bind(this);
    this.toggleSignout = this.toggleSignout.bind(this);
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

  toggleEmail() {
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

  togglePassword() {
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

  toggleSignout() {
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
          <button onClick={this.toggleEmail}>Change Email</button>
          <button onClick={this.togglePassword}>Change Password</button>
          <button onClick={this.toggleSignout}>Signout</button>
          {this.state.showChangeEmail ? 
            <SettingsChangePopup title="Change Email" text='Change your email here:' confirmPopup={this.changeEmail.bind(this)} closePopup={this.toggleEmail.bind(this)} />
            : null
          }
          {this.state.showChangePassword ?
            <SettingsChangePopup title="Change Password" text='Change your password here:' confirmPopup={this.changePassword.bind(this)} closePopup={this.togglePassword.bind(this)} />
            : null
          }
          {this.state.showSignout ?
            <SignoutPopup title="Sign Out" text='Are you sure you want to sign out?' confirmPopup={this.signout.bind(this)} closePopup={this.toggleSignout.bind(this)} />
            : null
          }
        </div>
      </center>
    )
  }
}

export default Settings;

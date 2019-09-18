import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';

export default class Login extends Component {


  handleClick() {
    firebase.loginWithGoogle()
      .then((data) => {
        const firebaseId = data.user.uid;
        localStorage.setItem('uid', firebaseId)
        axios.get(`/checkForUser/${firebaseId}`)
          .then((res) => {
            console.log("========data", res);
            if (res.data.registered) {
              this.props.history.push('/');
            } else {
              this.props.history.push('/InputInfo');
            }
          }).catch(err => {
            console.error('Error checking user status', err);
            alert('Unable to Login User');
          });
      })
      .catch((err) => {
        console.error("=======error", err)
      });
  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.handleClick.bind(this)}>Login with Google</button>
      </div>
    )
  };
}

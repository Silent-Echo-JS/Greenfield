import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';

export default class Login extends Component {


  handleClick() {
    firebase.loginWithGoogle()
      .then((data) => {
        console.log("====data", data)
        axios.get(`/checkForUser/${data.user.uid}`)
          .then((res) => {
            if (res.data.registered) {
              this.props.history.push('/')
            } else {
              this.props.history.push(`/auth/${data.user.uid}`)
            }
          })

      })
      .catch((error) => {
        console.log("=======error", error)
      })

  }

  render() {
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.handleClick}>Login with Google</button>
      </div>
    )
  };
}

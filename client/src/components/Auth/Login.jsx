import React, { Component } from 'react';
import axios from 'axios';
import firebase from './firebase';

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

//   handleClick() {
//     this.props.getHoaInfo();
//       // .then(() => {
//       //   this.props.history.push('/');
//       // })
//       // .then((res) => {
//       //   console.log("========data", res);
//       //   if (res.data.registered) {
//       //     this.props.history.push('/');
//       //   } else {
//       //     this.props.history.push('/InputInfo');
//       //   }
//       // }).catch(err => {
//       //   console.error('Error checking user status', err);
//       //   // alert('Unable to Login User');
//       // });
// }

  handleClick() {
    firebase.loginWithGoogle()
      .then((data) => {
        // console.log('HIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIIII!!!!!!!!!!!!!!!!!!!!!!!!1', data);
        // data also has idToken and sessionToken properties
        const firebaseId = data.user.uid;
        // console.log('--------------------------fireBasedID', firebaseId);
        localStorage.setItem('uid', firebaseId)
        axios.get(`/checkForUser/${firebaseId}`)
          .then((res) => {
            console.log("========data", res.data);
            if (res.data.registered) {
              localStorage.setItem('hoaId', res.data.hoaInfoFromDb.id);
              localStorage.setItem('hoaInfo', JSON.stringify(res.data.hoaInfoFromDb));
              this.props.history.push('/');
            } else {
              this.props.history.push('/InputInfo');
            }
          }).catch(err => {
            console.error('Error checking user status', err);
            // alert('Unable to Login User');
          });
      })
      .catch((err) => {
        console.error("=======error", err)
      });
  }

  render() {
    console.log('LOGIN PROPS', this.props);
    return (
      <div>
        <h1>Login</h1>
        <button onClick={this.handleClick}>Login with Google</button>
      </div>
    )
  };
}

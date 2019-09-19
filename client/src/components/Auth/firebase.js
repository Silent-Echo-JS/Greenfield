import firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: 'AIzaSyBEga-Xp0kaK1OsTVhM1cq7VnHWOEIyP7E',
  authDomain: 'simplehoa-2a9dc.firebaseapp.com',
  databaseURL: 'https://simplehoa-2a9dc.firebaseio.com',
  projectId: 'simplehoa-2a9dc',
  storageBucket: 'simplehoa-2a9dc.appspot.com',
  messagingSenderId: '552030381121',
  appId: '1:552030381121:web:2b8a61d57513b43baa92c0',

  // clientId: "552030381121-5ci2at8jojv8h23cjcf4qa7038d49037.apps.googleusercontent.com",

  // scopes: [
  //   "email",
  //   "profile",
  //   "https://www.googleapis.com/auth/calendar",
  // ],

  // discoveryDocs: [
  //   "https://www.googleapis.com/discovery/v1/apis/calendar/v3/rest"
  // ],
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// Create an instance of the Google provider object
const provider = new firebase.auth.GoogleAuthProvider();

export default {
  loginWithGoogle: () => firebase.auth().signInWithPopup(provider),
};

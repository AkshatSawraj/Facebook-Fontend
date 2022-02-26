import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyC1xUTfBZWwfIlp4wavM0vntMZeMZH_iUs",

  authDomain: "facebook-clone-fee14.firebaseapp.com",

  projectId: "facebook-clone-fee14",

  storageBucket: "facebook-clone-fee14.appspot.com",

  messagingSenderId: "672840784520",

  appId: "1:672840784520:web:07a0aebcd7d187e7175d3d"
};
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export {firebase};
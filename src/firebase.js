import firebase from "firebase/app";
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyDgAMkItj9YCZmSaFMyoHL1xWkyHCLxJjk",
  authDomain: "react-slack-clone-57ec2.firebaseapp.com",
  projectId: "react-slack-clone-57ec2",
  databaseURL: "https://react-slack-clone-57ec2-default-rtdb.firebaseio.com",
  storageBucket: "react-slack-clone-57ec2.appspot.com",
  messagingSenderId: "23496438815",
  appId: "1:23496438815:web:56173f2f9a64422d32112a",
  measurementId: "G-9K4DSFDN65"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
// firebase.analytics();

export default firebase;

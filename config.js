import firebase from 'firebase';

// add SDK Firebase
 const firebaseConfig = {
    apiKey: "AIzaSyBfKwYx3aauLSqLlDpMk2PaVj0rdVmfrwM",
    authDomain: "pro-58-new.firebaseapp.com",
    databaseURL: "https://pro-58-new-default-rtdb.firebaseio.com",
    projectId: "pro-58-new",
    storageBucket: "pro-58-new.appspot.com",
    messagingSenderId: "1092637415673",
    appId: "1:1092637415673:web:de8092b2faffe93ad1aa28",
    measurementId: "G-8Z3PHJXJQT"
  };
  // Initialize Firebase
  
  firebase.initializeApp(firebaseConfig);

export default firebase.database();
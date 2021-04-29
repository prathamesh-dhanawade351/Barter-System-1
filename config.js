import firebase from 'firebase';
require('@firebase/firestore')

const firebaseConfig = {
    apiKey: "AIzaSyCrxbEClWpClYyGrah-7rFlTlZNMb61YoU",
    authDomain: "barter-system-app---1.firebaseapp.com",
    projectId: "barter-system-app---1",
    storageBucket: "barter-system-app---1.appspot.com",
    messagingSenderId: "161644819961",
    appId: "1:161644819961:web:6119c156827de0f8f27928"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.firestore();

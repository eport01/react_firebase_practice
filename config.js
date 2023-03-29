import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig ={
  apiKey: "AIzaSyA2CWU6pT_KgszIDfu7CioVBpGoFLHEvRo",
  authDomain: "notes-5d13d.firebaseapp.com",
  projectId: "notes-5d13d",
  storageBucket: "notes-5d13d.appspot.com",
  messagingSenderId: "1094221978809",
  appId: "1:1094221978809:web:962fa085934239bf57cf68",
  measurementId: "G-GY587JS17H"
}

if (!firebase.apps.length){
  firebase.initializeApp(firebaseConfig);
}

export { firebase };
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from 'firebase/compat/app'
import "firebase/compat/auth"
import "firebase/compat/firestore"
const firebaseConfig = {
    apiKey: "AIzaSyCX6Ner0qQrZ_qVo0sbPfGOJJly0eSLroI",
    authDomain: "clone-b6cff.firebaseapp.com",
    projectId: "clone-b6cff",
    storageBucket: "clone-b6cff.appspot.com",
    messagingSenderId: "389743565332",
    appId: "1:389743565332:web:ae69cf0c3360241ecf6501",
    measurementId: "G-JRKXV141E8"
  };
  const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
export { db, auth };
// Import the functions you need from the SDKs you need
import firebase from "firebase/compat/app";
// import { getAnalytics } from "firebase/analytics";
import "firebase/compat/firestore";
import "firebase/compat/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDeDzOiY4jdFtqKNM2sSXlEFmPGXV0w7CU",
  authDomain: "duds-db-22734.firebaseapp.com",
  projectId: "duds-db-22734",
  storageBucket: "duds-db-22734.appspot.com",
  messagingSenderId: "78536943611",
  appId: "1:78536943611:web:d8bdf27a1dee53b3ebcd5e",
  measurementId: "G-137EFDSJEK",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

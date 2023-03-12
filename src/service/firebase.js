import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';


const firebaseConfig = {
  apiKey: "AIzaSyCTK2Yf7vFJ1ZUzfWxBdeSYllbybzblyco",
  authDomain: "reenbit-rickandmorty.firebaseapp.com",
  projectId: "reenbit-rickandmorty",
  storageBucket: "reenbit-rickandmorty.appspot.com",
  messagingSenderId: "638099592400",
  appId: "1:638099592400:web:e849caeb55065c6b5a3ad5",
  measurementId: "G-270HV0PTKD"
};
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

export default firebase;
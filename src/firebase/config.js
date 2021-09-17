import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyAOX9VESn9-aL9AGA-Pc003bcLkiVhnWYU",
    authDomain: "sinon-s.firebaseapp.com",
    projectId: "sinon-s",
    storageBucket: "sinon-s.appspot.com",
    messagingSenderId: "599026143564",
    appId: "1:599026143564:web:f68983b1c64e72103a3fe9",
    measurementId: "G-NMD0J5XE4D"
  };

firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();

export default firestore;
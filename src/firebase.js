import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyBZGm23U-bHHfmQ5xdHsmen2jfFvtrvO7w",
  authDomain: "chalenge-99d37.firebaseapp.com",
  databaseURL: "https://chalenge-99d37.firebaseio.com",
  projectId: "chalenge-99d37",
  storageBucket: "chalenge-99d37.appspot.com",
  messagingSenderId: "276941837083",
  appId: "1:276941837083:web:0dfa93f612b1846a56f9be"
};

const firebaseApp = firebase.initializeApp(firebaseConfig)



const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

var firebaseConfig = {
  apiKey: "AIzaSyA6Chcmj4mS9RcQfyVl8DZ440yLldMU1ko",
  authDomain: "crwn-db-1e4fa.firebaseapp.com",
  projectId: "crwn-db-1e4fa",
  storageBucket: "crwn-db-1e4fa.appspot.com",
  messagingSenderId: "1097194695069",
  appId: "1:1097194695069:web:4c7f460f4c5fdc6ac1e774",
  measurementId: "G-2RXG7BB0D9",
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;

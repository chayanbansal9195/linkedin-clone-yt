import firebase from "firebase/compat/app"
import "firebase/compat/auth"
import "firebase/compat/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCXI1_Hunk28vX89ca7Nx6UHv49eKnmb6A",
  authDomain: "linkedin-clone-yt-ee506.firebaseapp.com",
  projectId: "linkedin-clone-yt-ee506",
  storageBucket: "linkedin-clone-yt-ee506.appspot.com",
  messagingSenderId: "657393241142",
  appId: "1:657393241142:web:4bbfa11ec581bb2a681c97",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };

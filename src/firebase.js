import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyAclZZlrPOI8P9X4LkA_czS76WnY4BsMOE",
  authDomain: "whatsapp-clone-d337d.firebaseapp.com",
  databaseURL: "https://whatsapp-clone-d337d.firebaseio.com",
  projectId: "whatsapp-clone-d337d",
  storageBucket: "whatsapp-clone-d337d.appspot.com",
  messagingSenderId: "1061282447910",
  appId: "1:1061282447910:web:03fb280b51a66925815ce7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();

const auth = firebase.auth();

const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;

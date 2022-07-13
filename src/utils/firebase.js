import firebase from "firebase";
const firebaseConfig = {
  apiKey: "AIzaSyBrXFUwUm4uK84VaUVNYvmwlOPR45Qa_ek",
  authDomain: "clone-41357.firebaseapp.com",
  projectId: "clone-41357",
  storageBucket: "clone-41357.appspot.com",
  messagingSenderId: "6262719510",
  appId: "1:6262719510:web:a8bdfcab05f9c25b76a137",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.fireStore();
const auth = firebase.auth();
export { db, auth };

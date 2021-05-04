// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//     apiKey: "AIzaSyAGc_NLDr6g85pRFshILdzywQg2Km7OehI",
//     authDomain: "todo-app-react-d57f5.firebaseapp.com",
//     projectId: "todo-app-react-d57f5",
//     storageBucket: "todo-app-react-d57f5.appspot.com",
//     messagingSenderId: "134573296369",
//     appId: "1:134573296369:web:7a0ea17d0c4b88571c3750",
//     measurementId: "G-106QRWRNPD"
//   };
  import firebase from "firebase";

  const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyAGc_NLDr6g85pRFshILdzywQg2Km7OehI",
    authDomain: "todo-app-react-d57f5.firebaseapp.com",
    databaseURL: "https://todo-app-react-d57f5-default-rtdb.firebaseio.com",
    projectId: "todo-app-react-d57f5",
    storageBucket: "todo-app-react-d57f5.appspot.com",
    messagingSenderId: "134573296369",
    appId: "1:134573296369:web:7a0ea17d0c4b88571c3750",
    measurementId: "G-106QRWRNPD"

  });
  const db = firebaseApp.firestore();

  export default db
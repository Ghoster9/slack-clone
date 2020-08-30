import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyAys3SWPXevOpvMWM4tlePeshbrm-XZ1BI",
  authDomain: "slack-clone-ccb9e.firebaseapp.com",
  databaseURL: "https://slack-clone-ccb9e.firebaseio.com",
  projectId: "slack-clone-ccb9e",
  storageBucket: "slack-clone-ccb9e.appspot.com",
  messagingSenderId: "118783132406",
  appId: "1:118783132406:web:49407e167b9d1807f062d7",
  measurementId: "G-ZJN5SGDRVV",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
export default db;

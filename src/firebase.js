
import firebase from "firebase";

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDOi--ckrFy-57_azmNWvbjpTTn2L8PCwU",
    authDomain: "instagram-clone-react-263c0.firebaseapp.com",
    projectId: "instagram-clone-react-263c0",
    storageBucket: "instagram-clone-react-263c0.appspot.com",
    messagingSenderId: "218587859534",
    appId: "1:218587859534:web:e437a16f91ed5a00e3511f",
    measurementId: "G-3WCQDJYH6W"
})

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();

  export {db, auth, storage};
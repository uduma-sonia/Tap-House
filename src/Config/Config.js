import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import "firebase/storage";

var firebaseConfig = {
  apiKey: "AIzaSyA9iePulwZZLM-XVoMC79IJdwyi63hLLRY",
  authDomain: "liquor-store-1808a.firebaseapp.com",
  projectId: "liquor-store-1808a",
  storageBucket: "liquor-store-1808a.appspot.com",
  messagingSenderId: "829999200537",
  appId: "1:829999200537:web:524cf9c54fd072b7ac2d88",
  measurementId: "G-BZ3M8SR4YB",
};

firebase.initializeApp(firebaseConfig);

const auth = firebase.auth();
const db = firebase.firestore();
const storage = firebase.storage();

export { auth, db, storage };

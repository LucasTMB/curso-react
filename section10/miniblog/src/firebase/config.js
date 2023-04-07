import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyC5uHTM4Ms09mzeCOS8M3KZ5vkIEvHngbo",
  authDomain: "miniblog-3cca7.firebaseapp.com",
  projectId: "miniblog-3cca7",
  storageBucket: "miniblog-3cca7.appspot.com",
  messagingSenderId: "14920676933",
  appId: "1:14920676933:web:c98f205dd329c3bacfd52c"
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export {db};
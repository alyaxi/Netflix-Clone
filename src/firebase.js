import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs } from 'firebase/firestore/lite';
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXDhSNoTRxBq4IAV6VCqmw3v_n2iqyw2o",
  authDomain: "netflix-clone-25a30.firebaseapp.com",
  projectId: "netflix-clone-25a30",
  storageBucket: "netflix-clone-25a30.appspot.com",
  messagingSenderId: "709765752141",
  appId: "1:709765752141:web:1f6bfd26b040524ef3c304",
};

const firebaseApp = initializeApp(firebaseConfig);

const db = getFirestore(firebaseApp);

const auth = getAuth()

export { auth };
export default db;

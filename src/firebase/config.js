import firebase from "firebase";
import 'firebase/auth'
import 'firebase/firebase'
import 'firebase/storage'
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCAYgvP8EQfJlKPeHRaJcBctqmc0qj3L1I",
  authDomain: "olxnew-17999.firebaseapp.com",
  projectId: "olxnew-17999",
  storageBucket: "olxnew-17999.appspot.com",
  messagingSenderId: "1076170688316",
  appId: "1:1076170688316:web:8f0dae467756f3acc0c039",
  measurementId: "G-MZBE9Q0V15"
};
export default firebase.initializeApp(firebaseConfig)
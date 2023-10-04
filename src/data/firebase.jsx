import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
    apiKey: "AIzaSyCfUJoMd80xtw5E5VDxSgoEVDlzhiYXxwc",
    authDomain: "fir-crud-289f1.firebaseapp.com",
    projectId: "fir-crud-289f1",
    storageBucket: "fir-crud-289f1.appspot.com",
    messagingSenderId: "684143787764",
    appId: "1:684143787764:web:acffb2de3fd6194bdfa8a1",
  },
  app = initializeApp(firebaseConfig),
  db = getFirestore(app);
export { db };

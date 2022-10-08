// Initialize Firebase

import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore';

    // TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAKrlsF1bhukeBxXNJ0xQit4Vrj3A9pXqo",
  authDomain: "quetzalcoatl-de28b.firebaseapp.com",
  projectId: "quetzalcoatl-de28b",
  storageBucket: "quetzalcoatl-de28b.appspot.com",
  messagingSenderId: "242820719201",
  appId: "1:242820719201:web:184db2bb7e4ff7bb7a4020"
};

const app = initializeApp(firebaseConfig);

const firebaseApp = initializeApp(firebaseConfig);
const db = getFirestore(firebaseApp);
export { db }

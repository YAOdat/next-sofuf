import { initializeApp } from "firebase/app";
import { getAnalytics, isSupported } from "firebase/analytics";
import { getAuth } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore'; // Import Firestore

const firebaseConfig = {
  apiKey: "AIzaSyB-x0HMhiWNfQ3w0irZhXwa78xoxMT9ASw",
  authDomain: "sofuf-56bd2.firebaseapp.com",
  projectId: "sofuf-56bd2",
  storageBucket: "sofuf-56bd2.appspot.com",
  messagingSenderId: "318421562730",
  appId: "1:318421562730:web:717736b3bc4f36dd3ce113",
  measurementId: "G-K13PE2BCL6"
};

const app = initializeApp(firebaseConfig);
let analytics;
isSupported().then((result) => {
  if (result) {
    analytics = getAnalytics(app);
  }
});

const auth = getAuth(app);
const firestore = getFirestore(app); // Initialize Firestore

export { app, analytics, auth, firestore, firebaseConfig }; // Export Firestore
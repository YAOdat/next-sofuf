// config/firebase.js
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);

export { app, analytics };

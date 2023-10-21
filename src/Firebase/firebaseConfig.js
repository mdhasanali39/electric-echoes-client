
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrqZvRcGQaWJi9CYh6C6cORRSm12FgW-c",
  authDomain: "electric-echoes-web-app.firebaseapp.com",
  projectId: "electric-echoes-web-app",
  storageBucket: "electric-echoes-web-app.appspot.com",
  messagingSenderId: "710744942366",
  appId: "1:710744942366:web:df377c48e00ba650550b0f"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)
export default auth;
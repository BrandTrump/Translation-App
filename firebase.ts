import { getApp, getApps, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getFunctions } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAQ4jr08ZYk3R-900cShBGzCGWuAdS9LFs",
  authDomain: "saas-translator-app-b176e.firebaseapp.com",
  projectId: "saas-translator-app-b176e",
  storageBucket: "saas-translator-app-b176e.appspot.com",
  messagingSenderId: "1076555952763",
  appId: "1:1076555952763:web:627e5cf0a396c8241ee8de",
};

const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const functions = getFunctions(app);

export { db, auth, functions };

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import {getAuth} from "firebase/auth";
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCenYZzJTCwpKVDcHZS9-NjrDhP-vF7AtU",
  authDomain: "eshop-cf95d.firebaseapp.com",
  projectId: "eshop-cf95d",
  storageBucket: "eshop-cf95d.appspot.com",
  messagingSenderId: "94908655724",
  appId: "1:94908655724:web:5d1c32caefe080e23b1049",
  measurementId: "G-RSQRRCR4EH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const auth=getAuth();
export {app,auth};
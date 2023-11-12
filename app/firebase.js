// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiyrwNvv8YlAAXvGP089sq5CDe2Cv6DFE",
  authDomain: "nextjsapp-alphabi.firebaseapp.com",
  projectId: "nextjsapp-alphabi",
  storageBucket: "nextjsapp-alphabi.appspot.com",
  messagingSenderId: "402093033732",
  appId: "1:402093033732:web:13cb945cc7e0493b3e2851"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

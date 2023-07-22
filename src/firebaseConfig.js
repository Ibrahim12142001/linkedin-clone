// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDdru5C6ZUVjIgJsnQcoIev9h5INyRvjNU",
  authDomain: "linkedin-clone-53d65.firebaseapp.com",
  projectId: "linkedin-clone-53d65",
  storageBucket: "linkedin-clone-53d65.appspot.com",
  messagingSenderId: "1098267541497",
  appId: "1:1098267541497:web:10f2eb0d8be03009b70728",
  measurementId: "G-R6FVPYMEFX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

export { auth, app };
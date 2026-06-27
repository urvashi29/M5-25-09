// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// const firebaseConfig = {
//   apiKey: "AIzaSyC2kstVMJZhPLdjymFK5-VgJ2uOvcaENZo",
//   authDomain: "authenticate-user-1a17b.firebaseapp.com",
//   projectId: "project-1043986599675",
//   storageBucket: "authenticate-user-1a17b.firebasestorage.app",
//   messagingSenderId: "1080816206808",
//   appId: "1:1080816206808:web:b297afcc16d30efec128ad",
//   measurementId: "G-01CTXZW0KZ",
// };

// //initialize firebase

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD9t2T5l27TK-MaZdL8RRgA5Y1me0oNr9A",
  authDomain: "web-app-authenticate.firebaseapp.com",
  projectId: "web-app-authenticate",
  storageBucket: "web-app-authenticate.firebasestorage.app",
  messagingSenderId: "836717744294",
  appId: "1:836717744294:web:370fab3137ac12b8c7e467",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return signInWithPopup(auth, provider);
};

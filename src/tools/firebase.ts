import { getAnalytics } from 'firebase/analytics';
// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyAoZOaaQqOKbf7V1nnNkmamh-kcoYeGUkQ",
    authDomain: "su-mainweb.firebaseapp.com",
    projectId: "su-mainweb",
    storageBucket: "su-mainweb.appspot.com",
    messagingSenderId: "800049607762",
    appId: "1:800049607762:web:25089fef93246a94e65b8b",
    measurementId: "G-C0LCB5NG86"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analyticsApp = getAnalytics(app);
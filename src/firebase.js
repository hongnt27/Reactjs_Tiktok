// Import the functions you need from the SDKs you need
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyANMzZaivIPPsQfQ5I2faAineiibR9uHpc",
    authDomain: "tiktok-project-c2762.firebaseapp.com",
    projectId: "tiktok-project-c2762",
    storageBucket: "tiktok-project-c2762.appspot.com",
    messagingSenderId: "599187882630",
    appId: "1:599187882630:web:713df40deb5bd24e398707",
    measurementId: "G-V0LG06BK8N"
};

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);

// Use these for db & auth
const db = firebaseApp.firestore();

export {
    db
};
// const app = firebase.initializeApp(firebaseConfig);
// const db = app.fireStore();
// export default db;
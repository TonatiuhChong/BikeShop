import Firebase from 'firebase'

const firebase = Firebase.initializeApp({
    apiKey: "AIzaSyBWawjnWJULeldsHozp0A7wYDxqUyLuMxA",
    authDomain: "bikes-659dd.firebaseapp.com",
    projectId: "bikes-659dd",
    storageBucket: "bikes-659dd.appspot.com",
    messagingSenderId: "423024177290",
    appId: "1:423024177290:web:e4a0d342699ddab5f3fd73",
    measurementId: "G-DXJBDBTVEQ"
});

const db= Firebase.firestore();
const auth= Firebase.auth();

export {db,auth}
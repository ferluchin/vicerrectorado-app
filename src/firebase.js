import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyA-tyzwAagL9o2NcLySJS3q1Pe12ilwjyI",
    authDomain: "crud-investigacion-5fae0.firebaseapp.com",
    projectId: "crud-investigacion-5fae0",
    storageBucket: "crud-investigacion-5fae0.appspot.com",
    messagingSenderId: "131785430421",
    appId: "1:131785430421:web:091c79bbdf7f3139e7d29c"
};


// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);

import * as firebase from "firebase/app";

import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAbkpd0o38fe0NXIsbsyBoAp9VFLL3JP0o",
    authDomain: "todo-every-todo-has-a-story.firebaseapp.com",
    databaseURL: "https://todo-every-todo-has-a-story.firebaseio.com",
    projectId: "todo-every-todo-has-a-story",
    storageBucket: "",
    messagingSenderId: "473181083246",
    appId: "1:473181083246:web:2edaec3667f5be7a64387f"
};

firebase.initializeApp(firebaseConfig);

export const db = firebase.firestore();

export default firebase;

console.log(firebase);

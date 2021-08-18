import firebase from "firebase/app";
import "firebase/database";

const config = {
    apiKey: "AIzaSyBDvAFLmeHkDZET57ok9VNL2MC9ndIapsQ",
    authDomain: "fir-vuechat-2ea84.firebaseapp.com",
    projectId: "fir-vuechat-2ea84",
    storageBucket: "fir-vuechat-2ea84.appspot.com",
    messagingSenderId: "492203854680",
    appId: "1:492203854680:web:57a2758558161aaa95332d",
    measurementId: "G-NCMBLG8JJZ"
}

const db = firebase.initializeApp(config);
export default db;
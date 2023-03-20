import Firebase from "firebase";

export const db = Firebase.initializeApp({
  apiKey: "AIzaSyBDBSlGMgNKNiJMB1obrIkDo2vSQnnH5qM",
  authDomain: "vue-firebase-example-fb635.firebaseapp.com",
  databaseURL: "https://vue-firebase-example-fb635.firebaseio.com",
  storageBucket: "vue-firebase-example-fb635.appspot.com"
}).database();

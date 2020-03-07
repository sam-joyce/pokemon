  import firebase from "firebase";
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: "AIzaSyASMrfo_I7C6HnSRVqikhVKiYCC5Q8CLAY",
    authDomain: "pokemon-db509.firebaseapp.com",
    databaseURL: "https://pokemon-db509.firebaseio.com",
    projectId: "pokemon-db509",
    storageBucket: "pokemon-db509.appspot.com",
    messagingSenderId: "789512338469",
    appId: "1:789512338469:web:c6c8d7434fb0edecefd3cc"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  export const firestore = firebase.firestore();

  export default firebase;
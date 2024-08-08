import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyCFdoeOPOg6dsLcgQY4hvD4iTUh9c_3bQc",
  authDomain: "class-buddy-10a2c.firebaseapp.com",
  projectId: "class-buddy-10a2c",
  storageBucket: "class-buddy-10a2c.appspot.com",
  messagingSenderId: "518988086486",
  appId: "1:518988086486:web:2ea39a2331613c8d71dd77",
  measurementId: "G-WPNHJ66C9R",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app };

import { initializeApp } from "firebase/app";

const firebaseConfig = {
    apiKey: "AIzaSyBx0mEpGpItEe7HyTKZzVrS20xaO7ssft0",
    authDomain: "react-practice-56c8d.firebaseapp.com",
    projectId: "react-practice-56c8d",
    storageBucket: "react-practice-56c8d.firebasestorage.app",
    messagingSenderId: "795994698961",
    appId: "1:795994698961:web:045f2e38ca2395bf3241f0",
    measurementId: "G-8JPHCWCB6P",
    databaseURL: "https://react-practice-56c8d-default-rtdb.firebaseio.com",
};

const app = initializeApp(firebaseConfig);

export default app;


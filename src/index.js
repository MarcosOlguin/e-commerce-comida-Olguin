import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter } from "react-router-dom";

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAeB_bl-7dHpU0W3SdsxTJDQXp_R1MitJk",
  authDomain: "e-commerce-coderhouse-b0e54.firebaseapp.com",
  databaseURL:
    "https://e-commerce-coderhouse-b0e54-default-rtdb.firebaseio.com",
  projectId: "e-commerce-coderhouse-b0e54",
  storageBucket: "e-commerce-coderhouse-b0e54.appspot.com",
  messagingSenderId: "731958759964",
  appId: "1:731958759964:web:5a2e9324ef09fe781845d9",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

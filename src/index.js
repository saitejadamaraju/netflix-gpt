import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

const firebaseConfig = {
  apiKey: "AIzaSyDYbWOpfDirT-LDOGUpU0yuhpxPz6PQT9g",
  authDomain: "netflixgpt-28eef.firebaseapp.com",
  projectId: "netflixgpt-28eef",
  storageBucket: "netflixgpt-28eef.appspot.com",
  messagingSenderId: "619933688062",
  appId: "1:619933688062:web:7e07822a9169dba1ba45af",
  measurementId: "G-KWHV7NJZTB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
//export const auth = getAuth();

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

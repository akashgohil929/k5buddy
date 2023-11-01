// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging } from "firebase/messaging";
const firebaseConfig = {
  apiKey: "AIzaSyAUeYGJO08r3fcFQtywaLF82QJ1pq9_VJA",
  authDomain: "k5buddy-notification-sys.firebaseapp.com",
  projectId: "k5buddy-notification-sys",
  storageBucket: "k5buddy-notification-sys.appspot.com",
  messagingSenderId: "736705255370",
  appId: "1:736705255370:web:042d2946945bd9773ca133",
  measurementId: "G-D3362WS2BP"
};

export const app = initializeApp(firebaseConfig);
export const messaging = getMessaging(app);

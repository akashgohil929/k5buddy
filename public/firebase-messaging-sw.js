importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/8.10.0/firebase-messaging.js");

const firebaseConfig = {
  apiKey: "AIzaSyAUeYGJO08r3fcFQtywaLF82QJ1pq9_VJA",
  authDomain: "k5buddy-notification-sys.firebaseapp.com",
  projectId: "k5buddy-notification-sys",
  storageBucket: "k5buddy-notification-sys.appspot.com",
  messagingSenderId: "736705255370",
  appId: "1:736705255370:web:042d2946945bd9773ca133",
  measurementId: "G-D3362WS2BP"
};

firebase.initializeApp(firebaseConfig);
const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: payload.notification.image,
  };

  // self.registration.showNotification(notificationTitle, notificationOptions);
  self.registration.hideNotification();
});
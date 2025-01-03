import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";

const firebaseConfig = {
    apiKey: "AIzaSyDruvFW37mi0hnc6a5soL9svsxqgxodqgM",
    authDomain: "sari-app-1859a.firebaseapp.com",
    projectId: "sari-app-1859a",
    storageBucket: "sari-app-1859a.firebasestorage.app",
    messagingSenderId: "97773308399",
    appId: "1:97773308399:web:47eb6d75f5820aa6540e1a",
    measurementId: "G-49H2WLGJSE"
};

const app = initializeApp(firebaseConfig);
const messaging = getMessaging(app);

export const requestNotificationPermission = async () => {
  try {
    const token = await getToken(messaging, {
      vapidKey: "YOUR_PUBLIC_VAPID_KEY",
    });
    console.log("Notification Token:", token);
    return token;
  } catch (err) {
    console.error("Permission denied:", err);
    return null;
  }
};

export default messaging;

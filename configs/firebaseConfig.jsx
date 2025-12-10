// firebaseConfig.js
import { initializeApp, getApps } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: "video-e75dc.firebaseapp.com",
  projectId: "video-e75dc",
  storageBucket: "video-e75dc.appspot.com",
  messagingSenderId: "825332084236",
  appId: "1:825332084236:web:539a2df6f423f91f620829",
  measurementId: "G-8D62V71W6M",
};

// Initialize Firebase only if it hasn't been initialized yet
const app = !getApps().length ? initializeApp(firebaseConfig) : getApps()[0];

// Export Auth
export const auth = getAuth(app);
export default app;

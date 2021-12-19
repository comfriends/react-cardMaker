
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID
  ,authDomain: process.env.REACT_APP_FIREBASE_DOMAIN_KEY
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
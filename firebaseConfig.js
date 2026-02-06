import { initializeApp } from 'firebase/app';
import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
import { getFirestore } from 'firebase/firestore';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';

// 1. REPLACE WITH YOUR KEYS FROM FIREBASE CONSOLE
const firebaseConfig = {
  apiKey: "AIzaSyDBakv-ADDdbYBcvBid0JAmfc_pSwfsCMM",
  authDomain: "sahaara-app.firebaseapp.com",
  projectId: "sahaara-app",
  storageBucket: "sahaara-app.firebasestorage.app",
  messagingSenderId: "811003337209",
  appId: "1:811003337209:web:96ecb9d6e2b7a06917c528"
};

// 2. INITIALIZE FIREBASE
const app = initializeApp(firebaseConfig);

// 3. PERSISTENCE (Keeps user logged in even if they close the app)
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});

const db = getFirestore(app);

export { auth, db };
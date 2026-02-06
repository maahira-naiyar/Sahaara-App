// import { initializeApp } from 'firebase/app';
// import { getAuth, initializeAuth, getReactNativePersistence } from 'firebase/auth';
// import { getFirestore } from 'firebase/firestore';
// import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
// import { 
//   getAuth, 
//   initializeAuth, 
//   getReactNativePersistence, 
//   browserLocalPersistence 
// } from "firebase/auth";
// import AsyncStorage from "@react-native-async-storage/async-storage";
// import { Platform } from "react-native";
// // 1. REPLACE WITH YOUR KEYS FROM FIREBASE CONSOLE
// const firebaseConfig = {
//   apiKey: "AIzaSyDBakv-ADDdbYBcvBid0JAmfc_pSwfsCMM",
//   authDomain: "sahaara-app.firebaseapp.com",
//   projectId: "sahaara-app",
//   storageBucket: "sahaara-app.firebasestorage.app",
//   messagingSenderId: "811003337209",
//   appId: "1:811003337209:web:96ecb9d6e2b7a06917c528"
// };

// // 2. INITIALIZE FIREBASE
// const app = initializeApp(firebaseConfig);

// // 3. PERSISTENCE (Keeps user logged in even if they close the app)
// const auth = initializeAuth(app, {
//   persistence: getReactNativePersistence(ReactNativeAsyncStorage)
// });

// let auth;

// if (Platform.OS === 'web') {
//   // On Web: Use standard browser persistence
//   auth = getAuth(app);
//   auth.setPersistence(browserLocalPersistence);
// } else {
//   // On Mobile: Use AsyncStorage persistence
//   auth = initializeAuth(app, {
//     persistence: getReactNativePersistence(AsyncStorage)
//   });
// }

// const db = getFirestore(app);

// export { auth, db };


import { initializeApp } from 'firebase/app';
import { 
  getAuth, 
  initializeAuth, 
  getReactNativePersistence, 
  browserLocalPersistence 
} from "firebase/auth";
import { getFirestore } from 'firebase/firestore';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Platform } from "react-native";

// 1. YOUR FIREBASE KEYS
const firebaseConfig = {
  apiKey: "AIzaSyDBakv-ADDdbYBcvBid0JAmfc_pSwfsCMM",
  authDomain: "sahaara-app.firebaseapp.com",
  projectId: "sahaara-app",
  storageBucket: "sahaara-app.firebasestorage.app",
  messagingSenderId: "811003337209",
  appId: "1:811003337209:web:96ecb9d6e2b7a06917c528"
};

// 2. INITIALIZE FIREBASE APP
const app = initializeApp(firebaseConfig);

// 3. INITIALIZE AUTH (CONDITIONAL)
let auth;

if (Platform.OS === 'web') {
  // WEB: Use standard browser storage (Cookies/Local Storage)
  auth = getAuth(app);
  // We use setPersistence here to ensure it sticks
  auth.setPersistence(browserLocalPersistence);
} else {
  // MOBILE: Use React Native Async Storage
  auth = initializeAuth(app, {
    persistence: getReactNativePersistence(AsyncStorage)
  });
}

// 4. INITIALIZE DATABASE
const db = getFirestore(app);

export { auth, db };
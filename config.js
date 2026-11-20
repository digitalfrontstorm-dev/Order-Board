// Picado Order Board: Firebase settings
// Paste the values from Firebase console > Project settings > General > Your apps > SDK setup and configuration > Config.
// These values are safe to publish. Your Firestore rules (firestore.rules) decide who can read and change orders.
export const firebaseConfig = {
  apiKey: "PASTE_API_KEY",
  authDomain: "PASTE_PROJECT_ID.firebaseapp.com",
  projectId: "PASTE_PROJECT_ID",
  storageBucket: "PASTE_PROJECT_ID.appspot.com",
  messagingSenderId: "PASTE_SENDER_ID",
  appId: "PASTE_APP_ID"
};

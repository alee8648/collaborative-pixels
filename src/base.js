import Rebase from 're-base';
import firebase from 'firebase';
import apiKeys from './apiKeys.js';

if (!apiKeys) {
    const apiKeys = {
        apiKey: process.env.FIREBASE_API_KEY,
        authDomain: process.env.FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.FIREBASE_DATABASE_URL,
        projectId: process.env.FIREBASE_PROJECT_ID,
        storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.FIREBASE_APP_ID,
    };
}

const firebaseApp = firebase.initializeApp({ ...apiKeys });

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// This is a default export
export default base;

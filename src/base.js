import Rebase from 're-base';
import firebase from 'firebase';
import apiKeys from './apiKeys.js';

let privateData = {};
if (process.env.REACT_APP_PROD === 'true') {
    privateData = {
        apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
        authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
        databaseURL: process.env.REACT_APP_FIREBASE_DATABASE_URL,
        projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
        storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
        messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
        appId: process.env.REACT_APP_FIREBASE_APP_ID,
    };
} else {
    privateData = { ...apiKeys };
}

const firebaseApp = firebase.initializeApp(privateData);

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// This is a default export
export default base;

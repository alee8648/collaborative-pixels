import Rebase from 're-base';
import firebase from 'firebase';

const firebaseApp = firebase.initializeApp({
    apiKey: 'AIzaSyBpnSt8UHlEymaxD77im2abzgKCETn6IPE',
    authDomain: 'collaborative-p.firebaseapp.com',
    databaseURL: 'https://collaborative-p.firebaseio.com',
    projectId: 'collaborative-p',
    storageBucket: 'collaborative-p.appspot.com',
    messagingSenderId: '126141402215',
    appId: '1:126141402215:web:07cfdabf6e2044dbced8c2',
});

const base = Rebase.createClass(firebaseApp.database());

// Named export
export { firebaseApp };

// This is a default export
export default base;

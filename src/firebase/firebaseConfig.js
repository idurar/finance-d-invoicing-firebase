'use strict';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

let auth, authProviders, db, serverTimestamp;

const firebaseConfig = {
  apiKey: 'AIzaSyC7fmrGkUadXASa7r256YeE-XQyBAmZ7oo',
  authDomain: 'finance-d-facturation-web.firebaseapp.com',
  projectId: 'finance-d-facturation-web',
  storageBucket: 'finance-d-facturation-web.appspot.com',
  messagingSenderId: '319602501837',
  appId: '1:319602501837:web:fa19503ea8b37e8ada6184',
};

function firebaseInit() {
  //must init firebase before accessing authentication and firestore
  firebase.initializeApp(firebaseConfig);

  // define exports
  auth = firebase.auth();
  authProviders = { google: new firebase.auth.GoogleAuthProvider() };
  db = firebase.firestore();
  serverTimestamp = firebase.firestore.FieldValue.serverTimestamp;
}

export { firebaseInit, auth, authProviders, db, serverTimestamp };

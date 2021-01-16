'use strict';

import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import { firebaseAuthService } from './firebaseAuthService';

let auth, authProviders, db;

const firebaseConfig = {
  apiKey: 'AIzaSyC7fmrGkUadXASa7r256YeE-XQyBAmZ7oo',
  authDomain: 'finance-d-facturation-web.firebaseapp.com',
  projectId: 'finance-d-facturation-web',
  storageBucket: 'finance-d-facturation-web.appspot.com',
  messagingSenderId: '319602501837',
  appId: '1:319602501837:web:fa19503ea8b37e8ada6184',
};


function initializeFirebaseServices() {
  firebase.initializeApp(firebaseConfig);

  // After firebaseConfig has been init, define exports
  auth = firebase.auth();
  authProviders = {
    google: new firebase.auth.GoogleAuthProvider(),
  };

  db = firebase.firestore();

  firebaseAuthService();
}


export { initializeFirebaseServices, auth, authProviders, db };

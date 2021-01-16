'use strict';

import { auth, authProviders } from './initializeFirebaseServices';
import { onUserLoggedIn, onUserLoggedOut } from '../loginStateHandler';


function firebaseAuthService() {
  registerUIEventHandlers();
  registerAuthStateEventHandler();


  //nested functions
  function registerUIEventHandlers() {
    document.getElementById('signInBtn').onclick = googleSignInPopup;
    document.getElementById('signOutBtn').onclick = signOut;
  }


  function registerAuthStateEventHandler() {
    auth.onAuthStateChanged(user => {
      if (user) {
        onUserLoggedIn(user);
      } else {
        onUserLoggedOut();
      }
    });
  }


  function googleSignInPopup() {
    auth.signInWithPopup(authProviders.google)
      .then((result) => {
        console.log(result.user);
      })
      .catch(_logError);
  }


  function signOut() {
    auth.signOut().then(() => {
      console.log('Signed out');
    }).catch(_logError);
  }


  function _logError(error) {
    // Handle Errors here.
    const errorCode = error.code;
    const errorMessage = error.message;
    // The email of the user's account used.
    const email = error.email;
    // The auth.AuthCredential type that was used.
    const credential = error.credential;
    console.error({ errorCode, errorMessage, email, credential });
  }
}


export { firebaseAuthService };

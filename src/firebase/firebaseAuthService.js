'use strict';

import { auth, authProviders } from './firebaseConfig';
import { handleLoginStateChange } from '../state/handleLoginStateChange';


function registerAuthStateListener() {
  //firebase authentication emits an event when the user login state updates
  auth.onAuthStateChanged(handleLoginStateChange);
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


export { registerAuthStateListener, googleSignInPopup, signOut };

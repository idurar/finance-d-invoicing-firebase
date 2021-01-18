"use strict";

import { auth, authProviders } from "./firebaseConfig";
import { onUserLoggedIn, onUserLoggedOut } from "../state/handleLoginStateChange";

let authUser;

function registerAuthStateListener() {
  //firebase authentication emits an event when the user login state updates
  auth.onAuthStateChanged((user) => {
    if (user) {
      authUser = user;
      onUserLoggedIn(authUser);
    } else {
      onUserLoggedOut();
    }
  });
}

function googleSignInPopup() {
  auth
    .signInWithPopup(authProviders.google)
    .then((result) => {
      console.log(result.user);
    })
    .catch(_logError);
}

function signOut() {
  auth
    .signOut()
    .then(() => {
      console.log("Signed out");
    })
    .catch(_logError);
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

export { authUser, registerAuthStateListener, googleSignInPopup, signOut };

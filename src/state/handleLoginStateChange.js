'use strict';

import { googleSignInPopup, signOut } from '../firebase/firebaseAuthService';
import { invoice } from '../invoice/invoice';

//register UI clicks on sign-in and sign-out buttons
document.getElementById('signInBtn').onclick = googleSignInPopup;
document.getElementById('signOutBtn').onclick = signOut;

function handleLoginStateChange(user) {
  if (user) {
    onUserLoggedIn(user);
  } else {
    onUserLoggedOut();
  }
}

function onUserLoggedIn(user) {
  console.log('is signed in');

  document.getElementById('signedInHeader').style.display = '';
  document.getElementById('signedOutHeader').style.display = 'none';
  document.getElementById('authUserEmail').textContent = user.email;

  document.getElementById('whenSignedIn').style.display = '';
  document.getElementById('whenSignedOut').style.display = 'none';

  invoice.registerEventListeners();
  document.getElementById('save-btn').onclick = invoice.save;
}

function onUserLoggedOut() {
  console.log('is signed out');

  document.getElementById('signedInHeader').style.display = 'none';
  document.getElementById('signedOutHeader').style.display = '';
  document.getElementById('whenSignedIn').style.display = 'none';
  document.getElementById('whenSignedOut').style.display = '';
}

export { handleLoginStateChange };

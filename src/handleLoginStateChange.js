'use strict';

import { googleSignInPopup, signOut } from './firebase/firebaseAuthService';
import { invoice } from './invoice/invoice';
import { contact } from './contact/contact';

//register UI clicks on sign-in and sign-out buttons
document.getElementById('signInBtn').onclick = googleSignInPopup;
document.getElementById('signOutBtn').onclick = signOut;

function onUserLoggedIn(user) {
  console.log('user is signed in');
  console.log(user);

  document.getElementById('signedInHeader').style.display = '';
  document.getElementById('signedOutHeader').style.display = 'none';
  document.getElementById('authUserEmail').textContent = user.email;

  document.getElementById('whenSignedIn').style.display = '';
  document.getElementById('whenSignedOut').style.display = 'none';

  //keep in this order
  contact.init();
  contact.registerEventListeners();

  invoice.init();
  invoice.registerEventListeners();
}

function onUserLoggedOut() {
  console.log('is signed out');

  document.getElementById('signedInHeader').style.display = 'none';
  document.getElementById('signedOutHeader').style.display = '';
  document.getElementById('whenSignedIn').style.display = 'none';
  document.getElementById('whenSignedOut').style.display = '';
}

export { onUserLoggedIn, onUserLoggedOut };

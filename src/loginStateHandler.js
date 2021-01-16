'use strict';


import { loadUserServices } from './loadUserServices';


function onUserLoggedIn(user) {
  console.log('is signed in');
  hideSignInContext();

  loadUserServices(user);
}


function onUserLoggedOut() {
  console.log('is signed out');
  showSignInContext();

}


function hideSignInContext() {
  document.getElementById('whenSignedIn').style.display = '';
  document.getElementById('whenSignedOut').style.display = 'none';
  document.getElementById('signInBtn').style.display = 'none';
  document.getElementById('signOutBtn').style.display = '';
}

function showSignInContext() {
  document.getElementById('whenSignedIn').style.display = 'none';
  document.getElementById('whenSignedOut').style.display = '';
  document.getElementById('signInBtn').style.display = '';
  document.getElementById('signOutBtn').style.display = 'none';
}


export { onUserLoggedIn, onUserLoggedOut };

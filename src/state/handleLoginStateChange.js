"use strict";

import { googleSignInPopup, signOut } from "../firebase/firebaseAuthService";
import { invoice } from "../invoice/invoice";

//register UI clicks on sign-in and sign-out buttons
document.getElementById("signInBtn").onclick = googleSignInPopup;
document.getElementById("signOutBtn").onclick = signOut;

function handleLoginStateChange(user) {
  if (user) {
    onUserLoggedIn(user);
  } else {
    onUserLoggedOut();
  }
}

function onUserLoggedIn(user) {
  console.log("is signed in");
  hideSignInContext();
  loadUserServices(user);

  function hideSignInContext() {
    document.getElementById("whenSignedIn").style.display = "";
    document.getElementById("whenSignedOut").style.display = "none";
    document.getElementById("signInBtn").style.display = "none";
    document.getElementById("signOutBtn").style.display = "";
  }

  function loadUserServices(user) {
    document.getElementById("authUserEmail").textContent = user.email;

    invoice.registerEventListeners();
    document.getElementById("save-btn").onclick = invoice.save;
  }
}

function onUserLoggedOut() {
  console.log("is signed out");
  showSignInContext();

  function showSignInContext() {
    document.getElementById("whenSignedIn").style.display = "none";
    document.getElementById("whenSignedOut").style.display = "";
    document.getElementById("signInBtn").style.display = "";
    document.getElementById("signOutBtn").style.display = "none";
  }
}

export { handleLoginStateChange };

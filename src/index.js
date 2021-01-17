"use strict";

import "./styles/index.css";
import "./styles/google-sign-in-button.css";

import { firebaseInit } from "./firebase/firebaseConfig";
import { registerAuthStateListener } from "./firebase/firebaseAuthService";

window.onload = () => {
  firebaseInit();
  registerAuthStateListener();
};

const year = document.getElementById("copyright-year");
year.textContent = new Date().getFullYear().toString();

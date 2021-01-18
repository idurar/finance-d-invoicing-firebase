'use strict';

// styles
import './styles/index.css';
import './styles/google-sign-in-button.css';

// scripts
import { firebaseInit } from './firebase/firebaseConfig';
import { registerAuthStateListener } from './firebase/firebaseAuthService';


firebaseInit();
registerAuthStateListener();


const year = document.getElementById('copyright-year');
year.textContent = new Date().getFullYear().toString();

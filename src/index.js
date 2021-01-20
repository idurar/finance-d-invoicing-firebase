'use strict';

// styles
import './styles/index.css';
import './styles/google-sign-in-button.css';

// scripts
import { firebaseInit } from './firebase/firebaseConfig';
import { registerAuthStateListener } from './firebase/firebaseAuthService';
import { dbGetInvoices } from './firebase/firebaseDbService';


firebaseInit();
registerAuthStateListener();


document.getElementById("myInvoicesBtn").onclick = async function showMyInvoices() {
  const myInvoices = await dbGetInvoices();
  console.log(myInvoices);
};



const year = document.getElementById('copyright-year');
year.textContent = new Date().getFullYear().toString();

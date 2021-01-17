'use strict';

import { firebaseInit } from './firebase/firebaseConfig';
import { registerAuthStateListener } from './firebase/firebaseAuthService';


window.onload = () => {
  firebaseInit();
  registerAuthStateListener();

};

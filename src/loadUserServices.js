'use strict';

import { invoice } from './invoice/invoice';


function loadUserServices(user) {
  document.getElementById("authUserEmail").textContent = user.email;

  invoice.registerEvents();
  document.getElementById('save-btn').onclick = invoice.save;
}


export { loadUserServices };

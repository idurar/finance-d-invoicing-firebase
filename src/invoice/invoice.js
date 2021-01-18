'use strict';

import { saveInvoiceInDB } from '../firebase/firebaseDbService';
import { v4 as uuidv4 } from 'uuid';
import { clientName } from './clientName';

export const invoice = {
  id: null,

  initializeNew() {
    invoice.id = uuidv4();
    console.log( invoice.id );
  },

  save() {
    saveInvoiceInDB({
      id: invoice.id,
      name: clientName.get(),
      number: '1',
      date: '2021-01-18',
    });
  },

  registerEventListeners() {
    clientName.registerEvents();
    document.getElementById('save-btn').onclick = invoice.save;
  },
};

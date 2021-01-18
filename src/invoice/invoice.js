'use strict';

import { dbSaveInvoice } from '../firebase/firebaseDbService';
import { invoiceDataModel } from './invoiceDataModel';
import { contact } from '../contact/contact';

export const invoice = {
  current: undefined,

  initializeNew() {
    invoice.current = { ...invoiceDataModel };
    invoice.current.contactId = contact.current.contactId;
    console.log(invoice.current);
  },

  save() {
    dbSaveInvoice(invoice.current);
  },

  registerEventListeners() {
    document.getElementById('save-btn').onclick = invoice.save;
  },
};

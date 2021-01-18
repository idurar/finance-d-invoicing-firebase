'use strict';

import { dbDeleteInvoice, dbSaveInvoice } from '../firebase/firebaseDbService';
import { invoiceDataModel } from './invoiceDataModel';
import { contact } from '../contact/contact';
import { v4 as uuidv4 } from 'uuid';

export const invoice = {
  current: undefined,

  init() {
    invoice.current = { ...invoiceDataModel };
    invoice.current.invoiceId = uuidv4();
    invoice.current.contact.contactId = contact.current.contactId;
    console.log(invoice.current);
  },

  save() {
    dbSaveInvoice(invoice.current);
  },

  delete() {
    dbDeleteInvoice(invoice.current.invoiceId);
  },

  registerEventListeners() {
    document.getElementById('resetBtn').onclick = invoice.init;
    document.getElementById('saveBtn').onclick = invoice.save;
    document.getElementById('deleteBtn').onclick = invoice.delete;
  },
};

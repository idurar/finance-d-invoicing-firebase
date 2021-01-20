'use strict';

import { dbDeleteInvoice, dbGetInvoices, dbSaveInvoice } from '../firebase/firebaseDbService';
// import { v4 as uuidv4 } from 'uuid';
import { invoiceDataModel } from './invoiceDataModel';
import { invoiceNumberInput } from './invoiceNumberInput';
import { contact } from '../contact/contact';
import { contactNameInput } from '../contact/contactNameInput';
import { invoiceDateInput } from './invoiceDataInput';

export const invoice = {
  current: undefined,

  init() {
    invoice.current = invoiceDataModel();
    console.log(invoice.current);

    // update UI with current data
    contactNameInput.set(invoice.current.contact.name);
    invoiceNumberInput.set(invoice.current.number);
    invoiceDateInput.set(invoice.current.date.issued);
  },

  save() {
    const data = invoice.current;
    data.contact.name = contact.getName();
    if (data.contact.name && data.number && data.date.issued) {
      dbSaveInvoice(invoice.current);
      invoice.init();
    } else {
      alert('invalid invoice data cannot save');
    }
  },

  delete() {
    dbDeleteInvoice(invoice.current.invoiceId);
    invoice.init();
  },

  registerEventListeners() {
    document.getElementById('resetBtn').onclick = invoice.init;
    document.getElementById('saveBtn').onclick = invoice.save;
    document.getElementById('deleteBtn').onclick = invoice.delete;

    invoiceNumberInput.registerEventListeners();
    invoiceDateInput.registerEventListeners();
  },
};

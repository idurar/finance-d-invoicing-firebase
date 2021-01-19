'use strict';

import { invoice } from './invoice';

export const invoiceDateInput = {
  inputElm: document.getElementById('invoiceDateInput'),

  set(value) {
    invoice.current.date.issued = value;
    invoiceDateInput.inputElm.value = invoice.current.date.issued;
  },

  reformat(date) {
    if (date) {
      date = date.replace(/[\s\D]/g, '');
      invoiceDateInput.set(date);
      return date;
    }
  },

  registerEventListeners() {
    invoiceDateInput.inputElm.onkeyup = e => invoiceDateInput.reformat(e.target.value);
  },
};

'use strict';


import { invoice } from './invoice';

export const invoiceNumberInput = {
  inputElm: document.getElementById('invoiceNumberInput'),

  set(value) {
    invoice.current.number = value;
    invoiceNumberInput.inputElm.value = invoice.current.number;
  },

  reformat(number) {
    if (number) {
      number = number.replace(/[\s\D]/g, '');
      invoiceNumberInput.set(number);
      return number;
    }
  },

  registerEventListeners() {
    invoiceNumberInput.inputElm.onkeyup = e => invoiceNumberInput.reformat(e.target.value);
  },
};

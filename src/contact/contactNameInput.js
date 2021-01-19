'use strict';

import { contact } from './contact';

export const contactNameInput = {
  inputElm: document.getElementById('contactNameInput'),

  set(value) {
    contact.current.name = value;
    contactNameInput.inputElm.value = contact.current.name;
  },

  reformat(name) {
    if (name) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      name = name.replace(/\s+/g, ' ');
      contactNameInput.set(name);
      return name;
    }
  },

  registerEventListeners() {
    contactNameInput.inputElm.onkeyup = e => contactNameInput.reformat(e.target.value);
    contactNameInput.inputElm.onchange = e => contactNameInput.set(e.target.value.trim());
  },
};

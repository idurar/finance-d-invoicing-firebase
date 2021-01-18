"use strict";

import { contact } from './contact';

export const contactNameInput = {
  inputElm: document.getElementById("contactNameInput"),

  get() {
    return contact.current.name;
  },
  set(value) {
    contact.current.name = value;
    contactNameInput.inputElm.value = contact.current.name;
  },

  reformat(name) {
    if (name) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      name = name.replace(/\s+/g, " ");
      contactNameInput.set(name);
      return name;
    }
  },

  registerEvents() {
    contactNameInput.inputElm.onkeyup = (e) => contactNameInput.reformat(e.target.value);
    contactNameInput.inputElm.onchange = (e) => contactNameInput.set(e.target.value.trim());
  },
};

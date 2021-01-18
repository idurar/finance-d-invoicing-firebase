'use strict';

import { dbSaveContact } from '../firebase/firebaseDbService';
import { contactDataModel } from './contactDataModel';
import { contactNameInput } from './contactNameInput';

export const contact = {
  current: undefined,

  initializeNew() {
    contact.current = { ...contactDataModel };
    contactNameInput.set("");
    console.log(contact.current);
  },

  save() {
    dbSaveContact(contact.current);
  },

  registerEventListeners() {
    contactNameInput.registerEvents();
  },
};
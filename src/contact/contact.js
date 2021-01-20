'use strict';

import { dbSaveContact } from '../firebase/firebaseDbService';
import { contactDataModel } from './contactDataModel';
import { contactNameInput } from './contactNameInput';

export const contact = {
  current: undefined,

  init() {
    contact.current = contactDataModel();
    console.log(contact.current);
  },

  getName() {
    return contact.current.name;
  },

  save() {
    dbSaveContact(contact.current);
  },

  registerEventListeners() {
    contactNameInput.registerEventListeners();
  },
};
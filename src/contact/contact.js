'use strict';

import { dbSaveContact } from '../firebase/firebaseDbService';
import { contactDataModel } from './contactDataModel';
import { contactNameInput } from './contactNameInput';
import { v4 as uuidv4 } from 'uuid';

export const contact = {
  current: undefined,

  init() {
    contact.current = { ...contactDataModel };
    contact.current.contactId = uuidv4();
    contactNameInput.set('');
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
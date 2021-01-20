'use strict';

import { contact } from './contact';
import { v4 as uuidv4 } from 'uuid';

const contactsDbCollectionName = 'contacts';

//By returning an object from a function call,
//it ensures that the model is protected from modifications.
function contactDataModel() {
  return {
    contactId: contact.current ? contact.current.contactId : uuidv4(),
    name: contact.current ? contact.current.name : "",
    enterprise: '',
    role: '',
    email: '',
    phone: '',
    website: '',
    address: {
      street: '',
      city: '',
      stateProvince: '',
      country: '',
      postalCode: '',
    },
  };
};

export { contactsDbCollectionName, contactDataModel };

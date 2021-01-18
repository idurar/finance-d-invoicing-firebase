'use strict';

import { v4 as uuidv4 } from 'uuid';

const contactsDbCollectionName = 'contacts';

const contactDataModel = {
  contactId: uuidv4(),
  name: '',
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

export { contactsDbCollectionName, contactDataModel };

'use strict';

const contactsDbCollectionName = 'contacts';

const contactDataModel = {
  contactId: '',
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

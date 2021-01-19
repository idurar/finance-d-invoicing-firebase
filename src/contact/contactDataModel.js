'use strict';

const contactsDbCollectionName = 'contacts';

//By returning an object from a function call,
//it ensures that the model is protected from modifications.
function contactDataModel() {
  return {
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
};

export { contactsDbCollectionName, contactDataModel };

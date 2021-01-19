'use strict';

const invoicesDbCollectionName = 'invoices';

//By returning an object from a function call,
//it ensures that the model is protected from modifications.
function invoiceDataModel() {
  return {
    invoiceId: '',
    contact: {
      contactId: '',
      name: '',
    },
    number: '',
    date: {
      issued: '',
      due: '',
    },
    transactions: [
      {
        product: '',
        quantity: '',
        price: '',
        taxCode: '',
        amount: '',
      },
    ],
    sum: {
      subTotal: '',
      taxes: [
        {
          label: '',
          value: '',
        },
      ],
      total: '',
    },
    paiements: [
      {
        method: '',
        account: '',
        date: '',
        ref: '',
        amount: '',
      },
    ],
  };
};

export { invoiceDataModel, invoicesDbCollectionName };

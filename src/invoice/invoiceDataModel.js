'use strict';

const invoicesDbCollectionName = 'invoices';

const invoiceDataModel = {
  invoiceId: '',
  contactId: '',
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

export { invoiceDataModel, invoicesDbCollectionName };

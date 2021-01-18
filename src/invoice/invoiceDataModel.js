'use strict';

import { v4 as uuidv4 } from 'uuid';

const invoicesDbCollectionName = 'invoices';

const invoiceDataModel = {
  invoiceId: uuidv4(),
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

'use strict';

import { authUser } from './firebaseAuthService';
import { db, serverTimestamp } from './firebaseConfig';

function saveInvoiceInDB(invoice) {
  if (!authUser) throw new Error('authUser is undefined cannot save in DB.');
  if (!invoice) throw new Error('invoice is undefined cannot save in DB.');

  const data = {
    _createdByUid: authUser.uid,
    _updatedAt: serverTimestamp(),
    ...invoice,
  };

  db.collection('invoices')
    .doc(invoice.id)
    .set(data)
    .then()
    .catch(err => console.error('Error saving invoice: ', err));
}

export { saveInvoiceInDB };

'use strict';

import { authUser } from './firebaseAuthService';
import { db, serverTimestamp } from './firebaseConfig';
import { contactsDbCollectionName } from '../contact/contactDataModel';
import { invoicesDbCollectionName } from '../invoice/invoiceDataModel';

function dbSaveInvoice(invoice) {
  if (!authUser) throw new Error('authUser is undefined cannot save in DB.');
  if (!_isValidInvoice(invoice)) throw new Error('invoice is invalid cannot save in DB.');

  const data = _addDbTrackingData(invoice);

  console.log(data);

  db.collection(invoicesDbCollectionName)
    .doc(invoice.invoiceId)
    .set(data)
    .then()
    .catch(err => console.error('Error saving invoice: ', err));
}

async function dbGetInvoices() {
  if (!authUser) throw new Error('authUser is undefined cannot read in DB.');



  const querySnapshot = await db.collection(invoicesDbCollectionName)
    .where('_createdByUid', '==', authUser.uid)
    .limit(3)
    .get()
    .catch(err => console.error('Error getting invoices: ', err));

  return querySnapshot.docs.map(doc => doc.data());
}

function dbDeleteInvoice(invoiceId) {
  if (!invoiceId) throw new Error('invoiceId is undefined cannot delete in DB.');

  db.collection(invoicesDbCollectionName)
    .doc(invoiceId)
    .delete()
    .then()
    .catch(err => console.error('Error deleting invoice: ', err));
}

function _isValidInvoice(invoice) {
  return invoice;
}

function dbSaveContact(contact) {
  if (!authUser) throw new Error('authUser is undefined cannot save in DB.');
  if (!_isValidClient(contact)) throw new Error('invoice is invalid cannot save in DB.');

  const data = _addDbTrackingData(contact);

  db.collection(contactsDbCollectionName)
    .doc(contact.contactId)
    .set(data)
    .then()
    .catch(err => console.error('Error saving invoice: ', err));
}

function _isValidClient(client) {
  return client;
}

function _addDbTrackingData(data) {
  return {
    _createdByUid: authUser.uid,
    _updatedAt: serverTimestamp(),
    ...data,
  };
}

export { dbSaveInvoice, dbGetInvoices, dbDeleteInvoice, dbSaveContact };

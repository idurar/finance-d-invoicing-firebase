'use strict';

//TODO

import {db} from "./initializeFirebaseServices";

const usersRef = db.collection('users');

function createUserDB() {
  usersRef.add({
    name: 'Alex',
  })
    .then(function(docRef) {
      console.log('Document written with ID: ', docRef.id);
    })
    .catch(function(error) {
      console.error('Error adding document: ', error);
    });
}

export { createUserDB };

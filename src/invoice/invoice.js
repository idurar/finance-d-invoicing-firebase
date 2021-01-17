"use strict";

import { clientName } from "./client-name";

export const invoice = {
  clientName,

  save: () => {
    const name = clientName.get();
    console.log(name);
  },

  registerEventListeners() {
    clientName.registerEvents();
  },
};

console.log(clientName);

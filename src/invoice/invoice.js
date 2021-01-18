"use strict";

import { clientName } from "./clientName";

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

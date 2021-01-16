'use strict';

export const clientName = {
  input: document.getElementById('client-name'),

  get() {
    return clientName.input.value;
  },
  set(value) {
    clientName.input.value = value;
  },

  reformat(name) {
    if (name) {
      name = name.charAt(0).toUpperCase() + name.slice(1);
      name = name.replace(/\s+/g, ' ');
      clientName.set(name);
      return name;
    }
  },

  registerEvents() {
    clientName.input.onchange = e => clientName.reformat(e.target.value);
  },
};


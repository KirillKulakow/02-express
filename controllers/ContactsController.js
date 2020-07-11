const contactsReposotiry = require('../repositories/contacts');
const { v4: uuidv4 } = require('uuid');

class ContactsController {
  listContacts () {
    return contactsReposotiry.getContacts();
  }

  getById (id) {
    return contactsReposotiry.getContact(id);
  }

  addContact (id, data) {
    return contactsReposotiry.addContact(id, data);
  }

  validateContact (id) {
    const contact = contactsReposotiry.getContact(id);
    return !!contact
  }

  updateContact(id, data) {
    return contactsReposotiry.updateContact(id, data);
  }

  removeContact (id) {
    return contactsReposotiry.deleteContact(id);
  }
}

module.exports = ContactsController;

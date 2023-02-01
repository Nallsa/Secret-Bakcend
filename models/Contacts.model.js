const mongoose = require('mongoose');

const contactsSchema = mongoose.Schema({
  name: String,
  e_mail: String,
  phone: String,
  message: String,
});

const Contacts = mongoose.model('Contacts', contactsSchema);

module.exports = Contacts;

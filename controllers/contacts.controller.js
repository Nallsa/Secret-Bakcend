const Contacts = require('../models/Contacts.model');

module.exports.contactsController = {
  getAllContacts: async (req, res) => {
    try {
      const contactsGet = await Contacts.find();
      res.json(contactsGet);
    } catch (e) {
      console.log(e);
    }
  },
  postContacts: async (req, res) => {
    try {
      const { name, e_mail, phone, message } = req.body;
      const contactsPost = await Contacts.create({
        name,
        e_mail,
        phone,
        message,
      });
      res.json(contactsPost);
    } catch (e) {
      res.status(400).json(e.toString());
    }
  },
  delContacts: async (req, res) => {
    try {
      const contactsDel = await Contacts.findByIdAndDelete(req.params.id);
      res.json(contactsDel);
    } catch (e) {
      console.log(e);
    }
  },
};

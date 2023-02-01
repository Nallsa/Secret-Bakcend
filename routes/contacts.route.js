const { Router } = require('express');
const { contactsController } = require('../controllers/contacts.controller');

const router = Router();

router.get('/contacts', contactsController.getAllContacts);
router.post('/contacts', contactsController.postContacts);
router.delete('/contacts/:id', contactsController.delContacts);

module.exports = router;

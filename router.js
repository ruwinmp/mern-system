const express = require('express');
const router = express.Router();
const controller = require('./controller');

router.get('/GetUsers', controller.getUsers);
router.post('/SaveUser', controller.addUser);
router.put('/UpdateUser', controller.updateUser);
router.delete('/DeleteUser', controller.deleteUser);

module.exports = router;
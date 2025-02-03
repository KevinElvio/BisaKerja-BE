const express = require('express');
// const accessValidation = require('../middleware/accessValidation');
const router = express.Router();
const UserController = require('../controller/UserController');

router.get('/', UserController.getAllUsers);
router.get('/:id', UserController.getUserById);
router.put('/:id', UserController.updateUser);

module.exports = router;
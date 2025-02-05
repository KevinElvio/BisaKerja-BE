const express = require('express');
const router = express.Router();
const UserController = require('../controller/UserController');
const accessValidation = require('../middleware/accessValidation');
const userValidation = require('../middleware/userValidation');

router.get('/', UserController.getAllUsers);
router.get('/:id',accessValidation, userValidation, UserController.getUserById);
router.put('/:id',accessValidation, UserController.updateUser);
router.delete('/:id',accessValidation, UserController.deleteUser);

module.exports = router;
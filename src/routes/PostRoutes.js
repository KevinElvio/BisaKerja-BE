const express = require('express');
const router = express.Router();
const accessValidation = require('../middleware/accessValidation');
const PostController = require('../controller/PostController');

router.post('/user/:id', accessValidation, PostController.createPost);

module.exports = router;
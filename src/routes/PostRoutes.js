const express = require('express');
const router = express.Router();
const accessValidation = require('../middleware/accessValidation');
const PostController = require('../controller/PostController');

router.get('/', PostController.ReadPost);
router.post('/user/:id', accessValidation, PostController.CreatePost);

module.exports = router;
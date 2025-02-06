const express = require('express');
const router = express.Router();
const accessValidation = require('../middleware/accessValidation');
const PostController = require('../controller/PostController');

router.get('/', PostController.ReadPost);
router.get('/user/:id', accessValidation, PostController.readUserPostById);
router.get('/:idPost/user/:id', accessValidation, PostController.readPostById);
router.post('/user/:id', accessValidation, PostController.CreatePost);

module.exports = router;
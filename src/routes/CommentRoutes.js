const express = require('express');
const router = express.Router();
const accessValidation = require('../middleware/accessValidation');
const CommentController = require('../controller/CommentController');

router.post("/post/:id", accessValidation, CommentController.createComment);
router.get("/", CommentController.readAllComment);
router.get("/post/:id", CommentController.readComment);

module.exports = router;
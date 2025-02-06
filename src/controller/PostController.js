const PostModel = require('../models/PostModel');

const CreatePost = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    const { image, caption } = req.body;
    try {
        if (id != tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        const data = {
            image,
            caption,
            authorId: parseInt(id)
        }
        const post = await PostModel.createPost(data);
        res.status(201).json({
            status: 'success',
            message: 'Post created successfully',
            data: post
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const ReadPost = async (req, res) => {
    try {
        const posts = await PostModel.readPost();
        res.status(200).json({
            status: 'success',
            message: 'Posts retrieved successfully',
            data: posts
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const readUserPostById = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    try {
        if (id != tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        const post = await PostModel.readUserPostById(id);
        if (!post) {
            return res.status(404).json({
                status: 'failed',
                message: 'Post not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Post retrieved successfully',
            data: post
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const readPostById = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id, idPost } = req.params;
    try {
        if (id != tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        const post = await PostModel.readPostById(id, idPost);
        if (!post) {
            return res.status(404).json({
                status: 'failed',
                message: 'Post not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'Post retrieved successfully',
            data: post
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message

        });
    }
}

module.exports = {
    CreatePost,
    ReadPost,
    readUserPostById,
    readPostById
}
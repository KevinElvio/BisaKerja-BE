const PostModel = require('../models/PostModel');

const createPost = async (req, res) => {
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
        console.log(data);
        const post = await PostModel.createPost(
            {
                data: {
                    image,
                    caption,
                    authorId: parseInt(id)
                }
            }
        );
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

module.exports = {
    createPost
}
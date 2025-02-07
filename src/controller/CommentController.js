const commentModel = require('../models/CommentModel');
const { connect } = require('../routes/CommentRoutes');
const PostModel = require('../models/PostModel')

const createComment = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    const { comment } = req.body;
    try {
        if (!tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }

        const data = {
            comment,
            authorId: tokenUserId,
            postId: parseInt(id)
        };
        

        const newComment = await commentModel.createComment(data);

        if(newComment){
            await PostModel.incrementCommentCount(parseInt(id));
        }

        res.status(201).json({
            status: 'success',
            message: 'Comment created successfully',
            data: {
                id: newComment.id,
                comment: newComment.comment,
                postId: newComment.postId,
                authorId: newComment.authorId,
                createdAt: newComment.createdAt,
                updatedAt: newComment.updatedAt
            }
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
    createComment
}
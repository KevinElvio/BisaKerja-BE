const { connect } = require('../routes/CommentRoutes');
const commentModel = require('../models/CommentModel');
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

        if (newComment) {
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

const readAllComment = async (req, res) => {
    try {
        const data = await commentModel.readAllComment()
        if (data.length == 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Data not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Comment read successfully',
            data: data
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const readComment = async (req, res) => {
    const { id } = req.params;
    try {
        const data = await commentModel.readComment(id);
        if (data.length == 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Data not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Comment read successfully',
            data: data

        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const readCommentSpec = async (req, res) => {
    const { id, idPost } = req.params;
    try {
        const data = await commentModel.readCommentSpec(id, idPost);
        if (data.length == 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Data not found'
            })
        }
        res.status(200).json({
            status: 'success',
            message: 'Comment read successfully',
            data: data

        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const updateComment = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id, idPost } = req.params;
    const {comment} = req.body;
    try {
        const data = {
            comment
        };
        if (!tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        if (data.length == 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Data not found'
            })
        }
        
        
        const newComment = await commentModel.updateComment(id, idPost, data);
        res.status(200).json({
            status: 'success',
            message: 'Comment update successfully',
            data: newComment

        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

const deleteComment = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id, idPost } = req.params;
    try {
        if (!tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        
        await commentModel.deleteComment(id, idPost);
        res.status(200).json({
            status: 'success',
            message: 'Comment delete successfully'

        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: 'Bad request',
            serverMessage: error.message
        });
    }
}

module.exports = {
    createComment,
    readAllComment,
    readComment,
    readCommentSpec,
    updateComment,
    deleteComment
}
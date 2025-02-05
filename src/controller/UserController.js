const UsersModel = require('../models/UserModel');

const getAllUsers = async (req, res) => {
    try {
        const users = await UsersModel.getAllUsers();
        if (users.length === 0) {
            return res.status(404).json({
                status: 'failed',
                message: 'User not found'
            });
        }
        res.status(200).json({
            status: 'success',
            message: 'User retrieved successfully',
            data: users
        });
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

const getUserById = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    try {
        if (id != tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }

        const user = await UsersModel.getUserById(id)
        if (user === null) {
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            })
        }
        else {
            res.status(200).json({
                status: 'success',
                message: 'User retrieved successfully',
                data: user
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        })
    }
}

const updateUser = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    const data = req.body;
    const { username, email, password, image } = data;
    try {
        if (id != tokenUserId) {
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        const user = await UsersModel.getUserById(id);
        if (user === null) {
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            })
        }
        else if (username === user.username) {
            res.status(400).json({
                status: 'failed',
                message: 'Username already exists'
            })
        }
        else if (email === user.email) {
            res.status(400).json({
                status: 'failed',
                message: 'Email already exists'
            })
        }
        else if (password === user.name) {
            res.status(400).json({
                status: 'failed',
                message: 'Password already exists'
            })
        }
        else if (image === user.image) {
            res.status(400).json({
                status: 'failed',
                message: 'Image already exists'
            })
        }
        else {
            const updatedUser = await UsersModel.updateUser(id, data);
            res.status(200).json({
                status: 'success',
                message: 'User updated successfully',
                data: updatedUser
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        })
    }
}

const deleteUser = async (req, res) => {
    const tokenUserId = req.userData.data.id;
    const { id } = req.params;
    try {
        if(id != tokenUserId){
            return res.status(403).json({
                status: 'failed',
                message: 'You do not have permission to access this resource'
            });
        }
        const user = await UsersModel.getUserById(id);
        if (user === null) {
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            })
        }
        else {
            await UsersModel.deleteUser(id);
            res.status(200).json({
                status: 'success',
                message: 'User deleted successfully',
            })
        }
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        })
    }
}



module.exports = {
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
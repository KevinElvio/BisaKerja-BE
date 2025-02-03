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
    const { id } = req.params;
    try {
        const user = await UsersModel.getUserById(id)
        if(user === null){
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            }) 
        }
        else{
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
    const { id } = req.params;
    const data = req.body;
    try {
        const user = await UsersModel.getUserById(id);
        if (user === null) {
            res.status(404).json({
                status: 'failed',
                message: 'User not found',
            })
        } else {
            const updatedUser = await UsersModel.updateUser(id, data);
            if (data.name === user.name)
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


module.exports = {
    getAllUsers,
    getUserById,
    updateUser
}
const UsersModel = require('../models/UserModel');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');

const register = async (req, res) => {
    try {
        const user = await UsersModel.createUser(req.body);
        res.status(201).json({
            status: 'success',
            message: 'User register successfully',
            data: user
        })
    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad Request",
            serverMessage: error.message
        });
    }
}

const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        const user = await UsersModel.findUserByEmail( {email} );
        if (user.length === 0) {
            res.status(404).json({
                status: 'failed',
                message: 'Credentials not found'
            });
            return;
        }

        const isPasswordValid = bcrypt.compareSync(password, user[0].password);

        if (!isPasswordValid) {
            return res.status(401).json({
                status: 'failed',
                message: 'Unauthorized'
            });
        }

        const payload = {
            data: user[0]
        };

        const secret = process.env.JWT_SECRET;

        const expiresIn = { expiresIn: '1h' };

        const token = jwt.sign(payload, secret, expiresIn);

        res.status(200).json({
            status: 'success',
            message: 'Login successfully',
            data : user,
            token: `Bearer | ${token}`
        });

    } catch (error) {
        res.status(400).json({
            status: 'failed',
            message: "Bad request",
            serverMessage: error.message
        });
    }
}

module.exports = {
    register,
    login
}
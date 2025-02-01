const UsersModel = require('../models/UserModel');
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
        res.status(500).json({
            status: 'failed',
            message: "Server Error",
            serverMessage: error.message
        });
    }
}

const login = async (req, res) => {
    const { email, password_hash } = req.body;

    try {
        const [user] = await UsersModel.findUserByEmail({ email });
        console.log(user);
        if (user.length === 0) {
            res.status(404).json({
                message: 'Login Failed'
            });
            return;
        }

        const isPasswordValid = bcrypt.compareSync(password_hash, user[0].password_hash);

        if (!isPasswordValid) {
            return res.status(401).json({
                message: 'Login Failed'
            });
        }

        const last_login = new Date();
        await UsersModel.lastLogin({ last_login}, user[0].user_id );

        const payload = {
            data: user[0]
        };

        const secret = process.env.JWT_SECRET;

        const expiresIn = { expiresIn: '1h' };

        const token = jwt.sign(payload, secret, expiresIn);

        res.status(200).json({
            message: 'Login Success',
            data : {
                user
            },
            token
        });

    } catch (error) {
        res.status(500).json({
            message: "Server Error",
            serverMessage: error.message
        });
    }
}

module.exports = {
    register,
    login
}
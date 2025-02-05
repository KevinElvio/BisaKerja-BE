const { PrismaClient } = require('@prisma/client');

const userValidation = (req, res, next) => {
    const userId = req.userData.userId;

    try {
        const user = prisma.user.findUnique({
            where: {
                id: userId
            }
        });

        if (!user) {
            return res.status(404).json({
                message: 'User not Found'
            });
        }

        next();
    } catch (error) {
        return res.status(500).json(
            {
                message: 'Internal Server Error', error: error.message
            }
        );
    }
}

module.exports = userValidation;    
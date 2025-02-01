const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const bcrypt = require('bcryptjs');


async function createUser(data) {
    const password_hash = bcrypt.hashSync(data.password, 10);
    data.password = password_hash;
    return await prisma.user.create({
        data
    });
}

async function findUserByEmail(data) {
    return await prisma.user.findMany({
        where: {
            email: data.email
        }
    });
}

module.exports = {
    createUser,
    findUserByEmail
}
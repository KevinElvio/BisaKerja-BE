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

async function getAllUsers() {
    return await prisma.user.findMany();
}

async function getUserById(id){
    return await prisma.user.findUnique({
        where: {
            id: parseInt(id)
        }
    });
}

async function updateUser(id, data){
    return await prisma.user.update({
        where: {
            id: parseInt(id)
        },
        data
    });
}

async function deleteUser(id){
    return await prisma.user.delete({
        where: {
            id: parseInt(id)
        }
    });
}

module.exports = {
    createUser,
    findUserByEmail,
    getAllUsers,
    getUserById,
    updateUser,
    deleteUser
}
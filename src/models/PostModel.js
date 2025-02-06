const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPost(data) {
    return await prisma.post.create({
        data
    });
}

async function readPost() {
    return await prisma.post.findMany();
}

async function readUserPostById(id) {
    return await prisma.post.findMany({
        where: {
            authorId: parseInt(id)
        }
    });
        
}

module.exports = {
    createPost,
    readPost,
    readUserPostById
}
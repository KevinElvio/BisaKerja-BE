const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createPost(data) {
    return await prisma.post.create({
        data
    });
}

module.exports = {
    createPost
}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createComment(data) {
    return await prisma.comment.create({
        data
    });
}

module.exports = {
    createComment
}
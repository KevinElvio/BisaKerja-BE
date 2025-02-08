const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function createComment(data) {
    return await prisma.comment.create({
        data
    });
}

async function readAllComment(){
    return await prisma.comment.findMany()
}

async function readComment(id) {
    return await prisma.comment.findMany({
        where : {
            postId : parseInt(id)
        }
    })
}

module.exports = {
    createComment,
    readAllComment,
    readComment
}
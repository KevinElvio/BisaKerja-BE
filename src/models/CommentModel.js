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

async function readCommentSpec(id, idPost){
    return await prisma.comment.findUnique({
        where : {
            id : parseInt(id),
            postId : parseInt(idPost)
        }
    })
}

async function updateComment(id, idPost, data){
    return await prisma.comment.update({
        where : {
            id : parseInt(id),
            postId : parseInt(idPost) 
        },
        data
    })
}

module.exports = {
    createComment,
    readAllComment,
    readComment,
    readCommentSpec,
    updateComment
}
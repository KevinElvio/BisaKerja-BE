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

async function readPostById(id, idPost) {
    return await prisma.post.findUnique({
        where: {
            id: parseInt (idPost),
            authorId: parseInt(id)
        }
    });

}

async function updatePostById(id, idPost, data){
    return await prisma.post.update({
        where:{
            id: parseInt (idPost),
            authorId: parseInt(id)
        },
        data
    })
}

async function deletePostById(id, idPost) {
    return await prisma.post.delete({
        where: {
            id: parseInt(idPost),
            authorId: parseInt(id)
        }
    })
}

async function incrementCommentCount(postId) {
    return await prisma.post.update({
        where: {
            id: postId
        },
        data: {
            commentCount: {
                increment: 1
            }
        }
    });
}



module.exports = {
    createPost,
    readPost,
    readUserPostById,
    readPostById,
    updatePostById,
    deletePostById,
    incrementCommentCount
}
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function readJob() {
    return await prisma.job.findMany()
}

module.exports = {
    readJob
}
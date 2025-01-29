const express = require('express');
const { PrismaClient } = require ('@prisma/client');
// const accessValidation = require('../middleware/accessValidation');
const router = express.Router();
const prisma = new PrismaClient()

router.get('/', (req, res) => {
  res.send('Hello World');
});

router.get('/user', async (req, res) => {
  const user = await prisma.user.findMany()

  res.send(user);
});

module.exports = router;
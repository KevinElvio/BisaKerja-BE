const express = require('express');
const router = express.Router();
const JobController = require('../controller/JobController')


router.get('/', JobController.readJob)

module.exports = router;
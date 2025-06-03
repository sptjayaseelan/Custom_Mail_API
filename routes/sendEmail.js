const express = require('express');
const router = express.Router();

// middleware

const uploadFiles = require('../middleware/uploadFiles');

// controller import
const path = require('path');
const filename = path.basename(__filename);
const controllerName = filename.split('.')[0];
const Controller = require(`../controllers/${controllerName}`);

// routes
// router.post('/sendMail', uploadFiles.single('file'), Controller.sendEmail);
router.post('/', Controller.sendEmail);

module.exports = router;

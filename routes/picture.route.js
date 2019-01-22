const express = require('express');
const router = express.Router();

const picture_controller = require('../controllers/picture.controller');

// simple url check
router.get('/pictures/test', picture_controller.test);

module.exports = router;
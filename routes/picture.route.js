const express = require('express');
const router = express.Router();

const picture_controller = require('../controllers/picture.controller');
const multipart = require('connect-multiparty')()
// var _multerUpload = require('../config/multer');

// simple url check
// router.get('/pictures/test', picture_controller.test);

router.get('/pictures', picture_controller.get)
router.get('/pictures/:id', picture_controller.getOne)
router.post('/pictures', multipart, picture_controller.upload)

module.exports = router;
const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// simple url check
// router.get('/test', product_controller.test);
router.get('/:id', product_controller.product_details);
router.post('/create', product_controller.product_create);
router.put('/:id/update', product_controller.product_update)
router.delete('/:id/delete', product_controller.product_delete)

module.exports = router;
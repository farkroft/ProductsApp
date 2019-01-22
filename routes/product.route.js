const express = require('express');
const router = express.Router();

const product_controller = require('../controllers/product.controller');

// simple url check
router.get('/products/test', product_controller.test);
// all endpoints
router.get('/products/:id', product_controller.product_details);
router.post('/products', product_controller.product_create);
router.put('/products/:id', product_controller.product_update);
router.delete('/products/:id', product_controller.product_delete);
router.get('/products', product_controller.product_getAll);

module.exports = router;
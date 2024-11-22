const express = require('express');
const router = express.Router();
const productControllers = require('../Controllers/productController');
const productMiddlewares = require('../middlewares/productMiddleware');


router.post('/product-create', productMiddlewares.middlewareCreateProduct, productControllers.createNewProduct);

router.get('/product-list', productControllers.getAllProduct);

router.get('/product-getbyid/:id', productControllers.getProductById);

router.put('/product-update/:id', productMiddlewares.middlewareUpdateProduct, productControllers.updateProductById);

router.delete('/product-delete/:id', productMiddlewares.middlewareDeleteProduct, productControllers.deleteProductById);



module.exports = router;














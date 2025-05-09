const router = require('express').Router();
const producto_controller = require('../src/controller/producto_controller');

// Productos Catalogo

router.get('/productos',  producto_controller.getAllProducts);


// Agregar producto

router.post('/agregar_producto', producto_controller.createProduct);


module.exports = router;
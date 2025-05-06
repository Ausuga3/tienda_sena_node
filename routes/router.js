const router = require('express').Router();
const producto_controller = require('../src/controller/producto_controller');

// Productos Catalogo

router.get('/productos',  producto_controller.getAllProducts);

module.exports = router;
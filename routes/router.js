const express = require('express')
const router = express.Router();
const { connection } = require('mongoose');
const producto_controller = require('../src/controller/producto_controller');

// Ejemplo de ruta
router.get('/listar_productos_admin', producto_controller.listarProductosAdmin);

module.exports = router;


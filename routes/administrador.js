const express = require('express');
const router = express.Router();
const controller_usuarios = require('../src/controller/usuario_controller');

router.get('/agregar_usuario_admin', controller_usuarios.crearUsuario );
router.get('/listar_usuario_admin', controller_usuarios.listarUsuarios); 

module.exports = router;
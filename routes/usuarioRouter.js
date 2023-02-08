// rutas para usuario
const express = require('express');
const router = express.Router();
const usuarioController = require('../controllers/usuarioController');

// api/usuario
router.post('/', usuarioController.crearUsuario);
router.get('/', usuarioController.obtenerUsuario);
router.put('/:id', usuarioController.actualizarUsuario);
router.get('/:id', usuarioController.obtenerUnUsuario);
router.delete('/:id', usuarioController.eliminarUsuario);


module.exports = router;
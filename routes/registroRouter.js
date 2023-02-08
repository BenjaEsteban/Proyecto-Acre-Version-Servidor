const express = require('express');
const router = express.Router();
const registroController = require('../controllers/registroController');

// api/registro
router.post('/', registroController.crearRegistro);
router.get('/', registroController.obtenerRegistro);
router.put('/:id', registroController.actualizarRegistro);
router.get('/:id', registroController.obtenerUnRegistro);
router.delete('/:id', registroController.eliminarRegistro);


module.exports = router;
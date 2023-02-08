// rutas para unidad
const express = require('express');
const router = express.Router();
const unidadController = require('../controllers/unidadController');

// api/unidad
router.post('/', unidadController.crearUnidad);
router.get('/', unidadController.obtenerUnidad);
router.put('/:id', unidadController.actualizarUnidad);
router.get('/:id', unidadController.obtenerUnUnidad);
router.delete('/:id', unidadController.eliminarUnidad);


module.exports = router;
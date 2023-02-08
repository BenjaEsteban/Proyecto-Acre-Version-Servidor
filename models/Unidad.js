const mongoose = require('mongoose');

const UnidadSchema = mongoose.Schema({
    nombre: {
        type: String,
        required: true
    },
    informacion: {
        type: String,
        required: true
    },
    fechaCreacion: {
        type: Date,
        default: Date.now()
    }
});

module.exports = mongoose.model('Unidad', UnidadSchema);
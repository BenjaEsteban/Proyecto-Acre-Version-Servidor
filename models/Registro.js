const mongoose = require('mongoose');

const RegistroSchema = mongoose.Schema({
    tipo: {
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

module.exports = mongoose.model('Registro', RegistroSchema);
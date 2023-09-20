
const mongoose = require('mongoose');

const videojuegoSchema = mongoose.Schema({
    nombrevideojuego: {
        type: String,
        required: [true, 'El campo nombre es obligatorio']
    },
    categoria: {
        type: String,
        required: [true, 'El campo categoria es obligatorio']
    },
    nombreplataforma: {
        type: String,
        required: [true, 'El campo plataforma es obligatorio']
    }
 
});

module.exports = mongoose.model('viedojuegos', videojuegoSchema);

const express = require('express');
const productoSchema = require('../models/videojuegos'); // Cambio de "usuarios" a "productos"

// Constructor
const router = express.Router();

// Crear producto
router.post('/videojuegos', (req, res) => { // Cambio de "/usuarios" a "/productos"
    const producto = new productoSchema(req.body); // Cambio de "usuarioSchema" a "productoSchema"
    producto
        .save()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener todos los productos
router.get('/videojuegos', (req, res) => { // Cambio de "/usuarios" a "/productos"
    productoSchema
        .find()
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Obtener un producto
router.get('/videojuegos/:id', (req, res) => { // Cambio de "/usuarios" a "/productos"
    const { id } = req.params;
    productoSchema
        .findById(id)
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Actualizar un producto
router.put('/videojuegos/:id', (req, res) => { // Cambio de "/usuarios" a "/productos"
    const { id } = req.params;
    const { nombrevideojuego, categoria,  nombreplataforma } = req.body;
    productoSchema
        .updateOne({ _id: id }, { $set: { nombrevideojuego, categoria,  nombreplataforma } })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

// Eliminar un producto
router.delete('/videojuegos/:id', (req, res) => { // Cambio de "/usuarios" a "/productos"
    const { id } = req.params;
    productoSchema
        .deleteOne({ _id: id })
        .then((data) => res.json(data))
        .catch((error) => res.json({ message: error }));
});

module.exports = router;

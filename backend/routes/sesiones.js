const express = require('express');
const router = express.Router();
const Sesion = require('../models/Sesion');

// GET /api/sesiones -> todas las sesiones, incluyendo los datos del entrenador
router.get('/', async (req, res) => {
  try {
    const sesiones = await Sesion.find().populate('entrenador');
    res.json(sesiones);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// POST /api/sesiones -> crear una sesión nueva
router.post('/', async (req, res) => {
  try {
    const nuevaSesion = new Sesion({
      nombre: req.body.nombre,
      tipo: req.body.tipo,
      entrenador: req.body.entrenador, // aquí se pasa el ID del entrenador
      horario: req.body.horario,
      ubicacion: req.body.ubicacion,
      precio: req.body.precio
    });
    const guardada = await nuevaSesion.save();
    res.status(201).json(guardada);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// PUT /api/sesiones/:id -> actualizar una sesión
router.put('/:id', async (req, res) => {
  try {
    const actualizada = await Sesion.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizada);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// DELETE /api/sesiones/:id -> borrar una sesión
router.delete('/:id', async (req, res) => {
  try {
    await Sesion.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Sesión borrada' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

module.exports = router;
const express = require('express');
const router = express.Router();
const Entrenador = require('../models/Entrenador');

// GET /api/entrenadores -> todos los entrenadores
router.get('/', async (req, res) => {
  try {
    const entrenadores = await Entrenador.find();
    res.json(entrenadores);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// POST /api/entrenadores -> crear un entrenador nuevo
router.post('/', async (req, res) => {
  try {
    const nuevoEntrenador = new Entrenador({
      nombre: req.body.nombre,
      curriculum: req.body.curriculum,
      especialidad: req.body.especialidad
    });
    const guardado = await nuevoEntrenador.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// PUT /api/entrenadores/:id -> actualizar un entrenador
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Entrenador.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// DELETE /api/entrenadores/:id -> borrar un entrenador
router.delete('/:id', async (req, res) => {
  try {
    await Entrenador.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Entrenador borrado' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

module.exports = router;
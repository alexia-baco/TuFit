const express = require('express');
const router = express.Router();
const Contacto = require('../models/Contacto');

// GET /api/contactos -> todos los mensajes recibidos (para uso interno vuestro, no del público)
router.get('/', async (req, res) => {
  try {
    const contactos = await Contacto.find()
      .populate('sesion')
      .sort({ fechaEnvio: -1 }); // -1 = del más reciente al más antiguo
    res.json(contactos);
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

// POST /api/contactos -> crear un mensaje nuevo (esta la usará el formulario público de la web)
router.post('/', async (req, res) => {
  try {
    const nuevoContacto = new Contacto({
      nombreTutor: req.body.nombreTutor,
      telefono: req.body.telefono,
      email: req.body.email,
      nombreNino: req.body.nombreNino,
      edadNino: req.body.edadNino,
      sesion: req.body.sesion, // puede venir o no
      mensaje: req.body.mensaje
    });
    const guardado = await nuevoContacto.save();
    res.status(201).json(guardado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// PUT /api/contactos/:id -> por ejemplo, marcar como "atendido"
router.put('/:id', async (req, res) => {
  try {
    const actualizado = await Contacto.findByIdAndUpdate(req.params.id, req.body, { new: true });
    res.json(actualizado);
  } catch (error) {
    res.status(400).json({ mensaje: error.message });
  }
});

// DELETE /api/contactos/:id -> borrar un mensaje
router.delete('/:id', async (req, res) => {
  try {
    await Contacto.findByIdAndDelete(req.params.id);
    res.json({ mensaje: 'Contacto borrado' });
  } catch (error) {
    res.status(500).json({ mensaje: error.message });
  }
});

module.exports = router;
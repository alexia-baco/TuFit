const mongoose = require('mongoose');

const sesionSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true   // ej: "Fútbol iniciación 6-8 años"
  },
  tipo: {
    type: String,
    required: true   // ej: "Fútbol", "Preparación física"
  },
  entrenador: {
    type: mongoose.Schema.Types.ObjectId,  // Aquí no guardamos el nombre del entrenador,
    ref: 'Entrenador',                     // guardamos su ID, y "referenciamos" a qué modelo pertenece
    required: true
  },
  horario: {
    type: String,
    required: true   // ej: "Martes y jueves, 17:00-18:00"
  },
  ubicacion: {
    type: String,
    required: true
  },
  precio: {
    type: Number,
    required: true
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Sesion', sesionSchema);
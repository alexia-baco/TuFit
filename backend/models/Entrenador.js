const mongoose = require('mongoose');

const entrenadorSchema = new mongoose.Schema({
  nombre: {
    type: String,
    required: true
  },
  curriculum: {
    type: String,
    required: true   // breve descripción de su experiencia/formación
  },
  especialidad: {
    type: String      // ej: "Fútbol", "Preparación física"
  },
  fechaCreacion: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Entrenador', entrenadorSchema);
const mongoose = require('mongoose');

const contactoSchema = new mongoose.Schema({
  nombreTutor: {
    type: String,
    required: true
  },
  telefono: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  nombreNino: {
    type: String   // opcional: puede que aún no sepan a qué sesión apuntarse, y solo pregunten
  },
  edadNino: {
    type: Number
  },
  sesion: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Sesion'
    // sin "required: true" a propósito: si se manda, es una inscripción a esa sesión;
    // si no se manda, es una consulta general
  },
  mensaje: {
    type: String
  },
  atendido: {
    type: Boolean,
    default: false   // para marcar desde dentro cuándo ya se ha contactado con la familia
  },
  fechaEnvio: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Contacto', contactoSchema);
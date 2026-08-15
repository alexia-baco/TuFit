// Importamos las librerías que instalamos
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

// Creamos la aplicación de Express
const app = express();

// Middlewares: funciones que se ejecutan en cada petición, antes de llegar a las rutas
app.use(cors());
app.use(express.json());

// Conectamos con la base de datos
mongoose.connect(process.env.MONGODB_URI)
  .then(() => console.log('Conectado a MongoDB'))
  .catch((error) => console.error('Error al conectar:', error));

// Una ruta de prueba para comprobar que el servidor funciona
app.get('/', (req, res) => {
  res.send('El servidor está funcionando');
});

// Rutas de la API
const entrenadorRoutes = require('./routes/entrenadores');
const sesionRoutes = require('./routes/sesiones');
const contactoRoutes = require('./routes/contactos');
app.use('/api/entrenadores', entrenadorRoutes);
app.use('/api/sesiones', sesionRoutes);
app.use('/api/contactos', contactoRoutes);

// Arrancamos el servidor
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Servidor escuchando en http://localhost:${PORT}`);
});
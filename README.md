# TuFit 360 ⚽🏃‍♂️

<img width="1429" height="740" alt="image" src="https://github.com/user-attachments/assets/046ac183-32d6-418c-b4da-09a5aa248702" />

Página web para TuFit 360, un servicio de preparación física y entrenamiento de fútbol para niños y jóvenes deportistas. 

## 🌐 Sobre el proyecto

TuFit 360 ofrece sesiones de fuerza, velocidad, resistencia y prevención de lesiones para deportistas infantiles y juveniles, con entrenamientos supervisados en el Campo Municipal Vinyets-Molí-Vell.

La web incluye:
- Presentación de la marca y propuesta de valor (Inicio)
- Metodología y programas de entrenamiento, con sesiones cargadas en tiempo real desde la base de datos
- Tarifas con un carrusel interactivo de packs de precios
- Presentación del equipo, con datos cargados dinámicamente desde el backend
- Información de las instalaciones, con mapa integrado
- Contacto directo por WhatsApp y preguntas frecuentes

## 🛠️ Tecnologías

**Backend**
- Node.js + Express
- MongoDB Atlas + Mongoose
- API REST (entrenadores, sesiones, contactos)

**Frontend**
- HTML5, CSS3 (Grid, Flexbox, variables CSS, media queries)
- JavaScript (Fetch API, DOM dinámico)
- Diseño responsive con menú hamburguesa
- Tipografías: Bebas Neue + Poppins (Google Fonts)

**Herramientas**
- Thunder Client (pruebas de API)
- Git y GitHub

## 📂 Estructura del proyecto

TuFit/
├── backend/
│ ├── models/ # Esquemas de Mongoose (Entrenador, Sesion, Contacto)
│ ├── routes/ # Rutas de la API REST
│ ├── server.js # Punto de entrada del servidor
│ └── .env.example # Variables de entorno necesarias
└── frontend/
├── img/ # Logos y fotos
├── index.html # Inicio
├── servicios.html # Programas de Entrenamiento
├── tarifas.html # Packs y Precios
├── equipo.html # El Equipo Detrás de Tus Resultados
├── instalaciones.html # Dónde Entrenamos
├── contacto.html # TuFit Responde
├── style.css
└── script.js

## 🌐 Vista en Vivo
Puedes visitar la página web completamente funcional desplegada a través de GitHub Pages en el siguiente enlace:
👉 **[Visitar TuFit 360](https://alexia-baco.github.io/TuFit/frontend/)**


## 🚀 Cómo ejecutarlo en local

1. Clona el repositorio
```bash
   git clone https://github.com/alexia-baco/TuFit.git
   cd TuFit
```
2. Instala las dependencias del backend
```bash
   cd backend
   npm install
```
3. Crea un archivo `.env` dentro de `backend` con tu propia base de datos de MongoDB (usa `.env.example` como referencia):

MONGODB_URI=tu_cadena_de_conexion
PORT=3000

4. Arranca el servidor
```bash
   npm run dev
```
5. Abre `frontend/index.html` con la extensión Live Server de VS Code

## ✨ Funcionalidades destacadas

- API REST completa con relaciones entre colecciones (las sesiones están vinculadas a sus entrenadores mediante `populate`)
- Carga dinámica de contenido: las sesiones y el equipo se leen en tiempo real desde MongoDB, sin tocar el HTML
- Carrusel de tarjetas de precios construido con CSS y JavaScript puro, sin librerías externas
- Botón de contacto directo por WhatsApp con mensaje predefinido
- Menú de navegación responsive (hamburguesa en móvil)
- FAQ con acordeón nativo (`<details>`/`<summary>`)

## 👤 Autora
**Alexia Baco Olivares**

Estudiante del CFGS en Desarrollo de Aplicaciones Web (DAW) y desarrolladora apasionada por el frontend y el backend. Actualmente en búsqueda activa de oportunidades y primeras experiencias como Junior Web Developer en el área de Barcelona para seguir creciendo profesionalmente en el sector tecnológico.

- LinkedIn: https://www.linkedin.com/in/alexiabaco/

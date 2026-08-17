const API_URL = 'https://tufit-backend-xxxx.onrender.com/api';

// ----- Sesiones (solo actúa si la página tiene #lista-sesiones, como servicios.html) -----
const listaSesiones = document.getElementById('lista-sesiones');

if (listaSesiones) {
  cargarSesiones();
}

async function cargarSesiones() {
  try {
    const respuesta = await fetch(`${API_URL}/sesiones`);
    const sesiones = await respuesta.json();

    listaSesiones.innerHTML = '';

    sesiones.forEach((sesion) => {
      const div = document.createElement('div');
      div.classList.add('tarjeta-sesion');
      div.innerHTML = `
        <h3>${sesion.nombre}</h3>
        <p><strong>Tipo:</strong> ${sesion.tipo}</p>
        <p><strong>Horario:</strong> ${sesion.horario}</p>
        <p><strong>Ubicación:</strong> ${sesion.ubicacion}</p>
        <p><strong>Precio:</strong> ${sesion.precio}€</p>
        <p><strong>Entrenador:</strong> ${sesion.entrenador.nombre}</p>
      `;
      listaSesiones.appendChild(div);
    });
  } catch (error) {
    listaSesiones.innerHTML = '<p>No se han podido cargar las sesiones.</p>';
    console.error(error);
  }
}

// ----- Botón/es de WhatsApp -----
const botonesWhatsapp = document.querySelectorAll('.enlace-whatsapp');

if (botonesWhatsapp.length > 0) {
  const NUMERO_WHATSAPP = '34684398832';

  const mensaje =
    'Hola, me gustaría más información sobre las sesiones de TuFit 360.\n' +
    'Nombre del niño/a: \n' +
    'Edad: \n' +
    'Sesión de interés: ';

  const enlaceCompleto = `https://wa.me/${NUMERO_WHATSAPP}?text=${encodeURIComponent(mensaje)}`;

  botonesWhatsapp.forEach((boton) => {
    boton.href = enlaceCompleto;
  });
}

// ----- Carrusel de precios (solo actúa si existe en la página, como tarifas.html) -----
const carruselTrack = document.getElementById('carrusel-track');

if (carruselTrack) {
  const tarjetas = carruselTrack.children;
  const flechaAnterior = document.getElementById('flecha-anterior');
  const flechaSiguiente = document.getElementById('flecha-siguiente');
  let indiceActual = 0;

  function actualizarCarrusel() {
    carruselTrack.style.transform = `translateX(-${indiceActual * 100}%)`;
    flechaAnterior.disabled = indiceActual === 0;
    flechaSiguiente.disabled = indiceActual === tarjetas.length - 1;
  }

  flechaAnterior.addEventListener('click', () => {
    if (indiceActual > 0) {
      indiceActual--;
      actualizarCarrusel();
    }
  });

  flechaSiguiente.addEventListener('click', () => {
    if (indiceActual < tarjetas.length - 1) {
      indiceActual++;
      actualizarCarrusel();
    }
  });

  actualizarCarrusel();
}

// ----- Equipo (solo actúa si la página tiene #lista-entrenadores, como equipo.html) -----
const listaEntrenadores = document.getElementById('lista-entrenadores');

if (listaEntrenadores) {
  cargarEntrenadores();
}

async function cargarEntrenadores() {
  try {
    const respuesta = await fetch(`${API_URL}/entrenadores`);
    const entrenadores = await respuesta.json();

    listaEntrenadores.innerHTML = '';

    entrenadores.forEach((entrenador) => {
      const especialidades = entrenador.especialidad
        ? entrenador.especialidad.split(',').map((e) => e.trim())
        : [];

      const div = document.createElement('div');
      div.classList.add('perfil-entrenador');
      div.innerHTML = `
        <img src="img/marco-neves.jpg" alt="${entrenador.nombre}" class="foto-entrenador">
        <div class="texto-entrenador">
          <h2>${entrenador.nombre}</h2>
          <p class="cargo-entrenador">Director de Rendimiento</p>
          <p>${entrenador.curriculum}</p>
          ${especialidades.length > 0 ? `
            <p class="titulo-especialidades">Especialidades:</p>
            <ul class="lista-especialidades">
              ${especialidades.map((e) => `<li>${e}</li>`).join('')}
            </ul>
          ` : ''}
        </div>
      `;
      listaEntrenadores.appendChild(div);
    });
  } catch (error) {
    listaEntrenadores.innerHTML = '<p>No se ha podido cargar el equipo.</p>';
    console.error(error);
  }
}

// ----- Menú hamburguesa (móvil) -----
const botonMenu = document.getElementById('boton-menu');
const menuNav = document.getElementById('menu-nav');

if (botonMenu && menuNav) {
  botonMenu.addEventListener('click', () => {
    menuNav.classList.toggle('abierto');
  });
}
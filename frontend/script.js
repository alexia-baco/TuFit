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
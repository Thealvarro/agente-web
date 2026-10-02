// Menú del celular: abre y cierra con el botón, con un link o con la tecla Esc.
const botonMenu = document.querySelector('.menu-boton');
const menu = document.getElementById('menu');

if (botonMenu && menu) {
  const cerrarMenu = () => {
    botonMenu.setAttribute('aria-expanded', 'false');
    botonMenu.setAttribute('aria-label', 'Abrir menú');
    menu.classList.remove('menu--abierto');
  };

  botonMenu.addEventListener('click', () => {
    if (botonMenu.getAttribute('aria-expanded') === 'true') {
      cerrarMenu();
      return;
    }
    botonMenu.setAttribute('aria-expanded', 'true');
    botonMenu.setAttribute('aria-label', 'Cerrar menú');
    menu.classList.add('menu--abierto');
  });

  menu.addEventListener('click', (evento) => {
    if (evento.target.closest('a')) cerrarMenu();
  });

  document.addEventListener('keydown', (evento) => {
    if (evento.key === 'Escape' && botonMenu.getAttribute('aria-expanded') === 'true') {
      cerrarMenu();
      botonMenu.focus();
    }
  });
}

// Aparición suave al bajar. Solo oculta lo que todavía no se ve,
// así la página se lee completa aunque este archivo no cargue.
const sinMovimiento = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

if (!sinMovimiento && 'IntersectionObserver' in window) {
  const observador = new IntersectionObserver((entradas) => {
    for (const entrada of entradas) {
      if (entrada.isIntersecting) {
        entrada.target.classList.remove('oculto');
        observador.unobserve(entrada.target);
      }
    }
  }, { rootMargin: '0px 0px -10% 0px' });

  for (const elemento of document.querySelectorAll('.aparece')) {
    if (elemento.getBoundingClientRect().top > window.innerHeight) {
      elemento.classList.add('oculto');
      observador.observe(elemento);
    }
  }
}

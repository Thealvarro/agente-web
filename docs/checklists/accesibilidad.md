# Checklist de accesibilidad

Revísalo completo en la fase 5, antes de mostrarle la página al usuario. Corrige lo que falle; no le muestres la lista.

- [ ] `<html lang="es">` (o el idioma de la página).
- [ ] Un solo `<h1>` (el nombre o la frase de la portada) y títulos en orden: `h2` para secciones, `h3` dentro de ellas, sin saltos.
- [ ] Contraste: texto normal al menos 4.5:1 sobre su fondo; textos grandes y bordes de botones, al menos 3:1. Revisa también el texto sobre fotos.
- [ ] Toda imagen con contenido tiene un `alt` que la describe ("Corte degradé con diseño"). Las decorativas llevan `alt=""`.
- [ ] Los botones y links dicen qué hacen: "Escríbenos por WhatsApp", no "Clic aquí". Los que son solo un ícono llevan `aria-label`.
- [ ] Todo lo que se toca mide al menos 44 × 44 px en celular, con espacio entre botones.
- [ ] El texto del cuerpo mide al menos 16 px y las líneas no pasan de unos 75 caracteres.
- [ ] Se puede navegar con la tecla Tab: el foco se ve siempre, y el menú del celular se abre, se recorre y se cierra con teclado (también con Esc).
- [ ] La información no depende solo del color (por ejemplo, el horario de hoy también va en texto).
- [ ] El mapa (`iframe`) tiene `title`, por ejemplo "Mapa de ubicación de Barbería Don Lucho".
- [ ] Las animaciones respetan `prefers-reduced-motion`: si el usuario las desactivó, no se mueve nada.
- [ ] Los links a WhatsApp, Instagram y otras webs que abren pestaña nueva llevan `target="_blank" rel="noopener noreferrer"`.

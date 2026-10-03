---
name: direccion-visual
description: Criterio de diseño para que la página se vea profesional y hecha a la medida, no como una plantilla ni "hecha con IA" - tipografía, espacios, jerarquía, color, composición de la portada y cómo lucirse sin fotos. Úsala en las fases 2 y 4 de Agente Web, y cada vez que el usuario diga que algo "se ve feo", "plano" o "genérico".
---

# Dirección visual

Los colores y las tipografías salen de `docs/guia-diseno.md` y de `sitio/diseno.md`. Esta skill es el **criterio** para usarlos bien. Todo se aplica en `sitio/estilos.css`, sobre las variables del bloque `:root`.

## Tipografía

- **Títulos grandes de verdad:** en la portada, el `h1` mide al menos el doble que el texto. La plantilla usa `clamp()`; súbelo si la portada no tiene foto.
- Títulos con interlineado apretado (1.05 a 1.2); texto con interlineado amplio (1.6).
- Texto de 16 a 18 px, con líneas de 65 a 75 caracteres como máximo (`max-width` en `ch` o `rem`).
- Letras angostas (Oswald, Bebas Neue, Barlow Condensed) en mayúsculas para títulos; las serif (Playfair, Fraunces, Lora) se ven mejor en minúsculas.
- Máximo tres tamaños de texto fuera de los títulos. Más tamaños se ven desordenados.

## Espacios

- Usa siempre la misma escala: 0.5, 0.75, 1, 1.5, 2, 3, 4 y 6 rem. Nada de valores sueltos como 13 px o 27 px.
- Más aire entre secciones que dentro de ellas. La plantilla ya separa las secciones con `clamp(4rem, 10vw, 7rem)`.
- Lo que está relacionado va junto: título y bajada cerca; secciones distintas, lejos.

## Jerarquía y color

- **Un foco por sección:** el título, o una foto, o un precio destacado. No todo a la vez.
- Regla 60-30-10: 60% fondo, 30% texto y superficies, 10% color principal. **El color principal es para acciones** (botones, links, precios clave). Si todo es naranjo, nada destaca.
- El acento es decorativo: líneas finas, detalles, numeraciones. Nunca para texto.

## La portada

Elige la composición según lo que haya:

| Hay | Composición |
|---|---|
| Una buena foto | Texto a un lado y foto al otro (la plantilla lo hace sola al agregar `.portada__foto`) |
| Una foto excelente y horizontal | Foto de fondo con una capa oscura encima y el texto en blanco; revisa el contraste |
| Sin fotos | Tipografía protagonista: `h1` enorme, una franja o bloque del color principal, y un detalle gráfico (ver abajo) |

## Cuando no hay fotos (que no quede "fea")

Una página sin fotos no tiene por qué verse vacía:

- **Tipografía como imagen:** el nombre o la frase de la portada en grande, con mucho aire.
- **Bloques de color:** una sección completa con fondo del color principal y texto en su color de botón, para cortar el ritmo.
- **Números y precios como protagonistas:** precios grandes en la tipografía de títulos; pasos numerados ("1. Escríbenos · 2. Reserva · 3. Ven").
- **Íconos simples propios:** SVG dibujados en el mismo HTML, de línea, del mismo grosor y en el color principal. Nada de librerías de íconos externas.
- **Texturas con CSS:** un patrón sutil (líneas, puntos) con `background-image: repeating-linear-gradient(...)` o `radial-gradient(...)` en `estilos.css`, muy suave.
- **Ofrece fotos:** dile al usuario que con fotos reales la página luce mucho más, y ofrécele imágenes de bancos gratis o generadas con IA (skill `imagenes-ia`).

## Detalles que elevan

- Bordes de 1 px con `--linea`, en vez de sombras fuertes.
- Si hay sombras, suaves y todas en la misma dirección.
- Los mismos radios en todo (`--radio` y `--radio-boton`); no mezcles esquinas rectas y redondeadas sin razón.
- Etiquetas pequeñas en mayúsculas con espacio entre letras (como `.etiqueta` de la plantilla) para ordenar secciones.
- Estados de los botones: al pasar el mouse, al apretar y con foco de teclado, todos visibles.

## Antes de dar por terminado

Pregúntate: **¿esta página podría ser de cualquier otro negocio cambiándole el nombre?** Si la respuesta es sí, le falta algo de este negocio: sus palabras, sus fotos, sus colores o un detalle de su rubro. Revisa también la lista "Lo que delata una página hecha con IA" de `docs/guia-diseno.md`.

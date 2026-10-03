---
name: revision-visual
description: Mira la página como la vería un cliente, en celular y en computador, y encuentra lo que se ve mal (textos cortados, espacios disparejos, botones que no se notan, fotos deformadas). Úsala en la fase 5 de Agente Web antes de mostrarle la página al usuario, y después de cada cambio grande.
---

# Revisión visual

Que el código esté bien no significa que la página se vea bien. Antes de mostrársela al usuario, **mírala tú**.

## Cómo sacar las capturas

Usa los mismos pasos de la skill `rendimiento`: servidor local, Lighthouse en celular y computador, y `node herramientas/capturas.mjs`. Quedan dos imágenes de la página completa:

- `revision/movil.jpg`: así se ve en un celular.
- `revision/computador.jpg`: así se ve en un computador.

Ábrelas y míralas con calma, de arriba hacia abajo.

## Qué buscar

**En el celular (lo más importante):**
- Nada se sale por el costado: ningún texto cortado ni scroll hacia el lado.
- El título de la portada se lee entero y el botón principal se ve sin bajar.
- Los botones se notan como botones y no quedan pegados entre sí.
- El botón flotante de WhatsApp no tapa nada importante.
- Las tarjetas, los precios y el horario se leen sin esfuerzo.

**En los dos tamaños:**
- Espacios parejos: la misma distancia entre secciones y entre tarjetas.
- Alineaciones: los bordes izquierdos coinciden y no hay elementos "flotando".
- Las fotos no se ven estiradas ni pixeladas, y no hay espacios vacíos donde iba una foto.
- El texto sobre fotos se lee: si no, una capa oscura o mover el texto.
- La página se ve como la muestra que eligió el usuario (`sitio/diseno.md`): sus colores, sus letras, su forma de botones.
- No hay secciones vacías ni textos de la plantilla sin cambiar ("Nombre del Negocio", "Calle 123", "$00.000").

**Para revisar el menú del celular**, abre `sitio/index.html` y comprueba en el código que el botón del menú, el menú y sus links existan y coincidan con las secciones.

## Después

Corrige lo que encuentres, vuelve a capturar y compara. Recién ahí muéstrale la página al usuario. No le muestres la lista de lo que corregiste, salvo que te lo pregunte.

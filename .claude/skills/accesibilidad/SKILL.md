---
name: accesibilidad
description: Revisa que la página la pueda usar cualquier persona, incluso con baja visión, con lector de pantalla o solo con teclado, y corrige lo que falle. Úsala en la fase 5 de Agente Web, junto con el checklist docs/checklists/accesibilidad.md.
---

# Accesibilidad

Una página accesible también es una página más clara para todos: mejor contraste, botones más fáciles de tocar y textos que se entienden. Además, Google la valora.

## Cómo revisar

1. Mide con Lighthouse en celular (pasos de la skill `rendimiento`). La meta es **100 en accesibilidad**. La lista "A mejorar" de `capturas.mjs` dice qué falla.
2. Recorre `docs/checklists/accesibilidad.md` completo, leyendo el código de `sitio/index.html` y `sitio/estilos.css`. Lighthouse no detecta todo.
3. Revisa a mano lo que ninguna herramienta ve bien:
   - **Contraste sobre fotos:** si hay texto encima de una imagen, asegura que se lea con una capa oscura (o clara) entre la foto y el texto.
   - **Textos de los links:** cada link dice adónde lleva. "Escríbenos por WhatsApp", no "Clic aquí".
   - **Textos alternativos:** describen lo que muestra la foto en su contexto ("Corte degradé con barba perfilada"), sin repetir "imagen de".
   - **Orden de los títulos:** un solo `h1`, luego `h2` por sección y `h3` dentro, sin saltos.

## Correcciones frecuentes

| Problema | Arreglo |
|---|---|
| Texto con poco contraste | Usa `--texto` en vez de `--texto-suave`, u oscurece el color hasta llegar a 4.5:1 |
| Botón que es solo un ícono | `aria-label` con lo que hace ("Abrir menú", "Escríbenos por WhatsApp") |
| Imagen sin `alt` | `alt` descriptivo, o `alt=""` si es solo decorativa |
| Link que abre pestaña nueva | `target="_blank" rel="noopener noreferrer"` |
| Elemento que no se puede tocar bien en celular | Mínimo 44 × 44 px, con espacio alrededor |
| Animación que no se puede desactivar | Respetar `prefers-reduced-motion` (la plantilla ya lo hace; no lo quites) |

## Sobre la plantilla

La plantilla ya trae lo difícil resuelto: el link "Saltar al contenido", el menú que se maneja con teclado y se cierra con Esc, el foco visible y el respeto por quienes desactivan las animaciones. Al construir, **no rompas eso**: no quites `aria-expanded`, `aria-controls` ni los estilos de `:focus-visible`.

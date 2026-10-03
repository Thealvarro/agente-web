---
name: muestras
description: Arma las propuestas visuales para que el usuario elija viendo, no imaginando - las 3 direcciones de diseño de la fase 2 (sitio/muestras.html) y, cuando duda entre versiones de una sección, 2 o 3 variantes lado a lado (sitio/variantes.html). Úsala en la fase 2 de Agente Web y en la fase 5 cuando el usuario no sabe cómo quiere una parte.
---

# Muestras y variantes

Alguien que no es diseñador no puede elegir entre descripciones. Tiene que **verlo**. Esta skill arma esas comparaciones.

## Las 3 direcciones (fase 2): `sitio/muestras.html`

Las reglas de contenido están en `docs/guia-diseno.md` (sección "Las muestras"). Para construirla bien:

- **Un solo archivo** que se abra con doble clic. Puede cargar las tipografías desde Google Fonts con un `<link>`: este archivo no se publica, así que no lo afecta la seguridad de `vercel.json`.
- Cada dirección en su propia caja, con **sus propias variables CSS** dentro de esa caja (`.muestra-a { --fondo: ...; }`), así cada una se ve exactamente como sería la página.
- Las tres con **el mismo contenido real**: el nombre del negocio, su frase y uno de sus servicios. Así el usuario compara diseño, no textos.
- En computador van lado a lado; en celular, una debajo de otra.
- Cada caja con su letra (A, B, C) y un nombre humano ("Cálida y clásica"), y los colores con etiquetas en palabras: "fondo", "texto", "botones", "detalles". Nunca códigos hex.
- Que sean **distintas de verdad**: cambia la temperatura de los colores, la tipografía y la forma de los botones entre una y otra.

Cuando el usuario elige, guarda la elección en `sitio/diseno.md` (ver la fase 2 de `CLAUDE.md`).

### Si pide una mezcla

"Los colores de A con las letras de B" es una respuesta válida. Arma la mezcla como una cuarta caja en el mismo archivo, muéstrala y pregunta si es esa.

## Variantes de una sección (fase 5): `sitio/variantes.html`

Si el usuario no sabe cómo quiere una parte ("la portada no me convence", "no sé cómo mostrar los precios"):

1. Arma 2 o 3 versiones **de esa sección sola**, con su diseño y su contenido reales, una debajo de la otra y con su letra.
2. Usa los mismos `estilos.css` y `fuentes/fuentes.css` de la página (`<link>` a esos archivos), más el CSS propio de cada variante.
3. Que las diferencias sean claras: otra composición, no solo otro tamaño.
4. Pregunta cuál le gusta y aplica esa en `sitio/index.html`.

`muestras.html` y `variantes.html` son archivos de trabajo: `.vercelignore` evita que se publiquen. No los borres; sirven si después quiere volver a ver las opciones.

# La plantilla

Es la base técnica de toda página de armatuweb: estructura, menú del celular, botón de WhatsApp, pie con el crédito y seguridad. **No es un diseño**: el aspecto visual sale de `sitio/diseno.md`.

## Archivos

| Archivo | Qué es |
|---|---|
| `index.html` | La página. Las secciones marcadas `OPCIONAL` se borran si no hay contenido real |
| `estilos.css` | El diseño. Solo cambias el bloque `:root` de arriba; el resto se ajusta solo |
| `app.js` | El menú del celular y la aparición suave al bajar. No necesita cambios |
| `vercel.json` | Las reglas de seguridad que Vercel aplica al publicar. No lo cambies sin una razón |
| `.vercelignore` | Lo que **no** se publica: las muestras, `diseno.md`, `resumen.md` y las referencias. Son archivos de trabajo |
| `imagenes/favicon.svg` | El iconito de la pestaña: la inicial del negocio sobre su color principal |

## Cómo se usa (fase 4)

1. Copia todos los archivos a `sitio/`, incluido `.vercelignore` y respetando `imagenes/`. Nunca edites la plantilla misma.
2. En `estilos.css`, reemplaza el bloque `:root` con los colores, tipografías y bordes de `sitio/diseno.md`.
3. En `index.html`, reemplaza todo lo marcado `CAMBIAR` con los datos de `sitio/resumen.md`:
   - el `<link>` de Google Fonts con las dos tipografías elegidas, solo los pesos que se usan, y siempre `&display=optional` al final;
   - el título, la descripción, `theme-color` y la ficha `application/ld+json`;
   - el número de WhatsApp en **todos** los links `wa.me` (son tres) y en los `tel:`.
4. Ordena las secciones según `docs/rubros.md`. Puedes agregar secciones copiando la estructura de una existente (`section.seccion` > `div.contenedor`), con su link en el menú.
5. Borra las secciones `OPCIONAL` que no tengan contenido real, y su link del menú.
6. En `favicon.svg`, cambia la letra y el color de fondo.
7. Si no hay ningún botón de WhatsApp en la página, borra también el botón flotante.

## Reglas para que funcione al publicarla

`vercel.json` bloquea todo código que no venga de los archivos de la página. Por eso, en `index.html`:

- **Nada de** `style="..."`, `onclick="..."` ni otros `on...="..."`: los estilos van en `estilos.css` y el comportamiento en `app.js`.
- **Nada de** `<script>` con código adentro. El único permitido es el de la ficha `application/ld+json`.
- Las fotos van en `sitio/imagenes/`. Si usas una de Unsplash o Pexels sin descargarla, el link debe empezar con `https://images.unsplash.com` o `https://images.pexels.com`.
- Los únicos recursos externos permitidos son Google Fonts, el mapa de Google y esas fotos.

Si la página se ve bien al abrirla con doble clic pero rota después de publicarla, revisa estas reglas primero.

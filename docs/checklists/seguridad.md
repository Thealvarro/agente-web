# Checklist de seguridad

Pásalo completo antes de publicar (fase 6). Si algo falla, corrígelo y cuéntale al usuario en una línea qué arreglaste.

## Secretos y datos

- [ ] Busca en `sitio/` palabras como `key`, `token`, `secret`, `password`, `sk_` y `pk_`. No debe haber claves, contraseñas ni tokens en ningún archivo.
- [ ] En la página solo hay datos que el dueño quiere publicar. Si atiende en su casa, pregúntale antes de poner la dirección exacta o el mapa.
- [ ] Nada de RUT, cuentas bancarias ni datos de clientes en la página.

## Links y recursos externos

- [ ] Todo link que abre pestaña nueva lleva `rel="noopener noreferrer"`.
- [ ] El único recurso externo es el mapa de Google (y fotos de Unsplash o Pexels, si no se descargaron). Las tipografías van dentro de la página. Sin scripts de terceros, sin widgets, sin píxeles de seguimiento.
- [ ] Los links de WhatsApp usan `https://wa.me/` con el número completo, código de país incluido.

## Formularios (solo si el usuario insistió en tener uno)

Por defecto la página no lleva formulario. Si el usuario lo pidió igual, todo esto es obligatorio antes de publicar:

- [ ] Protección contra bots (Cloudflare Turnstile o similar).
- [ ] Los datos se validan en un servidor, no solo en el navegador.
- [ ] Límite de envíos por persona, para que no lo usen para mandar spam.
- [ ] Aviso de privacidad visible junto al formulario: qué datos pide, para qué y por cuánto tiempo los guarda. En Chile lo exige la Ley 21.719 de protección de datos personales.
- [ ] Solo se piden los datos mínimos (por ejemplo, nombre y teléfono; nunca RUT).

Si no se puede cumplir todo, vuelve a los botones directos (WhatsApp, llamar, correo).

## Contenido honesto

- [ ] No hay reseñas, testimonios, cifras, premios ni años de experiencia inventados.
- [ ] Las fotos son del usuario o de bancos con licencia libre (Unsplash, Pexels).

## Publicación

- [ ] `sitio/vercel.json` existe y es igual al de `plantilla/` (salvo un cambio justificado).
- [ ] `sitio/.vercelignore` existe, así las muestras, `diseno.md`, `resumen.md` y las referencias no quedan publicadas.
- [ ] En `index.html` no hay `style="..."`, ni `on...="..."`, ni `<script>` con código (solo el de `application/ld+json`). Si los hay, al publicar la página se rompe.
- [ ] `sitio/` no contiene archivos `.env` ni carpetas que no son parte de la página.

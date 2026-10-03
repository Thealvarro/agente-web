---
name: publicar-vercel
description: Publica la página en internet con Vercel (gratis), con el nombre del negocio en la dirección, y la deja revisada - primera publicación, actualizaciones, dominio propio, estadísticas de visitas, volver a una versión anterior y problemas frecuentes. Úsala en la fase 6 de Agente Web y cada vez que el usuario quiera publicar cambios o conectar su dominio.
---

# Publicar en Vercel

Vercel es el servicio gratis donde va a vivir la página. La cuenta es del usuario: él inicia sesión, tú nunca escribes ni pides contraseñas. Todos los comandos de `npx vercel` piden permiso; avísale antes qué vas a hacer.

## Antes de publicar

1. Pasa `docs/checklists/seguridad.md` completo.
2. Node.js 20 o más: `node --version`. Si no lo tiene, que instale la versión LTS de https://nodejs.org.
3. Sesión en Vercel: pídele que escriba `! npx vercel login` en este chat y que termine el ingreso en el navegador. Para confirmar la cuenta: `npx vercel whoami`.

## La primera vez

Acuerden el nombre del proyecto: el del negocio en minúsculas, sin tildes y con guiones (`barberia-don-lucho`). Queda en su dirección: `barberia-don-lucho.vercel.app`.

```
npx vercel project create barberia-don-lucho
npx vercel link --yes --project barberia-don-lucho --cwd sitio
npx vercel deploy --prod --yes --cwd sitio
```

- Si `project create` dice que el nombre ya existe, propón otro (con la comuna, por ejemplo) y repite.
- **Siempre con `--cwd sitio`:** se publica solo la carpeta de la página. Sin crear y enlazar el proyecto primero, quedaría con el nombre "sitio" y otra página podría pisarla.
- Al enlazar, Vercel deja en `sitio/` una carpeta `.vercel/` y un archivo `.env.local` con una clave temporal. **Nunca los abras, copies ni publiques:** `.vercelignore` ya los excluye. Confírmalo antes de publicar.

## Justo después de publicar

1. **Completa lo que necesita la dirección final** (skill `seo-local`): `og:url`, `og:image` si hay `compartir.jpg`, `<link rel="canonical">`, la `url` de la ficha `ld+json`, `robots.txt` y `sitemap.xml`. Vuelve a publicar con `npx vercel deploy --prod --yes --cwd sitio`.
2. **Revisa la página publicada**, solo en su dirección principal (`https://NOMBRE.vercel.app`). Las direcciones de cada versión antigua están protegidas, y revisarlas crea un permiso de acceso extra en el proyecto que no hace falta. Usa Lighthouse sobre la dirección real (pasos de la skill `rendimiento`, cambiando `http://127.0.0.1:4321` por `https://NOMBRE.vercel.app`). Debe dar 90 o más y **cero errores en la consola**: un error ahí casi siempre es la seguridad bloqueando algo.
3. **Confirma que los archivos de trabajo no quedaron públicos:** abre (con permiso) `https://NOMBRE.vercel.app/muestras.html`. Debe dar "no encontrado".
4. Entrégale el link y cuéntale cómo compartirlo.

## Cambios futuros

Cada cambio se publica con el mismo comando: `npx vercel deploy --prod --yes --cwd sitio`.

Si algo salió mal, se vuelve a la versión anterior con `npx vercel rollback`.

## Dominio propio (minegocio.cl)

1. El usuario compra el dominio: los `.cl` en NIC Chile (https://www.nic.cl), los demás en el proveedor que prefiera.
2. En Vercel: su proyecto → **Settings → Domains** → agregar el dominio.
3. Vercel le muestra los registros DNS que debe copiar en el panel de su dominio (o los servidores de nombre de Vercel). Que copie **exactamente** lo que Vercel muestra.
4. Puede tardar desde minutos hasta un día. Cuando esté listo, actualiza `og:url`, `canonical`, la ficha `ld+json`, `robots.txt` y `sitemap.xml` con el dominio nuevo, y vuelve a publicar.

## Estadísticas de visitas (opcional)

Si quiere saber cuántas personas visitan su página, Vercel tiene **Web Analytics**, que no usa cookies:
1. Que lo active en su proyecto, en la pestaña **Analytics**.
2. Agrega en `index.html`, antes de `</body>`: `<script defer src="/_vercel/insights/script.js"></script>`. Viene del mismo dominio, así que la seguridad lo permite. No agregues el script de "cola" que muestra la documentación de Vercel: va escrito adentro del HTML y la seguridad lo bloquea.
3. Menciónalo en el aviso de privacidad (skill `privacidad`).

## Problemas frecuentes

| Pasa | Causa probable | Qué hacer |
|---|---|---|
| La página se ve sin diseño | La seguridad bloqueó algo, o una ruta mal escrita | Revisa los errores con Lighthouse y las reglas de `plantilla/LEEME.md` |
| Sale "404" en la dirección principal | Se publicó la carpeta equivocada | Publica siempre con `--cwd sitio` |
| "No existe el proyecto" o cuenta equivocada | Sesión en otra cuenta o equipo | `npx vercel whoami`; si no es la suya, que inicie sesión de nuevo |
| El dominio no conecta | DNS mal copiados o todavía propagándose | Compara con lo que muestra Vercel en Domains y espera unas horas |

## Borrar el proyecto

Solo si el usuario lo pide, y avisándole que **no se puede deshacer**: `npx vercel project rm NOMBRE`.

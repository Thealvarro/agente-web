---
name: rendimiento
description: Mide la velocidad de la página con Lighthouse en celular y computador y corrige lo que la hace lenta (fotos pesadas, letras, saltos al cargar). Úsala en la fase 5 de Agente Web, antes de publicar, o cuando el usuario diga que su página "carga lento".
---

# Rendimiento

La mayoría de los clientes del negocio va a abrir la página desde el celular y con datos móviles. La meta es **90 o más en las cuatro categorías de Lighthouse, en celular**.

## Cómo medir

1. Deja la página corriendo, en segundo plano, con la misma seguridad que tendrá en Vercel:
   `node herramientas/servir.mjs`
2. Mide en celular y en computador. Lighthouse es una herramienta gratuita de Google; la primera vez avísale al usuario que le vas a pedir permiso para usarla:
   - `npx -y lighthouse@12 http://127.0.0.1:4321 --quiet --chrome-flags="--headless=new" --output=json --output-path=revision/movil.json`
   - `npx -y lighthouse@12 http://127.0.0.1:4321 --quiet --preset=desktop --chrome-flags="--headless=new" --output=json --output-path=revision/computador.json`
3. Saca los puntajes, la captura y la lista de lo que falla:
   - `node herramientas/capturas.mjs revision/movil.json revision/movil.jpg`
   - `node herramientas/capturas.mjs revision/computador.json revision/computador.jpg`

No leas el JSON completo: pesa varios megas. La lista "A mejorar" de `capturas.mjs` trae lo necesario.

Si Lighthouse dice que no encuentra Chrome, pídele al usuario que lo instale. Si no puede, se mide después de publicar en https://pagespeed.web.dev (lo abre él).

## Qué corregir, según lo que salga

| Lighthouse dice | Causa típica | Arreglo |
|---|---|---|
| Largest Contentful Paint alto | Foto de portada pesada o sin prioridad | Optimízala (skill `optimizar-imagenes`) y ponle `fetchpriority="high"`, sin `loading="lazy"` |
| Cumulative Layout Shift | Imágenes sin tamaño o letras que cambian al cargar | `width` y `height` en todas las `<img>`; letras con `herramientas/fuentes.mjs` y su `preload` |
| Properly size images / modern formats | Fotos más grandes que lo que se muestran | Skill `optimizar-imagenes` |
| Render-blocking resources | CSS o letras externas | Las letras van en `sitio/fuentes/`; nada de CSS de otros sitios |
| Errores en la consola | Algo que bloquea la seguridad (CSP) | Revisa las reglas de `plantilla/LEEME.md`: nada de `style=`, `onclick=` ni scripts adentro del HTML |

**Ignora** caché y compresión: el servidor local no las hace y Vercel sí.

## Después de corregir

Vuelve a medir. Cuéntale al usuario el resultado en una línea, en palabras simples: "Tu página carga en poco más de un segundo en el celular". Nada de siglas como LCP o CLS.

Antes de terminar, detén el servidor local.

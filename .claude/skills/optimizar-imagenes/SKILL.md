---
name: optimizar-imagenes
description: Convierte las fotos del usuario (y las generadas con IA) en versiones livianas para la web - tamaño correcto, formato WebP, foto derecha aunque venga del celular, imagen para compartir por WhatsApp - y les pone ancho y alto en la página. Úsala en la fase 4 de Agente Web cada vez que haya fotos en sitio/originales/.
---

# Optimizar imágenes

Una foto de celular pesa entre 3 y 8 MB. En la página tiene que pesar menos de 300 KB, o la página se vuelve lenta con datos móviles. El usuario deja sus fotos **tal cual** en `sitio/originales/` (que nunca se publica) y tú dejas las versiones livianas en `sitio/imagenes/`.

## Medidas por uso

| Uso | Medida máxima | Peso máximo | Formato |
|---|---|---|---|
| Portada | 1600 px por lado | 300 KB | WebP |
| Fotos de secciones | 1200 px por lado | 200 KB | WebP |
| Tarjetas y galería | 800 px por lado | 150 KB | WebP |
| Logo | SVG si existe; si no, 400 px de ancho | 50 KB | SVG o WebP |
| Imagen para compartir (WhatsApp, redes) | exacto 1200 × 630 | 300 KB | JPG |

## Cómo convertir

La herramienta es `sharp-cli`, gratuita, que se descarga de npm. **La primera vez pide permiso**: avísale al usuario qué es.

Una foto a la vez, con un **nombre limpio** de salida (minúsculas, sin tildes ni espacios, con guiones). `rotate` endereza las fotos del celular; `--fit inside` respeta el límite tanto en fotos horizontales como verticales:

```
npx -y sharp-cli@6 -i "sitio/originales/IMG_2041.jpg" -o "sitio/imagenes/portada.webp" -f webp -q 75 rotate -- resize 1600 1600 --fit inside --withoutEnlargement
```

Cambia `1600 1600` según la tabla (por ejemplo `800 800` para tarjetas).

Imagen para compartir, recortada al centro:

```
npx -y sharp-cli@6 -i "sitio/originales/IMG_2041.jpg" -o "sitio/imagenes/compartir.jpg" -f jpeg -q 80 rotate -- resize 1200 630 --fit cover
```

**Nunca** uses como salida el mismo archivo de entrada ni una carpeta sola: pisaría el original.

## Después de convertir

1. Revisa pesos y medidas: `node herramientas/medidas.mjs`. Si una pasa del peso máximo, conviértela de nuevo con `-q 65`.
2. En cada `<img>` de `index.html`, pon el `width` y `height` exactos que muestra ese comando.
3. `loading="lazy"` en todas, **salvo la portada**, que lleva `fetchpriority="high"`.
4. Un `alt` que describa la foto (skill `accesibilidad`).
5. Si hay `compartir.jpg`, en la fase 6 su dirección completa va en `og:image`.

## Problemas comunes

- **Fotos de iPhone en formato HEIC:** la herramienta no las abre. Pídele al usuario que las mande como JPG (en el iPhone: Ajustes → Cámara → Formatos → "Más compatible"; o enviándoselas por WhatsApp, que las convierte).
- **Si `sharp-cli` no funciona** en su computador: que el usuario las achique gratis en https://squoosh.app (WebP, calidad 75, el ancho de la tabla) y las deje en `sitio/imagenes/` con el nombre que le indiques.
- **Foto borrosa o muy chica:** no la agrandes; usa una más grande o elige otra.

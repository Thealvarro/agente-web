# Checklist de rendimiento

La mayoría de la gente va a abrir esta página desde el celular, muchas veces con datos móviles. Revísalo en la fase 5.

## Imágenes (lo que más pesa)

- [ ] La foto de portada pesa menos de 300 KB y el resto menos de 200 KB cada una.
- [ ] Ninguna foto mide más de 1600 px de ancho.
- [ ] Formato WebP o JPG; PNG solo para logos con transparencia, y SVG si el logo existe en ese formato.
- [ ] Todas las `<img>` tienen `width` y `height` (así la página no "salta" mientras carga).
- [ ] Todas llevan `loading="lazy"`, **salvo la portada**, que lleva `fetchpriority="high"`.
- [ ] Si una foto del usuario pesa más de lo indicado, pídele que la achique gratis en https://squoosh.app (calidad 75, ancho 1600) y que la reemplace en `sitio/imagenes/`.

## Tipografías

- [ ] Máximo dos familias, y solo los pesos que se usan (por ejemplo 400 y 700).
- [ ] Las tipografías están en `sitio/fuentes/` (generadas con `herramientas/fuentes.mjs`), no se cargan desde Google. Así la página no espera a otro servidor.
- [ ] `fuentes.css` usa `font-display: optional` (lo pone la herramienta). Con `swap` la letra cambia a mitad de la carga y la página "salta".
- [ ] Hay un `<link rel="preload">` al archivo `-latin.woff2` de la tipografía de títulos.

## Código

- [ ] Sin librerías ni frameworks: nada de jQuery, Bootstrap, Tailwind por CDN ni librerías de animación.
- [ ] El JS es corto y solo hace lo necesario (menú del celular, animaciones suaves al bajar).
- [ ] El mapa de Google lleva `loading="lazy"`.

## Total

- [ ] La página completa, con fotos, pesa menos de 1,5 MB.

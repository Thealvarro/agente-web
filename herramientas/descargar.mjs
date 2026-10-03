// Descarga UNA imagen a sitio/originales/ (no se publica; después se optimiza
// hacia sitio/imagenes/). Solo acepta https, solo imágenes y como máximo
// 15 MB. No descarga ni ejecuta nada más. Sin dependencias.
//
// Uso: node herramientas/descargar.mjs <url-https> <nombre-de-archivo>
import { writeFile, mkdir } from 'node:fs/promises';
import { basename, join } from 'node:path';

const [direccion, nombre] = process.argv.slice(2);
const MAXIMO = 15 * 1024 * 1024;
const extensiones = { 'image/webp': '.webp', 'image/jpeg': '.jpg', 'image/png': '.png', 'image/avif': '.avif' };

const salir = (mensaje) => { console.error(mensaje); process.exit(1); };

if (!direccion || !nombre) salir('Uso: node herramientas/descargar.mjs <url-https> <nombre-de-archivo>');

let url;
try { url = new URL(direccion); } catch { salir('Esa dirección no es válida.'); }
if (url.protocol !== 'https:') salir('Solo se aceptan direcciones https.');

const limpio = basename(nombre).replace(/\.[a-z0-9]+$/i, '').replace(/[^a-z0-9-]/gi, '-').toLowerCase();
if (!limpio) salir('El nombre de archivo no es válido.');

const respuesta = await fetch(url, { redirect: 'follow' });
if (!respuesta.ok) salir(`No se pudo descargar (código ${respuesta.status}).`);
if (!respuesta.url.startsWith('https:')) salir('La descarga terminó en una dirección sin https.');
if (Number(respuesta.headers.get('content-length') ?? 0) > MAXIMO) salir('La imagen pesa más de 15 MB.');

const tipo = (respuesta.headers.get('content-type') ?? '').split(';')[0].trim();
const extension = extensiones[tipo];
if (!extension) salir(`Eso no es una imagen permitida (llegó: ${tipo || 'desconocido'}).`);

const contenido = Buffer.from(await respuesta.arrayBuffer());
if (contenido.length > MAXIMO) salir('La imagen pesa más de 15 MB.');

await mkdir('sitio/originales', { recursive: true });
const destino = join('sitio', 'originales', limpio + extension);
await writeFile(destino, contenido);
console.log(`Guardada en ${destino} (${Math.round(contenido.length / 1024)} KB).`);

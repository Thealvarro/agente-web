// Copia tipografías de Google Fonts DENTRO de la página (sitio/fuentes/), así
// la página no depende de Google al cargar: es más rápida, más privada y la
// seguridad (CSP) puede ser más estricta. Solo descarga desde Google Fonts.
// Las fuentes de Google Fonts tienen licencia libre (OFL / Apache).
//
// Uso: node herramientas/fuentes.mjs "Oswald:700" "Barlow:400;600"
//      (familia tal como aparece en Google Fonts, dos puntos, pesos con ; o ,)
import { mkdir, readdir, rm, writeFile } from 'node:fs/promises';
import { join } from 'node:path';

const familias = process.argv.slice(2);
if (familias.length === 0) {
  console.error('Uso: node herramientas/fuentes.mjs "Familia:pesos" ["Otra familia:pesos"]');
  process.exit(1);
}

// Con un navegador moderno, Google entrega el formato woff2 (el más liviano).
const navegador = 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/124.0 Safari/537.36';
const subconjuntos = new Set(['latin', 'latin-ext']); // cubre español y portugués
const destino = join('sitio', 'fuentes');

const parametros = familias.map((familia) => {
  const [nombre, pesos = '400'] = familia.split(':');
  return `family=${nombre.trim().replace(/\s+/g, '+')}:wght@${pesos.replace(/,/g, ';').trim()}`;
}).join('&');

const respuestaCss = await fetch(`https://fonts.googleapis.com/css2?${parametros}&display=optional`, {
  headers: { 'User-Agent': navegador },
});
if (!respuestaCss.ok) {
  console.error(`Google Fonts no encontró alguna familia o peso (código ${respuestaCss.status}). Revisa los nombres.`);
  process.exit(1);
}
const css = await respuestaCss.text();

await mkdir(destino, { recursive: true });
for (const archivo of await readdir(destino)) {
  if (archivo.endsWith('.woff2') || archivo === 'fuentes.css') await rm(join(destino, archivo));
}

const descargados = new Map();
const bloques = [];
for (const [, subconjunto, bloque] of css.matchAll(/\/\*\s*([\w-]+)\s*\*\/\s*(@font-face\s*\{[^}]*\})/g)) {
  if (!subconjuntos.has(subconjunto)) continue;
  const url = bloque.match(/url\((https:\/\/fonts\.gstatic\.com\/[^)]+\.woff2)\)/)?.[1];
  const familia = bloque.match(/font-family:\s*'([^']+)'/)?.[1] ?? 'fuente';
  const peso = bloque.match(/font-weight:\s*([\d ]+);/)?.[1].trim().replace(/\s+/g, '-') ?? '400';
  if (!url) continue;

  if (!descargados.has(url)) {
    const nombre = `${familia.toLowerCase().replace(/[^a-z0-9]+/g, '-')}-${peso}-${subconjunto}.woff2`;
    const respuesta = await fetch(url);
    const tipo = respuesta.headers.get('content-type') ?? '';
    if (!respuesta.ok || !tipo.includes('woff2')) {
      console.error(`No se pudo descargar ${familia} ${peso}.`);
      process.exit(1);
    }
    await writeFile(join(destino, nombre), Buffer.from(await respuesta.arrayBuffer()));
    descargados.set(url, nombre);
  }
  bloques.push(`/* ${familia} ${peso} · ${subconjunto} */\n` + bloque.replace(url, descargados.get(url)));
}

if (bloques.length === 0) {
  console.error('No llegó ninguna fuente. Revisa los nombres de las familias.');
  process.exit(1);
}

await writeFile(join(destino, 'fuentes.css'), bloques.join('\n\n') + '\n');
// La primera familia que se pasa es la de títulos: esa es la que conviene precargar.
const titulos = familias[0].split(':')[0].trim().toLowerCase().replace(/[^a-z0-9]+/g, '-');
const primera = [...descargados.values()].find((n) => n.startsWith(`${titulos}-`) && n.endsWith('-latin.woff2'));
console.log(`Listo: ${descargados.size} archivos en sitio/fuentes/ y sitio/fuentes/fuentes.css.`);
if (primera) {
  console.log('Para que el título cargue más rápido, agrega en <head>, antes de fuentes.css:');
  console.log(`<link rel="preload" href="fuentes/${primera}" as="font" type="font/woff2" crossorigin>`);
}

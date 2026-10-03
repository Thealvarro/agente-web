// Muestra el ancho, el alto y el peso de las imágenes de sitio/imagenes/, para
// poner width y height en cada <img> (así la página no salta al cargar).
// Lee solo la cabecera de cada archivo. Sin dependencias.
//
// Uso: node herramientas/medidas.mjs [carpeta]
import { readdir, readFile, stat } from 'node:fs/promises';
import { extname, join } from 'node:path';

const carpeta = process.argv[2] ?? join('sitio', 'imagenes');

function medidas(b) {
  // PNG
  if (b.toString('ascii', 1, 4) === 'PNG') return [b.readUInt32BE(16), b.readUInt32BE(20)];
  // WebP
  if (b.toString('ascii', 0, 4) === 'RIFF' && b.toString('ascii', 8, 12) === 'WEBP') {
    const tipo = b.toString('ascii', 12, 16);
    if (tipo === 'VP8 ') return [b.readUInt16LE(26) & 0x3fff, b.readUInt16LE(28) & 0x3fff];
    if (tipo === 'VP8L') {
      const [b0, b1, b2, b3] = [b[21], b[22], b[23], b[24]];
      return [1 + (((b1 & 0x3f) << 8) | b0), 1 + (((b3 & 0x0f) << 10) | (b2 << 2) | ((b1 & 0xc0) >> 6))];
    }
    if (tipo === 'VP8X') return [1 + b.readUIntLE(24, 3), 1 + b.readUIntLE(27, 3)];
  }
  // JPEG: busca el marcador SOF con las medidas
  if (b[0] === 0xff && b[1] === 0xd8) {
    let i = 2;
    while (i < b.length - 9) {
      if (b[i] !== 0xff) { i++; continue; }
      const marcador = b[i + 1];
      if (marcador >= 0xc0 && marcador <= 0xcf && ![0xc4, 0xc8, 0xcc].includes(marcador)) {
        return [b.readUInt16BE(i + 7), b.readUInt16BE(i + 5)];
      }
      i += 2 + b.readUInt16BE(i + 2);
    }
  }
  return null;
}

let archivos;
try {
  archivos = await readdir(carpeta);
} catch {
  console.error(`No encuentro la carpeta ${carpeta}.`);
  process.exit(1);
}

for (const archivo of archivos.sort()) {
  const ruta = join(carpeta, archivo);
  if (!['.webp', '.jpg', '.jpeg', '.png'].includes(extname(archivo).toLowerCase())) continue;
  const kb = Math.round((await stat(ruta)).size / 1024);
  const m = medidas(await readFile(ruta));
  console.log(m ? `${archivo}: width="${m[0]}" height="${m[1]}" · ${kb} KB` : `${archivo}: no pude leer las medidas · ${kb} KB`);
}

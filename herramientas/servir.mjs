// Muestra sitio/ en http://127.0.0.1:4321 aplicando las mismas reglas de
// seguridad (headers) que sitio/vercel.json aplicará en Vercel. Así lo que se
// revisa aquí es lo mismo que se publica. Sin dependencias: solo Node 20+.
//
// Uso: node herramientas/servir.mjs [puerto]
import { createServer } from 'node:http';
import { readFile } from 'node:fs/promises';
import { existsSync } from 'node:fs';
import { extname, join, normalize, resolve, sep } from 'node:path';

const raiz = resolve('sitio');
const puerto = Number(process.argv[2] ?? 4321);

if (!existsSync(join(raiz, 'index.html'))) {
  console.error('No encuentro sitio/index.html. Corre este comando desde la carpeta del kit.');
  process.exit(1);
}

let headers = [];
try {
  const config = JSON.parse(await readFile(join(raiz, 'vercel.json'), 'utf8'));
  headers = config.headers?.[0]?.headers ?? [];
} catch {
  console.warn('Aviso: no hay sitio/vercel.json; se sirve sin las reglas de seguridad.');
}

const tipos = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.json': 'application/json',
  '.svg': 'image/svg+xml', '.webp': 'image/webp', '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg', '.png': 'image/png', '.avif': 'image/avif',
  '.ico': 'image/x-icon', '.txt': 'text/plain; charset=utf-8', '.xml': 'application/xml',
};

createServer(async (pedido, respuesta) => {
  for (const { key, value } of headers) respuesta.setHeader(key, value);
  const ruta = decodeURIComponent(new URL(pedido.url, 'http://x').pathname);
  const archivo = normalize(join(raiz, ruta.endsWith('/') ? ruta + 'index.html' : ruta));
  if (archivo !== raiz && !archivo.startsWith(raiz + sep)) {
    respuesta.writeHead(403).end('Prohibido');
    return;
  }
  try {
    const contenido = await readFile(archivo);
    respuesta.writeHead(200, { 'Content-Type': tipos[extname(archivo).toLowerCase()] ?? 'application/octet-stream' });
    respuesta.end(contenido);
  } catch {
    respuesta.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('No encontrado');
  }
}).listen(puerto, '127.0.0.1', () => {
  console.log(`Tu página está en http://127.0.0.1:${puerto} (Ctrl+C para detener)`);
});

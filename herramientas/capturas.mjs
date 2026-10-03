// Saca del informe JSON de Lighthouse la captura de la página completa y la
// guarda como imagen, para revisar cómo se ve. Sin dependencias.
//
// Uso: node herramientas/capturas.mjs <informe.json> <salida.jpg>
import { mkdir, readFile, writeFile } from 'node:fs/promises';
import { dirname } from 'node:path';

const [informe, salida] = process.argv.slice(2);
if (!informe || !salida) {
  console.error('Uso: node herramientas/capturas.mjs <informe.json> <salida.jpg>');
  process.exit(1);
}

const datos = JSON.parse(await readFile(informe, 'utf8'));
const captura =
  datos.fullPageScreenshot?.screenshot?.data ??
  datos.audits?.['final-screenshot']?.details?.data;

if (!captura) {
  console.error('El informe no trae capturas.');
  process.exit(1);
}

const [, base64] = captura.split(',');
await mkdir(dirname(salida), { recursive: true });
await writeFile(salida, Buffer.from(base64, 'base64'));

const puntajes = Object.entries(datos.categories ?? {})
  .map(([nombre, c]) => `${nombre} ${Math.round(c.score * 100)}`)
  .join(' · ');
console.log(`Captura guardada en ${salida}. Puntajes: ${puntajes}`);

// Lo que conviene mejorar, para no tener que leer el informe completo.
// Caché y compresión se ignoran: el servidor local no las hace y Vercel sí.
const ignorar = new Set(['uses-long-cache-ttl', 'cache-insight', 'uses-text-compression', 'document-latency-insight']);
const pendientes = Object.entries(datos.audits ?? {})
  .filter(([id, a]) => !ignorar.has(id) && a.score !== null && a.score < 0.9
    && ['binary', 'numeric', 'metricSavings'].includes(a.scoreDisplayMode))
  .map(([id, a]) => `- ${a.title}${a.displayValue ? ` (${a.displayValue})` : ''} [${id}]`);
console.log(pendientes.length ? `A mejorar:\n${pendientes.join('\n')}` : 'Nada importante que mejorar.');

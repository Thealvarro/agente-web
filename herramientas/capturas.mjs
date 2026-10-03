// Saca del informe JSON de Lighthouse la captura de la página completa y la
// guarda como imagen, para revisar cómo se ve. Sin dependencias.
//
// Uso: node herramientas/capturas.mjs <informe.json> <salida.jpg>
import { readFile, writeFile } from 'node:fs/promises';

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
await writeFile(salida, Buffer.from(base64, 'base64'));

const puntajes = Object.entries(datos.categories ?? {})
  .map(([nombre, c]) => `${nombre} ${Math.round(c.score * 100)}`)
  .join(' · ');
console.log(`Captura guardada en ${salida}. Puntajes: ${puntajes}`);

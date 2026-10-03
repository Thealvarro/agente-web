# Agente Web

<img src="docs/assets/armatuweb.webp" width="880" alt="armatuweb: tu página web, paso a paso, con Claude Code. Un proyecto que descargas, abres con Claude Code y, conversando, te guía en 6 fases (conocerte, diseño, contenido, armado, revisión y publicar) hasta tener la página de tu negocio lista.">

[![Licencia MIT](https://img.shields.io/badge/licencia-MIT-ee6c4d?style=flat-square&labelColor=2e4460)](LICENSE)
[![Hecho para Claude Code](https://img.shields.io/badge/hecho_para-Claude_Code-ee6c4d?style=flat-square&labelColor=2e4460)](https://claude.com/product/claude-code)
[![En español](https://img.shields.io/badge/idioma-español-ee6c4d?style=flat-square&labelColor=2e4460)](#)

**Tu página web, paso a paso, con Claude Code.** Descargas este proyecto, lo abres con Claude Code y, conversando, armas la página de tu negocio. No necesitas saber programar. Es gratis y open source.

## ¿Qué es?

Agente Web convierte a Claude Code en un **agente que arma páginas web**. Claude Code ya sabe crear archivos, revisarlos y publicarlos; Agente Web le da el método: qué preguntarte, cómo proponerte un diseño, cómo construir la página, cómo revisarla y cómo publicarla, sin saltarse la seguridad.

Tú conversas. Él pregunta, diseña, construye y revisa. Tú eliges y apruebas.

## Qué obtienes

- Una página hecha para **tu** negocio, no una plantilla con otro color: eliges entre 3 propuestas de diseño.
- Pensada primero para el celular, que es desde donde te van a ver.
- Botón de WhatsApp, mapa, horario y redes, listos para que te contacten.
- Preparada para aparecer en Google con los datos de tu negocio.
- Publicada gratis en internet con [Vercel](https://vercel.com), con tu propia dirección.
- El código es tuyo: lo puedes cambiar cuando quieras.

## Antes de empezar

**Necesitas:**

- Un plan de Claude que incluya Claude Code, y [Claude Code instalado](https://claude.com/product/claude-code).
- [Node.js](https://nodejs.org) 20 o más, solo si vas a publicar la página (descarga la versión LTS).

**Ten a mano, si los tienes:** tu logo, fotos de tu negocio o de tu trabajo, tus servicios y precios, tu WhatsApp, tu dirección y tu horario. Las fotos reales son lo que más diferencia hace: con ellas la página luce mucho mejor.

## Cómo se usa

1. **Descarga el proyecto:** arriba en esta página, botón verde **Code** → **Download ZIP**, y descomprímelo. (Si usas Git: `git clone https://github.com/Thealvarro/agente-web.git`).
2. **Abre una terminal en la carpeta:**
   - Windows: abre la carpeta, haz clic derecho en un espacio vacío y elige **Abrir en Terminal**.
   - Mac: abre la app Terminal, escribe `cd ` (con un espacio), arrastra la carpeta a la ventana y presiona Enter.
3. **Escribe `claude`** y presiona Enter.
4. La primera vez, Claude Code te pregunta si confías en esta carpeta: responde que **sí**. Eso activa los permisos del kit.
5. **Saluda y cuéntale de tu negocio.** Desde ahí, él te guía.

## Las 6 fases

| Fase | Qué pasa |
|---|---|
| 1. Conocerte | Te pregunta por tu negocio y el estilo que buscas. Puedes mandarle una imagen de un diseño que te guste, tu Instagram o tu logo |
| 2. Diseño | Te arma 3 propuestas visuales y eliges una |
| 3. Contenido | Te pregunta por servicios, horarios y contacto, y te muestra un resumen |
| 4. Armado | Construye la página completa |
| 5. Revisión | La revisa con listas de accesibilidad y rendimiento, y la ajusta según lo que le pidas |
| 6. Publicar | Si quieres, la sube a internet y te entrega el link |

## Seguro por defecto

- **Permisos mínimos:** solo puede crear archivos dentro de la carpeta `sitio/`. Para todo lo demás te pide permiso, y descargar cosas de internet está bloqueado.
- **Sin formularios:** el contacto va por WhatsApp, teléfono o correo, así no guardas datos de nadie.
- **Nada inventado:** nunca inventa reseñas, cifras ni años de experiencia. Si no los tienes, esa sección no va.
- **Reglas de seguridad al publicar:** la página sale con protecciones contra código malicioso (CSP y otros headers).
- **Todo es propio:** el kit no trae skills ni código de terceros.

## Preguntas frecuentes

**¿Cuánto cuesta?** El kit es gratis. Necesitas un plan de Claude con Claude Code; publicar en Vercel es gratis.

**¿Puedo cambiar la página después?** Sí. Vuelve a abrir Claude Code en la carpeta y pídele los cambios. Él retoma donde quedaste.

**¿Puedo usar mi propio dominio (minegocio.cl)?** Sí. Después de publicar, se agrega desde Vercel: tu proyecto → Settings → Domains.

**¿Sirve para una tienda online?** Sirve para mostrar tus productos y vender por WhatsApp. No arma carritos ni cobra en línea; si ya tienes un link de pago, puede ir como botón.

**¿Puedo hacer otra página para otro negocio?** Sí. Mueve la carpeta `sitio/` a otro lugar (ahí queda tu página) y vuelve a empezar.

## Qué hay adentro

```
agente-web/
├── CLAUDE.md          el método: cómo guía Claude cada fase
├── .claude/           los permisos del kit
├── docs/              cuestionario, guía de diseño, orden por rubro y checklists
├── plantilla/         la base técnica de toda página (no es un diseño)
└── sitio/             aquí queda tu página (se crea al usarlo)
```

## Licencia

MIT: puedes usarlo, copiarlo y modificarlo libremente.

---

<sub>Desarrollado por <a href="https://alvarocofre.dev" target="_blank" rel="noopener noreferrer">SICS</a></sub>

---
name: seo-local
description: Deja la página lista para aparecer en Google cuando alguien busca el rubro en su zona ("barbería en Maipú", "psicóloga online"): títulos, descripción, ficha del negocio para Google, textos, robots.txt y sitemap.xml, más la guía para Google Business Profile y Search Console. Úsala al escribir los textos (fase 4), al revisar (fase 5) y al publicar (fase 6) en Agente Web.
---

# SEO local

Un negocio local no compite con todo internet: compite con los de su barrio. La búsqueda que importa es **"[rubro] en [comuna o ciudad]"**, y la página tiene que responderla con claridad.

## 1. Define las palabras (antes de escribir)

Con `sitio/resumen.md`, define y anota en ese mismo archivo:
- **Principal:** rubro + lugar. "barbería en Maipú", "psicóloga en Providencia".
- **Secundarias:** los servicios + lugar ("fade en Maipú"), y "online" o "a domicilio" si aplica.

Úsalas de forma natural. Si una frase suena forzada para meter la palabra, no va.

## 2. Lo que va en la página

| Elemento | Regla |
|---|---|
| `<title>` | `Negocio · Rubro en Lugar`, máximo 60 caracteres |
| `meta description` | Qué hace, dónde y cómo contactarlo, máximo 155 caracteres. Que invite al clic |
| `h1` | La frase de la portada, con el rubro y el lugar dichos naturalmente |
| `h2` | Uno por sección, claros: "Servicios y precios", "Dónde estamos" |
| Textos | Servicios con nombre y descripción real; el lugar mencionado en portada, ubicación y pie |
| `alt` de fotos | Describen la foto con contexto: "Corte fade en Barbería Don Lucho, Maipú" |
| Datos de contacto | Nombre, dirección y teléfono **idénticos** en la página, la ficha `ld+json` y Google Business Profile |

## 3. La ficha para Google (`application/ld+json`)

Ya viene en la plantilla. Complétala con datos reales:
- `@type` específico: `HairSalon`, `BeautySalon`, `Dentist`, `Physician`, `MedicalBusiness` (psicólogos y terapeutas), `ProfessionalService`, `Restaurant`, `CafeOrCoffeeShop`, `Bakery`, `AutoRepair`, `VeterinaryCare`, `Store`, `LegalService`, `AccountingService`, `ExerciseGym`, `TattooParlor`… Si dudas, `LocalBusiness`.
- `openingHours` con el horario real; `sameAs` con sus redes; `areaServed` si atiende a domicilio u online.
- Al publicar, agrega `"url"` con la dirección final y, si hay foto, `"image"`.
- **Nunca** agregues `aggregateRating` ni `review` en la ficha: Google no los acepta para el propio negocio y pueden penalizar la página.

## 4. Al publicar (fase 6)

Con la dirección final (`https://...`), crea en `sitio/`:

- `robots.txt`:
  ```
  User-agent: *
  Allow: /
  Sitemap: https://DIRECCION/sitemap.xml
  ```
- `sitemap.xml` con la página principal y su fecha:
  ```xml
  <?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://DIRECCION/</loc><lastmod>AAAA-MM-DD</lastmod></url>
  </urlset>
  ```
- En `index.html`: `<link rel="canonical" href="https://DIRECCION/">`, y `og:url` con esa misma dirección.

## 5. Fuera de la página (lo hace el usuario, tú lo guías)

Explícale que esto pesa tanto como la página:

1. **Google Business Profile** (https://business.google.com): crear o reclamar la ficha del negocio, con la misma dirección, teléfono y horario de la página, y con el link a la página. Es lo que aparece en Google Maps.
2. **Pedir reseñas reales** a sus clientes en esa ficha. Nunca comprarlas ni inventarlas.
3. **Google Search Console** (https://search.google.com/search-console): agregar la página. Si Google le da un código `google-site-verification`, pégalo como `<meta name="google-site-verification" content="...">` en el `<head>` y vuelve a publicar. Después, que envíe el `sitemap.xml`.

## Lo que nunca se hace

Repetir palabras clave de relleno, texto escondido, páginas copiadas de otros negocios, reseñas falsas o prometer "primer lugar en Google". El SEO honesto es lento, pero dura.

## Revisión rápida (fase 5)

Lighthouse en SEO debe dar 100 (pasos en la skill `rendimiento`). Además, confirma a mano: `title` y `description` con el lugar, un solo `h1`, `alt` en todas las fotos con contenido y la ficha `ld+json` sin datos de la plantilla.

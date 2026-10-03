---
name: privacidad
description: Decide si la página necesita un aviso de privacidad y lo redacta en simple (sitio/privacidad.html) cuando recoge datos, usa estadísticas de visitas o un formulario, siguiendo la Ley 21.719 de protección de datos personales de Chile. Úsala en la fase 6 de Agente Web y cuando se agregue un formulario o estadísticas.
---

# Privacidad

Esta skill ayuda a cumplir lo básico, **no reemplaza la asesoría de un abogado**. Si el negocio trata datos delicados (salud, menores, datos financieros), recomiéndale revisar el aviso con un profesional.

## ¿Hace falta un aviso?

| La página… | Aviso de privacidad |
|---|---|
| Solo muestra información y tiene botones de WhatsApp, llamar o correo | No es obligatorio. La página no recoge datos |
| Tiene un formulario (propio o enlazado) | **Sí** |
| Usa estadísticas de visitas (Web Analytics de Vercel u otra) | **Sí**, aunque no use cookies |
| Muestra un mapa de Google incrustado | Conviene mencionarlo: al cargar el mapa, Google recibe datos del visitante |

**Alternativa más privada al mapa:** en vez del `<iframe>`, un botón "Ver en Google Maps" que abre el mapa en otra pestaña. Así Google no recibe nada hasta que la persona decide abrirlo.

## Qué dice el aviso

En Chile, la Ley 21.719 de protección de datos personales rige desde el 1 de diciembre de 2026. El aviso, escrito en simple, responde:

1. **Quién es el responsable:** nombre del negocio (o de la persona) y un correo de contacto.
2. **Qué datos se recogen:** por ejemplo, nombre y teléfono del formulario; estadísticas anónimas de visitas.
3. **Para qué:** responder la consulta, agendar la hora. Nada más.
4. **Con quién se comparten:** los servicios que intervienen (el proveedor del formulario, Vercel para alojar la página, Google si hay mapa).
5. **Cuánto tiempo se guardan:** un plazo concreto ("hasta 12 meses después de la última atención").
6. **Los derechos de la persona:** acceder a sus datos, corregirlos, pedir que se borren, oponerse a su uso, pedirlos en un formato portable y pedir que se bloqueen; y cómo ejercerlos (el correo de contacto).
7. **Fecha de la última actualización.**

## Cómo agregarlo

1. Crea `sitio/privacidad.html` con la misma estructura y los mismos archivos de la página (`estilos.css`, `fuentes/fuentes.css`, `app.js`), una cabecera simple con link de vuelta al inicio, y el texto con títulos `h2` por punto.
2. En el pie de `index.html`, un link discreto: "Privacidad".
3. Si hay formulario, una línea junto al botón: "Al enviar aceptas el [aviso de privacidad](privacidad.html)".
4. Agrega `privacidad.html` al `sitemap.xml` (skill `seo-local`).

## Lo que nunca

- Pedir más datos de los necesarios.
- Usar los datos para algo distinto de lo que dice el aviso (por ejemplo, mandar publicidad sin permiso).
- Copiar el aviso de otra página: tiene que describir lo que hace **esta** página.

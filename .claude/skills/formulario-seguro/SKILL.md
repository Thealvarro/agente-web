---
name: formulario-seguro
description: Cuando el usuario insiste en tener un formulario de contacto o de reserva, lo resuelve sin exponer sus datos ni los de sus clientes - primero con un formulario externo enlazado (lo recomendado) y, si hace falta uno propio, con los requisitos de seguridad obligatorios. Úsala solo si el usuario pide un formulario en Agente Web.
---

# Formulario seguro

Por defecto la página **no lleva formulario**: el contacto va por WhatsApp, teléfono o correo, y así nadie guarda datos de nadie. Si el usuario insiste, primero explícale en una línea lo que implica: hay que protegerlo de bots, guardar los datos con cuidado y publicar un aviso de privacidad.

## Camino recomendado: un formulario externo, enlazado

Servicios como Tally (https://tally.so) o Google Forms ya traen protección contra spam y guardan las respuestas por él. En la página solo va un **botón que abre el formulario**:

```html
<a class="boton" href="https://tally.so/r/XXXX" target="_blank" rel="noopener noreferrer">Reserva tu hora</a>
```

- Lo crea el usuario en su cuenta del servicio y te pasa el link.
- **No lo incrustes** en la página (`<iframe>`): la seguridad lo bloquea y no hace falta.
- Que pida **solo lo mínimo**: nombre y forma de contacto. Nunca RUT, datos bancarios ni datos de salud.
- Agrega el aviso de privacidad (skill `privacidad`), mencionando qué servicio guarda las respuestas.

## Si quiere un formulario dentro de la página

Exige programar una función en el servidor, y no conviene armarlo sin alguien que lo mantenga. Explícale que para hacerlo bien se necesita **todo** esto, sin excepción:

- [ ] Protección contra bots: Cloudflare Turnstile, verificado en el servidor (no solo en el navegador).
- [ ] Una función de Vercel que valide cada campo (largo, formato) y rechace lo que no corresponda.
- [ ] Límite de envíos por persona (por ejemplo, con las reglas de firewall de Vercel).
- [ ] El envío por correo con un servicio como Resend, con su clave guardada en las **variables de entorno de Vercel**, nunca en los archivos de la página.
- [ ] Ajustar la seguridad (`vercel.json`) solo para lo que Turnstile necesita.
- [ ] Aviso de privacidad visible junto al formulario.

Si no se puede cumplir la lista completa, vuelve al camino recomendado o a los botones directos. **Un formulario a medias es peor que no tener formulario:** termina lleno de spam o filtrando datos.

## Rubros con datos delicados

En salud (psicología, dental, kinesiología) y en rubros legales, el formulario **nunca** pregunta por síntomas, diagnósticos ni detalles del caso: son datos sensibles. Basta con nombre y forma de contacto; el resto se conversa por un canal privado.

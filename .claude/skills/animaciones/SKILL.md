---
name: animaciones
description: Movimiento con criterio para la página - qué animar y qué no, tiempos, curvas, respeto por quienes desactivan las animaciones, y cómo hacerlo con CSS y JS propios sin librerías (la seguridad de la página las bloquea). Úsala en la fase 4 de Agente Web y cuando el usuario pida "que se mueva más" o "más dinámica".
---

# Animaciones

El movimiento sirve para dos cosas: **confirmar que algo respondió** (un botón que se aprieta, un menú que se abre) y **acompañar la lectura** (secciones que aparecen suave al bajar). Si una animación no hace ninguna de las dos, sobra.

## Qué sí

- Botones y tarjetas al pasar el mouse y al apretar (ya vienen en la plantilla).
- El menú del celular al abrirse y cerrarse (ya viene).
- La aparición suave de secciones al bajar (ya viene, con `.aparece` en el HTML).
- Un detalle en la portada, si suma: el título que aparece levemente, una línea de acento que se dibuja.

## Qué no

- Textos que se escriben letra por letra, carruseles automáticos, parallax pesado, partículas, elementos que rebotan o giran sin parar.
- Animar todo: si cada elemento entra con efecto, la página se siente lenta.

## Tiempos y curvas

| Qué | Duración |
|---|---|
| Pasar el mouse, apretar | 120 a 180 ms |
| Menú, desplegables | 200 a 250 ms |
| Aparición de secciones y portada | 400 a 700 ms |

- Curva: la variable `--ease` de la plantilla (`cubic-bezier(0.23, 1, 0.32, 1)`): arranca rápido y frena suave. **Nunca** `ease-in` en la interfaz: se siente lenta al empezar.
- Anima solo `transform` y `opacity`. Animar `height`, `width`, `top` o `margin` hace que la página se trabe en celulares.
- Nada aparece desde cero: parte de `translateY(12px a 24px)` o `scale(0.96)` con `opacity: 0`. Nunca `scale(0)`.
- Escalonado: entre 60 y 90 ms entre elementos, máximo 5 o 6 seguidos.

## Cómo hacerlo con la seguridad de la página

- Todo en `sitio/estilos.css` y `sitio/app.js`. **Sin librerías** (GSAP, AOS, Animate.css por CDN): la seguridad las bloquea, y no hacen falta.
- **Sin `style="..."` en el HTML**, tampoco para pasar variables (`style="--i: 2"`): la seguridad bloquea esos atributos. Para escalonar, usa `:nth-child()` en el CSS:
  ```css
  .tarjetas .tarjeta:nth-child(2) { transition-delay: 70ms; }
  .tarjetas .tarjeta:nth-child(3) { transition-delay: 140ms; }
  ```
- Ejemplo de tarjeta que se levanta al pasar el mouse:
  ```css
  .tarjeta { transition: transform 160ms var(--ease), border-color 160ms var(--ease); }
  .tarjeta:hover { transform: translateY(-3px); border-color: var(--principal); }
  ```

## Respeto por quienes desactivan el movimiento

La plantilla apaga las animaciones si la persona activó "reducir movimiento" en su teléfono o computador (`prefers-reduced-motion`). No quites ese bloque del CSS. Toda animación nueva debe quedar cubierta por él.

## Nunca ocultes contenido esperando JS

`app.js` solo esconde para animar lo que todavía no se ve. Si agregas efectos, mantén esa regla: si el JS no carga, la página se tiene que leer completa.

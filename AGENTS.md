# AGENTS.md — Letras Dispersas · Landing Page

Reglas permanentes del proyecto. Leer antes de cualquier sesión de desarrollo.

---

## 1. Objetivo

Landing de presentación del libro **_Letras Dispersas_** de **MaryLó**,
publicado por **Editorial Talón de Aquiles**.

El objetivo es que el lector conozca el libro y a la autora, y acceda a comprarlo
en la editorial. **No es una tienda online.** No hay proceso de compra en esta web.

---

## 2. Stack

| Elemento | Tecnología |
|----------|-----------|
| Framework | Vue 3 (Composition API, `<script setup>`) |
| Bundler | Vite 5 |
| Lenguaje | JavaScript |
| Estilos | CSS moderno (custom properties, grid, flexbox) |
| Fuentes | Google Fonts: Playfair Display + Crimson Pro |
| Despliegue | Cloudflare Pages (primario) · GitHub Pages (alternativo) |

Sin Vue Router, Pinia, backend, autenticación, ni CMS.

---

## 3. Comandos esenciales

```bash
npm install        # instalar dependencias
npm run dev        # servidor de desarrollo
npm run build      # compilar para producción → dist/
npm run preview    # previsualizar el build
```

---

## 4. Arquitectura

```
letras-dispersas/
├── index.html              # HTML base con SEO y meta tags
├── vite.config.js
├── package.json
├── public/
│   ├── favicon.svg
│   └── images/
│       ├── book-cover.webp  # portada oficial del libro ← PENDIENTE
│       └── author.jpg       # fotografía de la autora  ← PENDIENTE
└── src/
    ├── main.js
    ├── App.vue
    ├── style/
    │   └── main.css         # design system + variables CSS
    └── components/
        ├── Header.vue       # navegación sticky con menú móvil
        ├── Hero.vue         # sección principal: portada + info + CTA
        ├── AboutAuthor.vue  # fotografía + biografía de la autora
        ├── Contact.vue      # formulario de contacto con validación
        └── Footer.vue       # footer minimal con links
```

Sección única con anchor navigation: `#libro` · `#autora` · `#contacto`.

---

## 5. Diseño visual

**Paleta:**
- Fondo: `#FAF8F3` (crema) / `#EDE8DF` (marfil para secciones alternadas)
- Acento: `#A8563C` (terracota) — botones, labels, énfasis
- Texto principal: `#2A1A0E` (marrón oscuro)
- Texto secundario: `#6B4A30` (marrón medio)
- Muted: `#9C8B7A` (warm gray)

**Tipografía:**
- Títulos: **Playfair Display** (serif literaria, elegante)
- Cuerpo: **Crimson Pro** (serif legible, cálida)

**Principios:**
- Simple, elegante, cálido, literario, humano, atemporal, minimalista
- Evitar: corporativo, SaaS, gradientes llamativos, colores saturados, tarjetas, exceso de sombras
- Priorizar: espacio en blanco, legibilidad, personalidad literaria
- La portada del libro tiene protagonismo visual en el Hero

---

## 6. Contenido — fuente oficial

La información del libro proviene exclusivamente de:
**https://editorial.talondeaquiles.es/product/letras-dispersas/**

- **No inventar** datos del libro ni de la autora
- La sinopsis puede adaptarse para presentación visual, sin cambiar su significado
- El CTA de compra apunta siempre a la editorial (URL arriba)
- Instagram autora: https://www.instagram.com/marylowriter/

### Placeholders activos
Reemplazar cuando esté disponible la información real:

| Placeholder | Pendiente |
|-------------|-----------|
| `public/images/book-cover.webp` | Portada oficial del libro |
| `public/images/author.jpg` | Fotografía de la autora |
| Biografía en `AboutAuthor.vue` | Bio real de MaryLó |

---

## 7. Imágenes

- `public/images/book-cover.webp` — portada **oficial** (asset local, no generada)
- `public/images/author.jpg` — foto **real** de la autora (asset local, no generada)
- No sustituir por imágenes de stock, generadas o inventadas
- Si falta alguna, los componentes muestran un placeholder CSS identificado
- Optimizar conservando calidad adecuada para web

---

## 8. Formulario de contacto

El formulario valida nombre, email y mensaje en frontend (Vue reactive).
Actualmente simula el envío (delay ficticio + mensaje de confirmación).

**Para conectar con proveedor externo**, editar `handleSubmit()` en `Contact.vue`:
- **Formspree**: `POST https://formspree.io/f/{ID}`
- **Netlify Forms**: añadir `data-netlify="true"` al `<form>` y eliminar `novalidate`
- **Resend / EmailJS**: llamar a su SDK en el método

---

## 9. SEO

Configurado en `index.html`:
- `<title>` y `<meta description>` con título y autora reales
- Open Graph (og:title, og:description, og:image, og:url, og:locale)
- Twitter Card (summary_large_image)
- Viewport, canonical, lang="es"
- Favicon SVG

Actualizar `og:url` y `canonical` con el dominio definitivo antes de desplegar.

---

## 10. Accesibilidad

- HTML semántico (`<header>`, `<main>`, `<section>`, `<footer>`, `<nav>`)
- Jerarquía de headings: h1 en Hero → h2 en AboutAuthor y Contact
- Labels asociados a inputs (`for` + `id`)
- `aria-label` en elementos interactivos que no tienen texto visible claro
- `aria-describedby` + `aria-invalid` en campos del formulario con error
- `alt` descriptivo en todas las imágenes
- Focus visible mediante `:focus-visible` con outline en terracota
- Respeta `prefers-reduced-motion`
- Contraste AA+ en todos los textos principales

---

## 11. Responsive

Breakpoints:
- **Desktop**: > 860px — grid de dos columnas
- **Tablet/Mobile**: ≤ 860px — columna única centrada
- **Mobile pequeño**: ≤ 480px — ajustes de tamaño adicionales

Menú mobile: hamburger con animación, aparece en ≤ 680px.

---

## 12. Rendimiento

- Zero dependencias de producción más allá de `vue`
- CSS en custom properties, sin librerías de estilos
- Fuentes con `preconnect` y `display=swap`
- `loading="lazy"` en imágenes secundarias (autor), `loading="eager"` en portada
- Sin librerías de animación — todo con CSS transitions
- `base: './'` en vite.config.js para compatibilidad con despliegues en subdirectorio

---

## 13. Despliegue

### Cloudflare Pages (recomendado)
1. Conectar repositorio en Cloudflare Pages
2. Build command: `npm run build`
3. Build output directory: `dist`
4. Node.js version: 18+
5. Actualizar `og:url` y `canonical` en `index.html` con el dominio asignado

### GitHub Pages
1. Ajustar `base` en `vite.config.js` si se despliega en subdirectorio:
   `base: '/nombre-del-repo/'`
2. Build + commit de `dist/` o usar GitHub Actions con `npm run build`

---

## 14. Criterios de calidad antes de desplegar

- [ ] `npm run build` sin errores
- [ ] Sin errores en consola del navegador
- [ ] Responsive correcto en mobile / tablet / desktop
- [ ] Navegación por anchors funciona
- [ ] Formulario valida y muestra confirmación
- [ ] Accesibilidad básica (headings, labels, alt text, focus)
- [ ] SEO: title, description, OG correctos
- [ ] CTA enlaza a la editorial
- [ ] Sin placeholders sin reemplazar en contenido visible
- [ ] Imágenes con alt text descriptivo

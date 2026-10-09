<template>
  <footer class="site-footer">
    <div class="container footer-inner">

      <div class="footer-brand">
        <span class="footer-name">MaryLó</span>
        <p class="footer-tagline">
          <em>Letras Dispersas</em> · Editorial Talón de Aquiles
        </p>
      </div>

      <nav class="footer-nav" aria-label="Pie de página">
        <ul role="list">
          <li><a href="#libro">El libro</a></li>
          <li><a href="#autora">La autora</a></li>
          <li><a href="#contacto">Contacto</a></li>
          <li>
            <a
              href="https://www.instagram.com/marylowriter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram de Mary López (se abre en nueva pestaña)"
            >
              Instagram
            </a>
          </li>
        </ul>
      </nav>

      <div class="footer-buy">
        <a
          href="https://editorial.talondeaquiles.es/product/letras-dispersas/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary"
          aria-label="Comprar Letras Dispersas en la editorial (se abre en nueva pestaña)"
        >
          Comprar el libro
        </a>
      </div>

    </div>

    <div class="footer-bottom">
      <div class="container">
        <p>
          &copy; {{ currentYear }} Letras Dispersas · Publicado por
          <a
            href="https://editorial.talondeaquiles.es/"
            target="_blank"
            rel="noopener noreferrer"
          >Editorial Talón de Aquiles</a>
        </p>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.site-footer {
  background-color: var(--color-brown-dark);
  color: rgba(255, 255, 255, 0.75);
}

.footer-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: var(--sp-4);
  padding-top: var(--sp-5);
  padding-bottom: var(--sp-5);
  flex-wrap: wrap;
}

/* Brand */
.footer-name {
  display: block;
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-white);
  margin-bottom: 4px;
}

.footer-tagline {
  font-size: 0.9rem;
  color: rgba(255, 255, 255, 0.55);
  font-style: italic;
}

/* Nav */
.footer-nav ul {
  list-style: none;
  display: flex;
  gap: var(--sp-3);
  flex-wrap: wrap;
}

.footer-nav a {
  font-size: 0.9375rem;
  color: rgba(255, 255, 255, 0.7);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-nav a:hover {
  color: var(--color-white);
}

/* Buy button */
.footer-buy .btn {
  padding: 0.625rem 1.5rem;
  font-size: 0.9375rem;
}

/* Bottom bar */
.footer-bottom {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  padding: var(--sp-2) 0;
}

.footer-bottom p {
  font-size: 0.8125rem;
  color: rgba(255, 255, 255, 0.4);
}

.footer-bottom a {
  color: rgba(255, 255, 255, 0.55);
  text-decoration: none;
  transition: color var(--transition);
}

.footer-bottom a:hover {
  color: rgba(255, 255, 255, 0.85);
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 720px) {
  .footer-inner {
    flex-direction: column;
    align-items: flex-start;
    gap: var(--sp-3);
  }

  .footer-nav ul {
    gap: var(--sp-2);
  }
}
</style>

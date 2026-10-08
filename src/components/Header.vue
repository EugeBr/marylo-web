<template>
  <header class="site-header" :class="{ scrolled: isScrolled, 'menu-open': menuOpen }">
    <div class="container header-inner">
      <a href="#libro" class="brand" aria-label="Letras Dispersas — volver al inicio">
        <span class="brand-name">MaryLó</span>
      </a>

      <nav class="main-nav" aria-label="Navegación principal">
        <ul role="list">
          <li><a href="#libro" @click="closeMenu">El libro</a></li>
          <li><a href="#autora" @click="closeMenu">La autora</a></li>
          <li><a href="#contacto" @click="closeMenu">Contacto</a></li>
        </ul>
      </nav>

      <button
        class="menu-toggle"
        :aria-expanded="menuOpen.toString()"
        aria-controls="mobile-menu"
        aria-label="Abrir menú de navegación"
        @click="toggleMenu"
      >
        <span class="hamburger" aria-hidden="true">
          <span></span>
          <span></span>
          <span></span>
        </span>
      </button>
    </div>

    <!-- Mobile nav -->
    <div id="mobile-menu" class="mobile-nav" :class="{ open: menuOpen }" aria-hidden="!menuOpen">
      <nav aria-label="Navegación móvil">
        <ul role="list">
          <li><a href="#libro" @click="closeMenu">El libro</a></li>
          <li><a href="#autora" @click="closeMenu">La autora</a></li>
          <li><a href="#contacto" @click="closeMenu">Contacto</a></li>
        </ul>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

function toggleMenu() {
  menuOpen.value = !menuOpen.value
}

function closeMenu() {
  menuOpen.value = false
}

function handleScroll() {
  isScrolled.value = window.scrollY > 40
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll, { passive: true })
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.site-header {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 100;
  background-color: transparent;
  transition: background-color 0.35s ease, box-shadow 0.35s ease;
}

.site-header.scrolled {
  background-color: rgba(250, 248, 243, 0.96);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  box-shadow: 0 1px 0 var(--color-border);
}

.header-inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 72px;
}

/* Brand */
.brand {
  text-decoration: none;
}

.brand-name {
  font-family: var(--font-serif);
  font-size: 1.375rem;
  font-weight: 600;
  color: var(--color-brown-dark);
  letter-spacing: 0.01em;
  transition: color var(--transition);
}

.brand:hover .brand-name {
  color: var(--color-terracotta);
}

/* Desktop nav */
.main-nav {
  display: flex;
}

.main-nav ul {
  display: flex;
  list-style: none;
  gap: var(--sp-4);
}

.main-nav a {
  font-family: var(--font-body);
  font-size: 1rem;
  font-weight: 400;
  color: var(--color-brown-mid);
  text-decoration: none;
  letter-spacing: 0.02em;
  padding-bottom: 2px;
  border-bottom: 1px solid transparent;
  transition: color var(--transition), border-color var(--transition);
}

.main-nav a:hover {
  color: var(--color-terracotta);
  border-bottom-color: var(--color-terracotta);
}

/* Hamburger */
.menu-toggle {
  display: none;
  background: none;
  border: none;
  cursor: pointer;
  padding: var(--sp-1);
  color: var(--color-brown-dark);
}

.hamburger {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 24px;
  height: 18px;
}

.hamburger span {
  display: block;
  height: 1.5px;
  width: 100%;
  background-color: currentColor;
  border-radius: 1px;
  transition: transform 0.25s ease, opacity 0.25s ease;
  transform-origin: center;
}

.site-header.menu-open .hamburger span:nth-child(1) {
  transform: translateY(8.25px) rotate(45deg);
}
.site-header.menu-open .hamburger span:nth-child(2) {
  opacity: 0;
}
.site-header.menu-open .hamburger span:nth-child(3) {
  transform: translateY(-8.25px) rotate(-45deg);
}

/* Mobile nav */
.mobile-nav {
  display: none;
  background-color: rgba(250, 248, 243, 0.98);
  border-top: 1px solid var(--color-border);
  overflow: hidden;
  max-height: 0;
  transition: max-height 0.35s ease;
}

.mobile-nav.open {
  max-height: 300px;
}

.mobile-nav ul {
  list-style: none;
  padding: var(--sp-2) 0 var(--sp-3);
}

.mobile-nav li {
  border-bottom: 1px solid var(--color-border);
}
.mobile-nav li:last-child { border-bottom: none; }

.mobile-nav a {
  display: block;
  padding: var(--sp-2) var(--gutter);
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: var(--color-brown-dark);
  text-decoration: none;
  transition: color var(--transition);
}

.mobile-nav a:hover {
  color: var(--color-terracotta);
}

/* Responsive */
@media (max-width: 680px) {
  .main-nav { display: none; }
  .menu-toggle { display: flex; }
  .mobile-nav { display: block; }
}
</style>

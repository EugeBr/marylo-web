<template>
  <div id="app-root">
    <AppHeader />
    <main>
      <HeroBook id="libro" />
      <AboutAuthor id="autora" />
      <ContactSection id="contacto" />
    </main>
    <AppFooter />
  </div>
</template>

<script setup>
import AppHeader from './components/Header.vue'
import HeroBook from './components/Hero.vue'
import AboutAuthor from './components/AboutAuthor.vue'
import ContactSection from './components/Contact.vue'
import AppFooter from './components/Footer.vue'
</script>

<style scoped>
#app-root {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

main {
  flex: 1;
}
</style>

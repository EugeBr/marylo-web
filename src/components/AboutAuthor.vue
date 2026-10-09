<template>
  <section class="about" aria-labelledby="about-heading">
    <div class="about-bg-strip" aria-hidden="true"></div>

    <div class="container about-inner">

      <!-- Photo -->
      <div class="author-photo-wrap">
        <div class="author-photo-frame">
          <img
            v-if="!photoError"
            :src="`${BASE_URL}images/author.jpg`"
            alt="Fotografía de Mary López, autora de Letras Dispersas"
            class="author-photo"
            width="400"
            height="500"
            loading="lazy"
            @error="photoError = true"
          />
          <div v-else class="author-photo-placeholder" aria-hidden="true">
            <svg width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1" aria-hidden="true">
              <circle cx="12" cy="8" r="4"/>
              <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
            </svg>
            <span>[AUTHOR_PHOTO]</span>
          </div>
        </div>
      </div>

      <!-- Bio -->
      <div class="author-bio">
        <span class="section-label">La autora</span>
        <h2 id="about-heading" class="author-name">Mary López</h2>

        <div class="bio-text">
          <!-- AUTHOR_BIO_PENDING — reemplazar con la biografía real cuando esté disponible -->
          <p>
            MaryLó es escritora y poeta comprometida con la realidad de su tiempo.
            En sus letras no hay escapismo: hay ojos abiertos, corazón en guardia
            y la voluntad de que las palabras sirvan para algo.
          </p>
          <p>
            Con <em>Letras Dispersas</em> da voz a quienes a menudo no la tienen —
            los olvidados, los invisibles, los que el sistema prefiere no ver —
            y lo hace con una sensibilidad que sacude sin estridencias.
          </p>
          <p>
            Puedes seguir su camino literario en Instagram
            <a
              href="https://www.instagram.com/marylowriter/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Perfil de Instagram de Mary López (se abre en nueva pestaña)"
            >@marylowriter</a>.
          </p>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const BASE_URL = import.meta.env.BASE_URL
const photoError = ref(false)
</script>

<style scoped>
.about {
  position: relative;
  padding: var(--sp-7) 0;
  background-color: var(--color-ivory);
}

/* Subtle left accent strip */
.about-bg-strip {
  position: absolute;
  top: 0; left: 0; bottom: 0;
  width: 4px;
  background-color: var(--color-terracotta);
  opacity: 0.25;
}

.about-inner {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
}

/* ---- Photo ---- */
.author-photo-wrap {
  display: flex;
  justify-content: center;
}

.author-photo-frame {
  width: 100%;
  max-width: 300px;
  position: relative;
}

.author-photo {
  width: 100%;
  height: auto;
  aspect-ratio: 4 / 5;
  object-fit: cover;
  border-radius: 3px;
  box-shadow: 4px 8px 24px rgba(42, 26, 14, 0.14);
}

/* Photo placeholder */
.author-photo-placeholder {
  width: 100%;
  aspect-ratio: 4 / 5;
  background-color: var(--color-border);
  border-radius: 3px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-2);
  color: var(--color-warm-gray);
  font-size: 0.875rem;
  font-style: italic;
}

/* ---- Bio ---- */
.author-bio {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.author-name {
  font-size: clamp(2rem, 4vw, 3rem);
  font-weight: 700;
  margin-top: var(--sp-1);
  margin-bottom: var(--sp-3);
}

.bio-text {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  color: var(--color-brown-mid);
  font-size: 1.0625rem;
  line-height: 1.75;
  margin-bottom: var(--sp-4);
  max-width: 52ch;
}

.bio-text a {
  color: var(--color-terracotta);
  border-bottom: 1px solid var(--color-border);
  transition: border-color var(--transition);
}

.bio-text a:hover {
  border-bottom-color: var(--color-terracotta);
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 860px) {
  .about-inner {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
  }

  .author-photo-frame {
    max-width: 200px;
  }

  .author-bio {
    align-items: center;
  }

  .bio-text {
    text-align: left;
    max-width: 58ch;
  }
}

@media (max-width: 480px) {
  .about {
    padding: var(--sp-5) 0;
  }

  .author-photo-frame {
    max-width: 160px;
  }
}
</style>

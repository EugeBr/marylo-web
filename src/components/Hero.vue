<template>
  <section class="hero" aria-labelledby="book-title">
    <div class="container hero-inner">

      <!-- Book cover -->
      <div class="book-cover-wrap">
        <div class="book-cover-frame">
          <img
            v-if="!coverError"
            src="/images/book-cover.png"
            alt="Portada del libro Letras Dispersas de Mary López"
            class="book-cover"
            width="380"
            height="550"
            loading="eager"
            @error="coverError = true"
          />
          <!-- Placeholder shown if image fails to load -->
          <div v-else class="cover-placeholder" aria-hidden="true">
            <span class="cover-placeholder-title">Letras<br/>Dispersas</span>
            <span class="cover-placeholder-author">Mary López</span>
          </div>
        </div>
      </div>

      <!-- Book info -->
      <div class="book-info">
        <span class="section-label">Poesía · Editorial Talón de Aquiles</span>

        <h1 id="book-title" class="book-title">Letras<br class="title-br"/> Dispersas</h1>

        <p class="book-author">por <strong>Mary López</strong></p>

        <p class="book-tagline">
          <em>Un clamor lírico contra el olvido<br/>y la indiferencia</em>
        </p>

        <div class="divider" aria-hidden="true"></div>

        <div class="book-synopsis">
          <p>
            <em>Letras Dispersas</em> es un libro que da voz a quienes el mundo prefiere no ver:
            los ancianos arrancados de sus hogares, los niños de la calle
            instrumentalizados por el poder. Con una palabra honesta y comprometida,
            MaryLó nos invita a no mirar hacia otro lado, a confrontar la frialdad
            que nos rodea y a recuperar la capacidad de sentir el dolor ajeno como propio.
          </p>
          <p>
            Una poesía que duele, que incomoda, que despierta.
          </p>
        </div>

        <a
          href="https://editorial.talondeaquiles.es/product/letras-dispersas/"
          target="_blank"
          rel="noopener noreferrer"
          class="btn btn-primary cta-btn"
          aria-label="Comprar Letras Dispersas en Editorial Talón de Aquiles (se abre en nueva pestaña)"
        >
          Descubrir el libro
          <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true" focusable="false">
            <path d="M3 8h10M9 4l4 4-4 4" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>

        <p class="book-price">17,31 € · Disponible en Editorial Talón de Aquiles</p>
      </div>

    </div>

    <!-- Background decoration -->
    <div class="hero-bg-decoration" aria-hidden="true"></div>
  </section>
</template>

<script setup>
import { ref } from 'vue'
const coverError = ref(false)
</script>

<style scoped>
.hero {
  position: relative;
  padding-top: calc(72px + var(--sp-7));
  padding-bottom: var(--sp-7);
  overflow: hidden;
  background-color: var(--color-cream);
  min-height: 100vh;
  display: flex;
  align-items: center;
}

/* Subtle background texture */
.hero-bg-decoration {
  position: absolute;
  inset: 0;
  background-image:
    radial-gradient(ellipse at 70% 20%, rgba(168, 86, 60, 0.06) 0%, transparent 55%),
    radial-gradient(ellipse at 15% 80%, rgba(122, 138, 110, 0.07) 0%, transparent 50%);
  pointer-events: none;
}

.hero-inner {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: center;
  position: relative;
  z-index: 1;
}

/* ---- Book cover ---- */
.book-cover-wrap {
  display: flex;
  justify-content: center;
}

.book-cover-frame {
  position: relative;
  width: 100%;
  max-width: 340px;
}

.book-cover {
  width: 100%;
  height: auto;
  border-radius: 3px 6px 6px 3px;
  box-shadow: var(--shadow-book);
  object-fit: cover;
}

/* Cover placeholder */
.cover-placeholder {
  width: 100%;
  aspect-ratio: 2 / 3;
  background: linear-gradient(150deg, #E8D5C3 0%, #D4B898 100%);
  border-radius: 3px 6px 6px 3px;
  box-shadow: var(--shadow-book);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: var(--sp-3);
  padding: var(--sp-4);
  text-align: center;
}

.cover-placeholder-title {
  font-family: var(--font-serif);
  font-size: clamp(1.5rem, 4vw, 2.5rem);
  font-weight: 700;
  color: #5C3B22;
  line-height: 1.15;
}

.cover-placeholder-author {
  font-family: var(--font-body);
  font-size: 1rem;
  font-style: italic;
  color: #7A5A3A;
  letter-spacing: 0.08em;
}

/* ---- Book info ---- */
.book-info {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.book-title {
  font-size: clamp(2.5rem, 5.5vw, 4.25rem);
  font-weight: 700;
  color: var(--color-brown-dark);
  margin-top: var(--sp-1);
  margin-bottom: var(--sp-2);
  letter-spacing: -0.01em;
}

.title-br { display: none; }

.book-author {
  font-family: var(--font-body);
  font-size: 1.125rem;
  color: var(--color-warm-gray);
  margin-bottom: var(--sp-3);
  letter-spacing: 0.01em;
}

.book-author strong {
  color: var(--color-brown-mid);
  font-weight: 600;
}

.book-tagline {
  font-family: var(--font-serif);
  font-size: clamp(1.0625rem, 2vw, 1.25rem);
  color: var(--color-brown-mid);
  line-height: 1.45;
  margin-bottom: var(--sp-3);
}

.divider {
  width: 48px;
  height: 1px;
  background-color: var(--color-terracotta);
  margin-bottom: var(--sp-3);
  opacity: 0.6;
}

.book-synopsis {
  display: flex;
  flex-direction: column;
  gap: var(--sp-2);
  color: var(--color-brown-mid);
  font-size: 1.0625rem;
  line-height: 1.75;
  margin-bottom: var(--sp-4);
  max-width: 52ch;
}

.cta-btn {
  align-self: flex-start;
  margin-bottom: var(--sp-2);
}

.book-price {
  font-size: 0.875rem;
  color: var(--color-warm-gray);
  font-style: italic;
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 860px) {
  .hero-inner {
    grid-template-columns: 1fr;
    justify-items: center;
    text-align: center;
    gap: var(--sp-5);
  }

  .book-cover-frame {
    max-width: 240px;
  }

  .book-info {
    align-items: center;
  }

  .book-synopsis {
    text-align: left;
    max-width: 58ch;
  }

  .divider {
    margin-inline: auto;
  }

  .title-br { display: block; }

  .cta-btn {
    align-self: center;
  }
}

@media (max-width: 480px) {
  .hero {
    padding-top: calc(72px + var(--sp-5));
    padding-bottom: var(--sp-5);
  }

  .book-cover-frame {
    max-width: 200px;
  }

  .book-title {
    font-size: 2.25rem;
  }
}
</style>

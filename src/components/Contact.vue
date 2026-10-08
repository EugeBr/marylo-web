<template>
  <section class="contact" aria-labelledby="contact-heading">
    <div class="container contact-inner">

      <div class="contact-header">
        <span class="section-label">Contacto</span>
        <h2 id="contact-heading" class="contact-title">
          ¿Te llegó al alma?<br/>
          <em>Cuéntame.</em>
        </h2>
        <p class="contact-subtitle">
          Me alegra mucho saber qué te pareció el libro, si tienes alguna pregunta
          o simplemente quieres decir hola. Leo todos los mensajes.
        </p>
      </div>

      <!-- Success state -->
      <div v-if="submitted" class="form-success" role="alert" aria-live="polite">
        <div class="success-icon" aria-hidden="true">✓</div>
        <h3>¡Mensaje recibido!</h3>
        <p>Gracias por escribirme. Te respondo en cuanto pueda.</p>
        <button class="btn btn-primary" @click="resetForm">Enviar otro mensaje</button>
      </div>

      <!-- Contact form -->
      <form
        v-else
        class="contact-form"
        @submit.prevent="handleSubmit"
        novalidate
        aria-label="Formulario de contacto"
      >
        <!-- INTEGRATION NOTE:
             Para conectar con un servicio externo, reemplaza handleSubmit():
             - Formspree:       POST a https://formspree.io/f/{ID}
             - Netlify Forms:   añadir data-netlify="true" al <form>
             - Resend / EmailJS: llamar a su API en handleSubmit()
        -->

        <div class="field" :class="{ 'has-error': errors.nombre }">
          <label for="nombre">Nombre <span class="required" aria-hidden="true">*</span></label>
          <input
            id="nombre"
            v-model.trim="form.nombre"
            type="text"
            name="nombre"
            autocomplete="given-name"
            placeholder="Tu nombre"
            :aria-describedby="errors.nombre ? 'error-nombre' : undefined"
            :aria-invalid="errors.nombre ? 'true' : 'false'"
            @blur="validateField('nombre')"
          />
          <span v-if="errors.nombre" id="error-nombre" class="field-error" role="alert">
            {{ errors.nombre }}
          </span>
        </div>

        <div class="field" :class="{ 'has-error': errors.email }">
          <label for="email">Email <span class="required" aria-hidden="true">*</span></label>
          <input
            id="email"
            v-model.trim="form.email"
            type="email"
            name="email"
            autocomplete="email"
            placeholder="tu@email.com"
            :aria-describedby="errors.email ? 'error-email' : undefined"
            :aria-invalid="errors.email ? 'true' : 'false'"
            @blur="validateField('email')"
          />
          <span v-if="errors.email" id="error-email" class="field-error" role="alert">
            {{ errors.email }}
          </span>
        </div>

        <div class="field" :class="{ 'has-error': errors.mensaje }">
          <label for="mensaje">Mensaje <span class="required" aria-hidden="true">*</span></label>
          <textarea
            id="mensaje"
            v-model.trim="form.mensaje"
            name="mensaje"
            rows="5"
            placeholder="Escribe aquí lo que quieras contarme…"
            :aria-describedby="errors.mensaje ? 'error-mensaje' : undefined"
            :aria-invalid="errors.mensaje ? 'true' : 'false'"
            @blur="validateField('mensaje')"
          ></textarea>
          <span v-if="errors.mensaje" id="error-mensaje" class="field-error" role="alert">
            {{ errors.mensaje }}
          </span>
        </div>

        <p class="required-note">
          <span class="required" aria-hidden="true">*</span> Campos obligatorios
        </p>

        <button
          type="submit"
          class="btn btn-primary submit-btn"
          :disabled="sending"
          :aria-busy="sending"
        >
          <span v-if="!sending">Enviar mensaje</span>
          <span v-else>Enviando…</span>
        </button>
      </form>

    </div>
  </section>
</template>

<script setup>
import { ref, reactive } from 'vue'

const submitted = ref(false)
const sending = ref(false)

const form = reactive({
  nombre: '',
  email: '',
  mensaje: '',
})

const errors = reactive({
  nombre: '',
  email: '',
  mensaje: '',
})

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validateField(field) {
  if (field === 'nombre') {
    errors.nombre = form.nombre.length < 2 ? 'Por favor, escribe tu nombre.' : ''
  }
  if (field === 'email') {
    if (!form.email) {
      errors.email = 'El email es obligatorio.'
    } else if (!EMAIL_RE.test(form.email)) {
      errors.email = 'Introduce un email válido.'
    } else {
      errors.email = ''
    }
  }
  if (field === 'mensaje') {
    errors.mensaje = form.mensaje.length < 10 ? 'Por favor, escribe un mensaje (mínimo 10 caracteres).' : ''
  }
}

function validateAll() {
  validateField('nombre')
  validateField('email')
  validateField('mensaje')
  return !errors.nombre && !errors.email && !errors.mensaje
}

async function handleSubmit() {
  if (!validateAll()) return

  sending.value = true

  // Simulated delay — replace with real API call when integrating a form provider
  await new Promise(r => setTimeout(r, 900))

  sending.value = false
  submitted.value = true
}

function resetForm() {
  form.nombre = ''
  form.email = ''
  form.mensaje = ''
  errors.nombre = ''
  errors.email = ''
  errors.mensaje = ''
  submitted.value = false
}
</script>

<style scoped>
.contact {
  padding: var(--sp-7) 0;
  background-color: var(--color-cream);
}

.contact-inner {
  display: grid;
  grid-template-columns: minmax(0, 2fr) minmax(0, 3fr);
  gap: clamp(2.5rem, 6vw, 5rem);
  align-items: start;
}

/* ---- Header ---- */
.contact-title {
  font-size: clamp(1.875rem, 4vw, 2.75rem);
  font-weight: 700;
  margin-top: var(--sp-1);
  margin-bottom: var(--sp-3);
  line-height: 1.25;
}

.contact-title em {
  color: var(--color-terracotta);
  font-style: italic;
}

.contact-subtitle {
  color: var(--color-brown-mid);
  font-size: 1.0625rem;
  line-height: 1.7;
  max-width: 36ch;
}

/* ---- Form ---- */
.contact-form {
  display: flex;
  flex-direction: column;
  gap: var(--sp-3);
}

.field {
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.field label {
  font-family: var(--font-body);
  font-size: 0.9375rem;
  font-weight: 600;
  color: var(--color-brown-dark);
  letter-spacing: 0.01em;
}

.required {
  color: var(--color-terracotta);
}

.field input,
.field textarea {
  font-family: var(--font-body);
  font-size: 1rem;
  color: var(--color-brown-dark);
  background-color: var(--color-white);
  border: 1.5px solid var(--color-border);
  border-radius: var(--radius);
  padding: 0.75rem 1rem;
  transition: border-color var(--transition), box-shadow var(--transition);
  line-height: 1.6;
  width: 100%;
  appearance: none;
}

.field input::placeholder,
.field textarea::placeholder {
  color: var(--color-warm-gray);
  opacity: 0.8;
}

.field input:focus,
.field textarea:focus {
  outline: none;
  border-color: var(--color-terracotta);
  box-shadow: 0 0 0 3px rgba(168, 86, 60, 0.15);
}

.field textarea {
  resize: vertical;
  min-height: 130px;
}

.field.has-error input,
.field.has-error textarea {
  border-color: var(--color-error);
}

.field-error {
  font-size: 0.875rem;
  color: var(--color-error);
  font-style: italic;
}

.required-note {
  font-size: 0.8125rem;
  color: var(--color-warm-gray);
  font-style: italic;
  margin-top: calc(-1 * var(--sp-1));
}

.submit-btn {
  align-self: flex-start;
  min-width: 180px;
}

.submit-btn:disabled {
  opacity: 0.65;
  cursor: not-allowed;
  transform: none;
}

/* ---- Success ---- */
.form-success {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: var(--sp-2);
}

.success-icon {
  width: 52px;
  height: 52px;
  background-color: var(--color-success);
  color: var(--color-white);
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.375rem;
  font-weight: 700;
  margin-bottom: var(--sp-1);
}

.form-success h3 {
  font-size: 1.5rem;
}

.form-success p {
  color: var(--color-brown-mid);
  max-width: 40ch;
  margin-bottom: var(--sp-2);
}

/* =============================================
   RESPONSIVE
   ============================================= */
@media (max-width: 860px) {
  .contact-inner {
    grid-template-columns: 1fr;
    gap: var(--sp-4);
  }

  .contact-subtitle {
    max-width: none;
  }
}

@media (max-width: 480px) {
  .contact {
    padding: var(--sp-5) 0;
  }

  .submit-btn {
    align-self: stretch;
    width: 100%;
  }
}
</style>

<script setup>
import { ref, defineProps, defineEmits } from 'vue';

const props = defineProps({
  personal: Object
});

const emits = defineEmits(['show-toast']);

const name = ref('');
const email = ref('');
const message = ref('');

function handleSubmit() {
  if (!name.value || !email.value || !message.value) return;
  emits('show-toast', `✨ Terima kasih ${name.value}! Pesan Anda telah berhasil terkirim ke Iqbal.`);
  name.value = '';
  email.value = '';
  message.value = '';
}

function copyEmail() {
  navigator.clipboard.writeText(props.personal.email);
  emits('show-toast', '📋 Email Iqbal Maulana telah disalin ke clipboard!');
}
</script>

<template>
  <section class="section contact-section" id="contact">
    <div class="container">
      <div class="contact-card-box reveal">
        <div class="contact-left-info">
          <div class="badge-pill">05 // HUBUNGI SAYA</div>
          <h2 class="contact-title">Mari Berdiskusi & Berkolaborasi</h2>
          <p class="contact-subtext">
            Punya proyek aplikasi web, sistem POS, game Unity, tawaran magang, atau sekadar ingin menyapa? Silakan kirim pesan.
          </p>

          <div class="email-action-box">
            <div class="info-lbl">EMAIL DIRECT</div>
            <div class="email-row">
              <span class="email-txt">{{ personal.email }}</span>
              <button class="btn-copy-email" @click="copyEmail" title="Salin Email">
                <i class="fa-regular fa-copy"></i>
              </button>
            </div>
          </div>

          <div class="social-pills-row">
            <a :href="personal.github" target="_blank" class="social-pill">
              <i class="fa-brands fa-github"></i> GitHub ↗
            </a>
            <a :href="personal.linkedin" target="_blank" class="social-pill">
              <i class="fa-brands fa-linkedin"></i> LinkedIn ↗
            </a>
          </div>
        </div>

        <form @submit.prevent="handleSubmit" class="contact-form-col">
          <div class="input-field-group">
            <label class="input-lbl">Nama Lengkap</label>
            <input type="text" v-model="name" class="styled-input" placeholder="Masukkan nama Anda..." required>
          </div>

          <div class="input-field-group">
            <label class="input-lbl">Alamat Email</label>
            <input type="email" v-model="email" class="styled-input" placeholder="nama@perusahaan.com" required>
          </div>

          <div class="input-field-group">
            <label class="input-lbl">Pesan / Detail Proyek</label>
            <textarea v-model="message" class="styled-input text-area" placeholder="Tuliskan ide proyek atau pesan Anda..." required></textarea>
          </div>

          <button type="submit" class="btn-send-message">
            Kirim Pesan ke Iqbal <i class="fa-solid fa-paper-plane"></i>
          </button>
        </form>
      </div>
    </div>
  </section>
</template>

<style scoped>
.contact-section {
  padding: 7rem 0;
}

.contact-card-box {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 3.5rem;
  display: grid;
  grid-template-columns: 1fr 1.1fr;
  gap: 3.5rem;
  backdrop-filter: blur(16px);
  box-shadow: var(--shadow-card);
  transition: var(--transition-normal);
}

.contact-card-box:hover {
  border-color: var(--accent-violet-border);
}

.contact-title {
  font-size: 2.2rem;
  font-weight: 800;
  line-height: 1.2;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.contact-subtext {
  font-size: 1.02rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 2.2rem;
}

.email-action-box {
  margin-bottom: 2rem;
}

.info-lbl {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
  font-weight: 700;
  margin-bottom: 0.3rem;
}

.email-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.email-txt {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--accent-violet);
}

.btn-copy-email {
  width: 32px;
  height: 32px;
  border-radius: var(--radius-xs);
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-copy-email:hover {
  border-color: var(--accent-violet);
  color: var(--accent-violet);
  background: var(--accent-violet-soft);
}

.social-pills-row {
  display: flex;
  gap: 0.8rem;
}

.social-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.45rem 1rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  text-decoration: none;
  transition: var(--transition-normal);
}

.social-pill:hover {
  border-color: var(--accent-violet-border);
  color: var(--accent-violet);
}

.contact-form-col {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.input-field-group {
  display: flex;
  flex-direction: column;
  gap: 0.4rem;
}

.input-lbl {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-secondary);
}

.styled-input {
  width: 100%;
  padding: 0.85rem 1.1rem;
  background: rgba(9, 9, 11, 0.8);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-sm);
  color: var(--text-primary);
  font-size: 0.95rem;
  outline: none;
  font-family: var(--font-main);
  transition: border-color 0.2s ease, box-shadow 0.2s ease;
}

.styled-input:focus {
  border-color: var(--accent-violet);
  box-shadow: 0 0 15px rgba(139, 92, 246, 0.2);
}

.text-area {
  min-height: 120px;
  resize: vertical;
}

.btn-send-message {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 0.7rem;
  padding: 0.95rem 2rem;
  background: #ffffff;
  color: #09090b;
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: var(--transition-normal);
  margin-top: 0.5rem;
}

.btn-send-message:hover {
  background: var(--accent-violet);
  color: #ffffff;
  transform: translateY(-2px);
  box-shadow: 0 10px 25px rgba(139, 92, 246, 0.35);
}

@media (max-width: 868px) {
  .contact-card-box { grid-template-columns: 1fr; gap: 2.5rem; padding: 2rem; }
}
</style>

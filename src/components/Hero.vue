<script setup>
import { ref, onMounted, defineProps, defineEmits } from 'vue';

const props = defineProps({
  personal: Object
});

const emits = defineEmits(['show-toast']);

const typewriterText = ref('Software, UI/UX & Game Engineer');
const phrases = [
  "Software, UI/UX & Game Engineer",
  "UI/UX & Product Designer",
  "Frontend & Web Developer",
  "Unity & C# Game Developer",
  "Full-Stack Web Architect"
];

function initTypewriter() {
  let i = 0, j = 0, isDeleting = false;
  function loop() {
    const current = phrases[i];
    typewriterText.value = isDeleting ? current.substring(0, j - 1) : current.substring(0, j + 1);
    j = isDeleting ? j - 1 : j + 1;

    let speed = isDeleting ? 35 : 80;
    if (!isDeleting && j === current.length) { isDeleting = true; speed = 2200; }
    else if (isDeleting && j === 0) { isDeleting = false; i = (i + 1) % phrases.length; speed = 300; }

    setTimeout(loop, speed);
  }
  loop();
}

function downloadCv() {
  emits('show-toast', '📄 Mengunduh CV_Iqbal_Maulana_Fajar.pdf ...');
}

onMounted(() => {
  initTypewriter();
});
</script>

<template>
  <section class="section hero-section" id="top">
    <div class="container hero-container">
      <div class="hero-top-badge reveal">
        <i class="fa-solid fa-sparkles text-violet"></i>
        <span>{{ personal.availability }}</span>
      </div>

      <h1 class="hero-main-headline reveal">
        Build. Solve. Create.
      </h1>

      <div class="hero-subheadline reveal">
        Halo, Saya <span class="highlight-name">{{ personal.name }}</span> — 
        <span class="typewriter-text">{{ typewriterText }}</span>
      </div>

      <p class="hero-bio-text reveal">{{ personal.bio }}</p>

      <div class="hero-cta-group reveal">
        <a href="#projects" class="btn-primary-pill">
          Jelajahi Portofolio <i class="fa-solid fa-arrow-right"></i>
        </a>
        <a href="#contact" class="btn-secondary-pill">
          Hubungi Saya <i class="fa-regular fa-paper-plane"></i>
        </a>
        <a 
          :href="personal.cvUrl || '/CV_Iqbal_Maulana_Fajar.pdf'" 
          download="CV_Iqbal_Maulana_Fajar.pdf"
          target="_blank"
          class="btn-ghost-pill" 
          @click="downloadCv"
        >
          <i class="fa-solid fa-file-arrow-down"></i> Unduh CV
        </a>
      </div>

      <!-- Quick Metrics Banner -->
      <div class="metrics-grid reveal">
        <div class="metric-card">
          <div class="metric-val">3+</div>
          <div class="metric-label">Tahun Pengalaman Coding</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">11+</div>
          <div class="metric-label">Repositori GitHub</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">Multi-Stack</div>
          <div class="metric-label">Web & Unity Game Engine</div>
        </div>
        <div class="metric-card">
          <div class="metric-val">100%</div>
          <div class="metric-label">Komitmen Kode Bersih</div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.hero-section {
  padding-top: 11rem;
  padding-bottom: 5rem;
  text-align: center;
}

.hero-container {
  display: flex;
  flex-direction: column;
  align-items: center;
}

.hero-top-badge {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.4rem 1.1rem;
  background: var(--accent-violet-soft);
  border: 1px solid var(--accent-violet-border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-violet);
  margin-bottom: 1.8rem;
}

.text-violet {
  color: var(--accent-violet);
}

.hero-main-headline {
  font-size: 4rem;
  font-weight: 700;
  line-height: 1.05;
  letter-spacing: -0.04em;
  margin-bottom: 1rem;
  color: var(--text-primary);
}

.hero-subheadline {
  font-size: 1.35rem;
  font-weight: 600;
  color: var(--text-secondary);
  margin-bottom: 1.25rem;
}

.highlight-name {
  color: var(--text-primary);
}

.typewriter-text {
  color: var(--accent-violet);
  font-weight: 700;
}

.hero-bio-text {
  font-size: 1.1rem;
  color: var(--text-secondary);
  line-height: 1.7;
  max-width: 720px;
  margin: 0 auto 2.5rem auto;
}

.hero-cta-group {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 5rem;
}

.btn-primary-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 2rem;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 700;
  color: #09090b;
  background: #ffffff;
  text-decoration: none;
  box-shadow: 0 0 25px rgba(255, 255, 255, 0.2);
  transition: var(--transition-normal);
}

.btn-primary-pill:hover {
  transform: translateY(-2px);
  box-shadow: 0 10px 30px rgba(139, 92, 246, 0.35);
  background: var(--accent-violet);
  color: #ffffff;
}

.btn-secondary-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.85rem 1.8rem;
  border-radius: var(--radius-full);
  font-size: 0.95rem;
  font-weight: 600;
  color: var(--text-primary);
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  text-decoration: none;
  backdrop-filter: blur(10px);
  transition: var(--transition-normal);
}

.btn-secondary-pill:hover {
  background: rgba(255, 255, 255, 0.1);
  border-color: var(--accent-violet-border);
  color: var(--accent-violet);
  transform: translateY(-2px);
}

.btn-ghost-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.5rem;
  border-radius: var(--radius-full);
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-secondary);
  background: transparent;
  border: 1px solid transparent;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-normal);
}

.btn-ghost-pill:hover {
  color: var(--text-primary);
  border-color: var(--border-color);
}

/* Metrics Grid */
.metrics-grid {
  width: 100%;
  padding: 2rem 2.5rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  backdrop-filter: blur(16px);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
}

.metric-card {
  text-align: center;
}

.metric-val {
  font-family: var(--font-heading);
  font-size: 2.3rem;
  font-weight: 700;
  color: var(--accent-violet);
  line-height: 1;
  margin-bottom: 0.35rem;
}

.metric-label {
  font-size: 0.85rem;
  color: var(--text-muted);
  font-weight: 600;
}

@media (max-width: 992px) {
  .hero-main-headline { font-size: 2.8rem; }
  .metrics-grid { grid-template-columns: repeat(2, 1fr); }
}
</style>

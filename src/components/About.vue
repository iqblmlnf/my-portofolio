<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  about: Object
});
</script>

<template>
  <section class="section about-section" id="about">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge-pill">01 // TENTANG SAYA</div>
        <h2 class="section-title">Eksplorasi Kode & Rekayasa Perangkat Lunak</h2>
        <p class="section-subtitle">Struktur bento modern yang mencerminkan cara kerja dan spektrum rekayasa saya.</p>
      </div>

      <div class="bento-grid">
        <!-- Card 1: Bio & Overview (Span 2) -->
        <div class="bento-card span-2 reveal">
          <div class="card-icon-header">
            <i class="fa-solid fa-code"></i>
          </div>
          <h3 class="bento-card-title">Profil & Pendekatan Rekayasa</h3>
          <p class="bento-card-text">{{ about.intro }}</p>

          <div class="code-pill-preview">
            <span class="kw">const</span> engineer = {<br>
            &nbsp;&nbsp;name: <span class="str">"Iqbal Maulana Fajar"</span>,<br>
            &nbsp;&nbsp;github: <span class="str">"@iqblmlnf"</span>,<br>
            &nbsp;&nbsp;web: [<span class="str">"Vue.js"</span>, <span class="str">"React.js"</span>, <span class="str">"Node.js"</span>],<br>
            &nbsp;&nbsp;gameDev: [<span class="str">"Unity Engine"</span>, <span class="str">"C# Scripting"</span>],<br>
            &nbsp;&nbsp;execute: () => <span class="func">buildHighPerformanceSoftware</span>()<br>
            };
          </div>
        </div>

        <!-- Card 2: Core Expertise List -->
        <div class="bento-card reveal">
          <div class="card-icon-header">
            <i class="fa-solid fa-layer-group"></i>
          </div>
          <h3 class="bento-card-title">Spektrum Keahlian</h3>
          <ul class="bento-list">
            <li><i class="fa-solid fa-circle-check text-violet"></i> Frontend (Vue.js, React.js, ES6+)</li>
            <li><i class="fa-solid fa-circle-check text-violet"></i> Backend (Node.js, Express, REST API)</li>
            <li><i class="fa-solid fa-circle-check text-violet"></i> Game Dev (Unity Engine & C#)</li>
            <li><i class="fa-solid fa-circle-check text-violet"></i> Augmented Reality (AR Foundation)</li>
            <li><i class="fa-solid fa-circle-check text-violet"></i> Basis Data (SQL, MySQL, PostgreSQL)</li>
            <li><i class="fa-solid fa-circle-check text-violet"></i> Version Control (Git & GitHub Flow)</li>
          </ul>
        </div>

        <!-- Card 3: 4 Engineering Pillars -->
        <div class="bento-card span-3 reveal">
          <div class="standards-banner">
            <div v-for="(p, idx) in about.philosophy" :key="idx" class="standard-item">
              <i class="fa-solid fa-cube standard-icon"></i>
              <div>
                <h4 class="standard-title">{{ p.title }}</h4>
                <p class="standard-desc">{{ p.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.bento-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.5rem;
}

.bento-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2.2rem;
  backdrop-filter: blur(16px);
  transition: var(--transition-normal);
  display: flex;
  flex-direction: column;
}

.bento-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-violet-border);
  transform: translateY(-4px);
  box-shadow: var(--shadow-card);
}

.bento-card.span-2 {
  grid-column: span 2;
}

.bento-card.span-3 {
  grid-column: span 3;
}

.card-icon-header {
  width: 48px;
  height: 48px;
  border-radius: var(--radius-md);
  background: var(--accent-violet-soft);
  border: 1px solid var(--accent-violet-border);
  color: var(--accent-violet);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  margin-bottom: 1.4rem;
}

.bento-card-title {
  font-size: 1.3rem;
  font-weight: 700;
  margin-bottom: 0.75rem;
  color: var(--text-primary);
}

.bento-card-text {
  font-size: 0.98rem;
  color: var(--text-secondary);
  line-height: 1.7;
}

.bento-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.8rem;
  font-size: 0.92rem;
  color: var(--text-secondary);
  margin-top: 0.5rem;
}

.text-violet {
  color: var(--accent-violet);
  margin-right: 0.5rem;
}

.code-pill-preview {
  background: #09090b;
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.1rem;
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: #a78bfa;
  margin-top: 1.5rem;
  line-height: 1.6;
}

.kw { color: #f472b6; }
.func { color: #60a5fa; }
.str { color: #a78bfa; }

.standards-banner {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 1.5rem;
}

.standard-item {
  display: flex;
  align-items: flex-start;
  gap: 0.8rem;
}

.standard-icon {
  font-size: 1.3rem;
  color: var(--accent-violet);
  margin-top: 0.2rem;
}

.standard-title {
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.standard-desc {
  font-size: 0.85rem;
  color: var(--text-secondary);
  line-height: 1.55;
}

@media (max-width: 992px) {
  .bento-grid { grid-template-columns: 1fr; }
  .bento-card.span-2, .bento-card.span-3 { grid-column: span 1; }
  .standards-banner { grid-template-columns: repeat(2, 1fr); gap: 1.5rem; }
}

@media (max-width: 576px) {
  .standards-banner { grid-template-columns: 1fr; }
}
</style>

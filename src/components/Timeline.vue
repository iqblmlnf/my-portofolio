<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  experience: Array
});
</script>

<template>
  <section class="section timeline-section" id="timeline">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge-pill">04 // REKAM JEJAK & PENGALAMAN</div>
        <h2 class="section-title">Perjalanan Akademik & Proyek</h2>
        <p class="section-subtitle">Histori pengalaman pengembang aplikasi web dan game interaktif.</p>
      </div>

      <div class="timeline-roadmap reveal">
        <div v-for="(e, index) in experience" :key="index" class="timeline-item">
          <div class="timeline-left">
            <div class="timeline-node"></div>
            <div class="timeline-period">{{ e.period }}</div>
          </div>

          <div class="timeline-right">
            <div class="exp-role-title">{{ e.role }}</div>
            <div class="exp-org-badge">{{ e.organization }}</div>
            <p class="exp-desc-text">{{ e.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.timeline-roadmap {
  display: flex;
  flex-direction: column;
  gap: 2.5rem;
  max-width: 820px;
  margin: 0 auto;
  position: relative;
}

.timeline-roadmap::before {
  content: '';
  position: absolute;
  top: 10px;
  bottom: 10px;
  left: 175px;
  width: 2px;
  background: var(--border-color);
}

.timeline-item {
  display: grid;
  grid-template-columns: 200px 1fr;
  gap: 2.5rem;
  align-items: flex-start;
  position: relative;
}

.timeline-left {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-right: 1.5rem;
  position: relative;
}

.timeline-node {
  position: absolute;
  right: -6px;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--accent-violet);
  box-shadow: 0 0 12px var(--accent-violet);
  z-index: 2;
}

.timeline-period {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-muted);
}

.timeline-right {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.6rem 2rem;
  backdrop-filter: blur(12px);
  transition: var(--transition-normal);
}

.timeline-item:hover .timeline-right {
  background: var(--bg-card-hover);
  border-color: var(--accent-violet-border);
  transform: translateX(4px);
}

.exp-role-title {
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 0.3rem;
}

.exp-org-badge {
  display: inline-block;
  font-family: var(--font-mono);
  font-size: 0.8rem;
  font-weight: 600;
  color: var(--accent-violet);
  margin-bottom: 0.8rem;
}

.exp-desc-text {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

@media (max-width: 768px) {
  .timeline-roadmap::before { display: none; }
  .timeline-item { grid-template-columns: 1fr; gap: 0.8rem; }
  .timeline-left { justify-content: flex-start; }
  .timeline-node { display: none; }
}
</style>

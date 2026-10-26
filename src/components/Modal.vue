<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  isOpen: Boolean,
  project: Object
});

const emits = defineEmits(['close']);
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isOpen && project" class="modal-overlay" @click.self="emits('close')">
      <div class="modal-card">
        <span class="modal-close" @click="emits('close')">&times;</span>

        <div style="font-family: var(--font-mono); font-size: 0.8rem; color: var(--accent); margin-bottom: 0.5rem;">
          {{ project.categoryLabel }} — {{ project.year }}
        </div>

        <h2 style="font-size: 1.8rem; font-weight: 700; margin-bottom: 1.5rem; color: var(--text-primary); line-height: 1.25;">
          {{ project.title }}
        </h2>

        <img :src="project.image" :alt="project.title" style="width: 100%; border-radius: var(--radius-md); margin-bottom: 1.8rem; border: 1px solid var(--border);">

        <div style="margin-bottom: 1.5rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Tantangan / Permasalahan</h4>
          <p style="color: var(--text-secondary); font-size: 0.98rem; line-height: 1.7;">{{ project.problem }}</p>
        </div>

        <div style="margin-bottom: 1.8rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.4rem;">Solusi & Pendekatan</h4>
          <p style="color: var(--text-secondary); font-size: 0.98rem; line-height: 1.7;">{{ project.solution }}</p>
        </div>

        <div style="margin-bottom: 2rem;">
          <h4 style="font-size: 1.05rem; font-weight: 700; color: var(--text-primary); margin-bottom: 0.6rem;">Teknologi Yang Digunakan</h4>
          <div class="pill-group">
            <span v-for="t in project.stack" :key="t" class="tech-pill" style="border-color: var(--accent); color: var(--text-primary);">{{ t }}</span>
          </div>
        </div>

        <div style="display: flex; gap: 1rem; flex-wrap: wrap;">
          <a v-if="project.demoUrl" :href="project.demoUrl" target="_blank" class="btn-primary">Live Demo ↗</a>
          <a v-if="project.githubUrl" :href="project.githubUrl" target="_blank" class="btn-ghost">Repository GitHub ↗</a>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.modal-overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(8px);
  z-index: 200;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1.5rem;
}

.modal-card {
  background: var(--bg-surface);
  border: 1px solid var(--border-hover);
  border-radius: var(--radius-lg);
  max-width: 760px;
  width: 100%;
  max-height: 85vh;
  overflow-y: auto;
  padding: 2.5rem;
  position: relative;
}

.modal-close {
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  font-size: 1.5rem;
  color: var(--text-muted);
  cursor: pointer;
}

.modal-close:hover {
  color: var(--text-primary);
}

.pill-group {
  display: flex;
  flex-wrap: wrap;
  gap: 0.6rem;
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  padding: 0.35rem 0.75rem;
  background: var(--bg-main);
  border: 1px solid var(--border);
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
}

.btn-primary {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  background: var(--text-primary);
  color: var(--bg-main);
  font-weight: 700;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
}

.btn-ghost {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.85rem 1.6rem;
  border: 1px solid var(--border-hover);
  color: var(--text-primary);
  font-weight: 600;
  font-size: 0.95rem;
  border-radius: var(--radius-sm);
}
</style>

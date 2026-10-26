<script setup>
import { ref, computed, defineProps, defineEmits } from 'vue';

const props = defineProps({
  projects: Array
});

const emits = defineEmits(['open-modal']);

const activeFilter = ref('all');

const filteredProjects = computed(() => {
  if (activeFilter.value === 'all') return props.projects;
  return props.projects.filter(p => p.category === activeFilter.value);
});
</script>

<template>
  <section class="section projects-section" id="projects">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge-pill">03 // PORTOFOLIO KARYA</div>
        <h2 class="section-title">Proyek & Hasil Rekayasa</h2>
        <p class="section-subtitle">Daftar proyek aplikasi web, sistem POS, dan game Unity pilihan yang saya kembangkan.</p>
      </div>

      <!-- Category Filter Pills -->
      <div class="filter-pills-row reveal">
        <button 
          :class="['filter-pill', { active: activeFilter === 'all' }]"
          @click="activeFilter = 'all'"
        >
          Semua Karya ({{ projects.length }})
        </button>
        <button 
          :class="['filter-pill', { active: activeFilter === 'webdev' }]"
          @click="activeFilter = 'webdev'"
        >
          Web App
        </button>
        <button 
          :class="['filter-pill', { active: activeFilter === 'uiux' }]"
          @click="activeFilter = 'uiux'"
        >
          UI/UX Design
        </button>
        <button 
          :class="['filter-pill', { active: activeFilter === 'gamedev' }]"
          @click="activeFilter = 'gamedev'"
        >
          Unity Game Dev
        </button>
      </div>

      <!-- Vue TransitionGroup Projects Showcase -->
      <TransitionGroup name="project-list" tag="div" class="projects-list-container">
        <div 
          v-for="p in filteredProjects" 
          :key="p.id" 
          class="project-browser-card"
        >
          <!-- Browser Frame Header -->
          <div class="browser-header">
            <div class="browser-dots">
              <span class="dot dot-red"></span>
              <span class="dot dot-yellow"></span>
              <span class="dot dot-green"></span>
            </div>
            <div class="browser-url-pill">
              <i class="fa-solid fa-lock text-violet"></i>
              <span>github.com/iqblmlnf/{{ p.id }}</span>
            </div>
            <div class="browser-year">{{ p.year }}</div>
          </div>

          <!-- Browser Card Content Grid -->
          <div class="browser-body">
            <div class="project-img-container">
              <img :src="p.image" :alt="p.title">
            </div>

            <div class="project-details">
              <div class="project-cat-badge">{{ p.categoryLabel }}</div>
              <h3 class="project-title-text">{{ p.title }}</h3>
              <p class="project-desc">{{ p.summary }}</p>

              <div class="tech-stack-pills">
                <span v-for="t in p.stack" :key="t" class="tech-pill">{{ t }}</span>
              </div>

              <div class="project-actions">
                <button class="btn-case-study" @click="emits('open-modal', p.id)">
                  Studi Kasus Lengkap <i class="fa-solid fa-arrow-right"></i>
                </button>
                <a :href="p.githubUrl" target="_blank" class="btn-github-code">
                  <i class="fa-brands fa-github"></i> Kode Repositori ↗
                </a>
              </div>
            </div>
          </div>
        </div>
      </TransitionGroup>
    </div>
  </section>
</template>

<style scoped>
.filter-pills-row {
  display: flex;
  justify-content: center;
  gap: 0.75rem;
  margin-bottom: 3.5rem;
  flex-wrap: wrap;
}

.filter-pill {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  padding: 0.45rem 1.2rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
  cursor: pointer;
  transition: var(--transition-normal);
}

.filter-pill:hover, .filter-pill.active {
  border-color: var(--accent-violet-border);
  color: var(--accent-violet);
  background: var(--accent-violet-soft);
}

.projects-list-container {
  display: flex;
  flex-direction: column;
  gap: 3rem;
  position: relative;
}

.project-browser-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(16px);
  transition: var(--transition-normal);
}

.project-browser-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-violet-border);
  transform: translateY(-4px);
}

.browser-header {
  background: rgba(18, 18, 21, 0.9);
  padding: 0.75rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.browser-dots {
  display: flex;
  gap: 0.45rem;
}

.dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.browser-url-pill {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.2rem 0.8rem;
  background: rgba(0, 0, 0, 0.4);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-muted);
  display: flex;
  align-items: center;
  gap: 0.4rem;
}

.text-violet {
  color: var(--accent-violet);
}

.browser-year {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  color: var(--text-muted);
  font-weight: 600;
}

.browser-body {
  display: grid;
  grid-template-columns: 1.15fr 0.85fr;
  gap: 2.5rem;
  padding: 2.2rem;
  align-items: center;
}

.project-img-container {
  aspect-ratio: 16 / 10;
  border-radius: var(--radius-md);
  overflow: hidden;
  border: 1px solid var(--border-color);
}

.project-img-container img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s var(--ease-smooth);
}

.project-browser-card:hover .project-img-container img {
  transform: scale(1.03);
}

.project-details {
  display: flex;
  flex-direction: column;
}

.project-cat-badge {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
  color: var(--accent-violet);
  margin-bottom: 0.6rem;
}

.project-title-text {
  font-size: 1.5rem;
  font-weight: 700;
  color: var(--text-primary);
  line-height: 1.25;
  margin-bottom: 0.85rem;
}

.project-desc {
  font-size: 0.95rem;
  color: var(--text-secondary);
  line-height: 1.65;
  margin-bottom: 1.5rem;
}

.tech-stack-pills {
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.8rem;
}

.tech-pill {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  padding: 0.3rem 0.7rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  border-radius: var(--radius-full);
}

.project-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
  flex-wrap: wrap;
}

.btn-case-study {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  background: var(--text-primary);
  color: var(--bg-dark);
  font-weight: 700;
  font-size: 0.88rem;
  border-radius: var(--radius-full);
  border: none;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-case-study:hover {
  background: var(--accent-violet);
  color: #ffffff;
  transform: translateY(-2px);
}

.btn-github-code {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.2rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  font-size: 0.88rem;
  font-weight: 600;
  border-radius: var(--radius-full);
  text-decoration: none;
  transition: var(--transition-normal);
}

.btn-github-code:hover {
  border-color: var(--accent-violet-border);
  color: var(--accent-violet);
}

@media (max-width: 868px) {
  .browser-body { grid-template-columns: 1fr; gap: 2rem; padding: 1.5rem; }
}
</style>

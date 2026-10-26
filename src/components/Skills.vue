<script setup>
import { ref } from 'vue';

const props = defineProps({
  skills: Object
});

const activeCategory = ref('frontend');

const skillMeters = {
  uiux: [
    { name: 'Figma & Penpot Prototyping', level: 92, icon: 'fa-brands fa-figma' },
    { name: 'User Interface (UI) Design', level: 90, icon: 'fa-solid fa-palette' },
    { name: 'User Experience (UX) Research', level: 86, icon: 'fa-solid fa-users-viewfinder' },
    { name: 'Wireframing & Layout Architecture', level: 88, icon: 'fa-solid fa-vector-square' },
    { name: 'Design System & Component Library', level: 89, icon: 'fa-solid fa-cubes-stacked' },
    { name: 'Micro-Interactions & Prototyping', level: 85, icon: 'fa-solid fa-wand-magic-sparkles' }
  ],
  frontend: [
    { name: 'Vue.js (Composition API & Pinia)', level: 92, icon: 'fa-brands fa-vuejs' },
    { name: 'React.js / Next.js', level: 85, icon: 'fa-brands fa-react' },
    { name: 'JavaScript (ES6+ & Async)', level: 90, icon: 'fa-brands fa-js' },
    { name: 'TypeScript Basics', level: 80, icon: 'fa-solid fa-code' },
    { name: 'HTML5 Semantik & CSS3 / Tailwind', level: 95, icon: 'fa-brands fa-html5' },
    { name: 'Vite & Webpack Tooling', level: 86, icon: 'fa-solid fa-bolt' }
  ],
  backend: [
    { name: 'Node.js & Express.js', level: 86, icon: 'fa-brands fa-node-js' },
    { name: 'RESTful API Architecture', level: 90, icon: 'fa-solid fa-network-wired' },
    { name: 'Python Backend Basics', level: 80, icon: 'fa-brands fa-python' },
    { name: 'SQL & Database (MySQL, Postgres)', level: 82, icon: 'fa-solid fa-database' },
    { name: 'Authentication (JWT & OAuth)', level: 85, icon: 'fa-solid fa-key' },
    { name: 'Postman & API Testing', level: 88, icon: 'fa-solid fa-vial' }
  ],
  game: [
    { name: 'Unity Engine (2D & 3D Development)', level: 86, icon: 'fa-solid fa-gamepad' },
    { name: 'C# Scripting & Object-Oriented Logic', level: 88, icon: 'fa-solid fa-code' },
    { name: 'Game Physics & Rigidbodies', level: 84, icon: 'fa-solid fa-cubes' },
    { name: 'Unity UI & Event Triggers', level: 85, icon: 'fa-solid fa-display' },
    { name: 'Asset Management & Prefab System', level: 88, icon: 'fa-solid fa-box-open' },
    { name: 'Interactive Game Mechanics & Logic', level: 85, icon: 'fa-solid fa-puzzle-piece' }
  ],
  tools: [
    { name: 'Git & GitHub Flow', level: 92, icon: 'fa-brands fa-github' },
    { name: 'VS Code Environment', level: 95, icon: 'fa-solid fa-laptop-code' },
    { name: 'Unity Hub & Editor', level: 86, icon: 'fa-solid fa-gamepad' },
    { name: 'Responsive Layout System', level: 94, icon: 'fa-solid fa-mobile-screen' },
    { name: 'Vercel & Netlify Deployment', level: 88, icon: 'fa-solid fa-cloud-arrow-up' },
    { name: 'NPM & Package Management', level: 90, icon: 'fa-brands fa-npm' }
  ]
};
</script>

<template>
  <section class="section skills-section" id="skills">
    <div class="container">
      <div class="section-header reveal">
        <div class="badge-pill">02 // KEAHLIAN & TEKNOLOGI</div>
        <h2 class="section-title">Spektrum Stack & Perangkat Kerja</h2>
        <p class="section-subtitle">Keahlian komprehensif melintasi UI/UX Design, Web Development (Vue, React), dan Unity Game Dev.</p>
      </div>

      <!-- Category Filter Pills -->
      <div class="category-pills-row reveal">
        <button 
          class="pill-filter-btn" 
          :class="{ active: activeCategory === 'uiux' }" 
          @click="activeCategory = 'uiux'"
        >
          <i class="fa-solid fa-palette"></i> UI/UX Design
        </button>
        <button 
          class="pill-filter-btn" 
          :class="{ active: activeCategory === 'frontend' }" 
          @click="activeCategory = 'frontend'"
        >
          <i class="fa-brands fa-vuejs"></i> Frontend Web
        </button>
        <button 
          class="pill-filter-btn" 
          :class="{ active: activeCategory === 'backend' }" 
          @click="activeCategory = 'backend'"
        >
          <i class="fa-solid fa-server"></i> Backend & API
        </button>
        <button 
          class="pill-filter-btn" 
          :class="{ active: activeCategory === 'game' }" 
          @click="activeCategory = 'game'"
        >
          <i class="fa-solid fa-gamepad"></i> Unity Engine & C#
        </button>
        <button 
          class="pill-filter-btn" 
          :class="{ active: activeCategory === 'tools' }" 
          @click="activeCategory = 'tools'"
        >
          <i class="fa-solid fa-screwdriver-wrench"></i> Tools & DevOps
        </button>
      </div>

      <!-- Skill Cards Grid -->
      <div class="skills-grid reveal">
        <div 
          v-for="skill in skillMeters[activeCategory]" 
          :key="skill.name" 
          class="skill-item-card"
        >
          <div class="skill-card-top">
            <div class="skill-name">
              <i :class="skill.icon" class="skill-icon"></i>
              <span>{{ skill.name }}</span>
            </div>
            <div class="skill-pct">{{ skill.level }}%</div>
          </div>

          <div class="skill-bar-bg">
            <div class="skill-bar-fill" :style="{ width: skill.level + '%' }"></div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.category-pills-row {
  display: flex;
  justify-content: center;
  gap: 0.8rem;
  margin-bottom: 3rem;
  flex-wrap: wrap;
}

.pill-filter-btn {
  padding: 0.6rem 1.4rem;
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  color: var(--text-secondary);
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.55rem;
  transition: var(--transition-normal);
}

.pill-filter-btn.active, .pill-filter-btn:hover {
  background: var(--accent-violet-soft);
  border-color: var(--accent-violet-border);
  color: var(--accent-violet);
}

.skills-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;
}

.skill-item-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  padding: 1.25rem 1.5rem;
  backdrop-filter: blur(12px);
  transition: var(--transition-normal);
}

.skill-item-card:hover {
  background: var(--bg-card-hover);
  border-color: var(--accent-violet-border);
  transform: translateY(-2px);
}

.skill-card-top {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 0.8rem;
}

.skill-name {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  font-size: 0.95rem;
  font-weight: 700;
  color: var(--text-primary);
}

.skill-icon {
  color: var(--accent-violet);
  font-size: 1.15rem;
}

.skill-pct {
  font-family: var(--font-mono);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--accent-violet);
}

.skill-bar-bg {
  width: 100%;
  height: 7px;
  background: rgba(255, 255, 255, 0.08);
  border-radius: var(--radius-full);
  overflow: hidden;
}

.skill-bar-fill {
  height: 100%;
  background: linear-gradient(90deg, #6d28d9, #8b5cf6);
  border-radius: var(--radius-full);
  transition: width 0.8s var(--ease-smooth);
}

@media (max-width: 868px) {
  .skills-grid { grid-template-columns: 1fr; }
}
</style>

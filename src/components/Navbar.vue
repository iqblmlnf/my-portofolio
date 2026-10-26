<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  theme: String,
  personal: Object
});

const emits = defineEmits(['toggle-theme']);
</script>

<template>
  <header class="navbar-wrapper">
    <div class="container">
      <nav class="nav-glass-bar">
        <!-- Brand Logo -->
        <a href="#top" class="brand-logo">
          iqbal<span class="brand-dot">.</span>
        </a>

        <!-- Navigation Links -->
        <ul class="nav-menu">
          <li><a href="#about" class="nav-link">Tentang</a></li>
          <li><a href="#skills" class="nav-link">Keahlian</a></li>
          <li><a href="#projects" class="nav-link">Portofolio</a></li>
          <li><a href="#timeline" class="nav-link">Pengalaman</a></li>
          <li><a href="#contact" class="nav-link">Kontak</a></li>
        </ul>

        <!-- Right Action Group -->
        <div class="nav-actions">
          <div class="status-pill">
            <span class="pulse-violet"></span>
            <span class="status-text">Ready for Hire</span>
          </div>

          <button class="theme-toggle" @click="emits('toggle-theme')" title="Ganti Mode Tampilan">
            <i :class="theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></i>
          </button>
        </div>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.navbar-wrapper {
  position: sticky;
  top: 1.25rem;
  z-index: 1000;
  margin-bottom: -5rem;
}

.nav-glass-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.7rem 1.5rem;
  background: var(--bg-glass);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-full);
  backdrop-filter: blur(16px);
  -webkit-backdrop-filter: blur(16px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.4);
  transition: border-color 0.3s ease;
}

.nav-glass-bar:hover {
  border-color: var(--border-hover);
}

.brand-logo {
  font-family: var(--font-heading);
  font-size: 1.25rem;
  font-weight: 700;
  color: var(--text-primary);
  text-decoration: none;
  letter-spacing: -0.03em;
}

.brand-dot {
  color: var(--accent-violet);
}

.nav-menu {
  display: flex;
  align-items: center;
  gap: 2rem;
  list-style: none;
}

.nav-link {
  font-size: 0.9rem;
  font-weight: 500;
  color: var(--text-secondary);
  text-decoration: none;
  transition: color 0.2s ease;
}

.nav-link:hover {
  color: var(--text-primary);
}

.nav-actions {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.55rem;
  padding: 0.3rem 0.85rem;
  background: var(--accent-violet-soft);
  border: 1px solid var(--accent-violet-border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-violet);
}

.pulse-violet {
  width: 7px;
  height: 7px;
  background-color: var(--accent-violet);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-violet);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(0.95); opacity: 1; }
}

.theme-toggle {
  width: 34px;
  height: 34px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 0.88rem;
  transition: all 0.2s ease;
}

.theme-toggle:hover {
  border-color: var(--accent-violet);
  color: var(--accent-violet);
  background: var(--accent-violet-soft);
}

@media (max-width: 868px) {
  .nav-menu { display: none; }
  .status-text { display: none; }
}
</style>

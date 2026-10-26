<script setup>
import { defineProps, defineEmits } from 'vue';

const props = defineProps({
  personal: Object,
  theme: String,
  activeSection: String
});

const emits = defineEmits(['toggle-theme', 'show-toast']);

const menuItems = [
  { id: 'about', label: 'TENTANG SAYA', number: '01' },
  { id: 'projects', label: 'PORTOFOLIO PROYEK', number: '02' },
  { id: 'skills', label: 'KEAHLIAN TEKNIS', number: '03' },
  { id: 'timeline', label: 'REKAM JEJAK', number: '04' },
  { id: 'contact', label: 'HUBUNGI SAYA', number: '05' }
];

function scrollToSection(id) {
  const el = document.getElementById(id);
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' });
  }
}

function downloadCv() {
  emits('show-toast', '📄 Mengunduh CV_Iqbal_Maulana_Fajar.pdf ...');
}
</script>

<template>
  <aside class="sidebar-fixed">
    <div class="sidebar-top">
      <!-- Avatar & Status -->
      <div class="avatar-header">
        <div class="avatar-box">
          <img :src="personal.avatar" :alt="personal.name">
        </div>
        <div class="status-pill">
          <span class="pulse-gold"></span>
          <span>Ready for Hire</span>
        </div>
      </div>

      <!-- Identity -->
      <div class="identity-info">
        <h1 class="user-name">{{ personal.name }}</h1>
        <div class="user-role">{{ personal.role }}</div>
        <p class="user-tagline">{{ personal.tagline }}</p>
      </div>

      <!-- Navigation Links -->
      <nav class="sidebar-nav">
        <ul class="nav-list">
          <li v-for="item in menuItems" :key="item.id">
            <a 
              :href="`#${item.id}`" 
              class="nav-item-link"
              :class="{ active: activeSection === item.id }"
              @click.prevent="scrollToSection(item.id)"
            >
              <span class="nav-line"></span>
              <span class="nav-num">{{ item.number }}</span>
              <span class="nav-text">{{ item.label }}</span>
            </a>
          </li>
        </ul>
      </nav>
    </div>

    <!-- Sidebar Bottom Actions & Socials -->
    <div class="sidebar-bottom">
      <div class="action-buttons-row">
        <a 
          :href="personal.cvUrl || '/CV_Iqbal_Maulana_Fajar.pdf'" 
          download="CV_Iqbal_Maulana_Fajar.pdf"
          target="_blank"
          class="btn-cv-download" 
          @click="downloadCv"
        >
          <i class="fa-solid fa-file-arrow-down"></i> Unduh CV
        </a>

        <button class="btn-theme-toggle" @click="emits('toggle-theme')" title="Ganti Mode Tampilan">
          <i :class="theme === 'dark' ? 'fa-regular fa-sun' : 'fa-regular fa-moon'"></i>
        </button>
      </div>

      <div class="social-icons-row">
        <a :href="personal.github" target="_blank" class="social-icon-btn" title="GitHub">
          <i class="fa-brands fa-github"></i>
        </a>
        <a :href="personal.linkedin" target="_blank" class="social-icon-btn" title="LinkedIn">
          <i class="fa-brands fa-linkedin"></i>
        </a>
        <a :href="`mailto:${personal.email}`" class="social-icon-btn" title="Email">
          <i class="fa-solid fa-envelope"></i>
        </a>
      </div>
    </div>
  </aside>
</template>

<style scoped>
.sidebar-fixed {
  position: sticky;
  top: 0;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4.5rem 0;
  z-index: 100;
}

.sidebar-top {
  display: flex;
  flex-direction: column;
}

.avatar-header {
  display: flex;
  align-items: center;
  gap: 1.2rem;
  margin-bottom: 1.8rem;
}

.avatar-box {
  width: 64px;
  height: 64px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid var(--accent-gold-border);
  box-shadow: 0 0 20px rgba(245, 158, 11, 0.25);
  flex-shrink: 0;
}

.avatar-box img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.3rem 0.8rem;
  background: var(--accent-gold-soft);
  border: 1px solid var(--accent-gold-border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.75rem;
  font-weight: 600;
  color: var(--accent-gold);
}

.pulse-gold {
  width: 7px;
  height: 7px;
  background-color: var(--accent-gold);
  border-radius: 50%;
  box-shadow: 0 0 8px var(--accent-gold);
  animation: pulse 2s infinite;
}

@keyframes pulse {
  0% { transform: scale(0.95); opacity: 1; }
  50% { transform: scale(1.1); opacity: 0.5; }
  100% { transform: scale(0.95); opacity: 1; }
}

.user-name {
  font-size: 2.2rem;
  font-weight: 800;
  letter-spacing: -0.03em;
  color: var(--text-primary);
  line-height: 1.1;
  margin-bottom: 0.4rem;
}

.user-role {
  font-size: 1.05rem;
  font-weight: 700;
  color: var(--accent-gold);
  margin-bottom: 0.8rem;
}

.user-tagline {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.6;
  margin-bottom: 2.5rem;
}

.sidebar-nav {
  margin-top: 1rem;
}

.nav-list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.nav-item-link {
  display: flex;
  align-items: center;
  gap: 1rem;
  text-decoration: none;
  color: var(--text-muted);
  transition: all 0.25s ease;
}

.nav-line {
  width: 24px;
  height: 2px;
  background: var(--text-muted);
  transition: all 0.3s ease;
  border-radius: var(--radius-full);
}

.nav-num {
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 700;
}

.nav-text {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  font-weight: 600;
  letter-spacing: 1px;
}

.nav-item-link:hover, .nav-item-link.active {
  color: var(--text-primary);
}

.nav-item-link:hover .nav-line, .nav-item-link.active .nav-line {
  width: 50px;
  background: var(--accent-gold);
  box-shadow: 0 0 10px var(--accent-gold);
}

.nav-item-link.active .nav-text {
  color: var(--accent-gold);
}

.sidebar-bottom {
  display: flex;
  flex-direction: column;
  gap: 1.2rem;
}

.action-buttons-row {
  display: flex;
  align-items: center;
  gap: 0.8rem;
}

.btn-cv-download {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.65rem 1.4rem;
  border-radius: var(--radius-full);
  background: #ffffff;
  color: #09090b;
  font-weight: 700;
  font-size: 0.85rem;
  border: none;
  cursor: pointer;
  text-decoration: none;
  transition: var(--transition-normal);
}

.btn-cv-download:hover {
  background: var(--accent-gold);
  transform: translateY(-2px);
}

.btn-theme-toggle {
  width: 36px;
  height: 36px;
  border-radius: 50%;
  border: 1px solid var(--border-color);
  background: rgba(255, 255, 255, 0.05);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: var(--transition-normal);
}

.btn-theme-toggle:hover {
  border-color: var(--accent-gold);
  color: var(--accent-gold);
  background: var(--accent-gold-soft);
}

.social-icons-row {
  display: flex;
  gap: 0.8rem;
}

.social-icon-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: rgba(255, 255, 255, 0.04);
  border: 1px solid var(--border-color);
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  text-decoration: none;
  transition: var(--transition-normal);
}

.social-icon-btn:hover {
  border-color: var(--accent-gold-border);
  color: var(--accent-gold);
  background: var(--accent-gold-soft);
}

@media (max-width: 992px) {
  .sidebar-fixed {
    position: relative;
    height: auto;
    padding: 3rem 0 1rem 0;
  }
}
</style>

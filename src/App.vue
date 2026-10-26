<script setup>
import { ref, onMounted } from 'vue';
import { portfolioData } from './data/portfolioData';

import Navbar from './components/Navbar.vue';
import Hero from './components/Hero.vue';
import About from './components/About.vue';
import Skills from './components/Skills.vue';
import Projects from './components/Projects.vue';
import Timeline from './components/Timeline.vue';
import Contact from './components/Contact.vue';
import Modal from './components/Modal.vue';
import Toast from './components/Toast.vue';

const theme = ref('dark');
const selectedProject = ref(null);
const isModalOpen = ref(false);
const toastMessage = ref('');

// Custom Pointer State
const cursorDotStyle = ref({ left: '0px', top: '0px' });
const cursorRingStyle = ref({ left: '0px', top: '0px' });
let mouseX = 0, mouseY = 0;
let ringX = 0, ringY = 0;

function toggleTheme() {
  theme.value = theme.value === 'dark' ? 'light' : 'dark';
  document.documentElement.setAttribute('data-theme', theme.value);
  showToast(`Mode ${theme.value === 'dark' ? 'Dark Violet 🌙' : 'Light Polar ☀️'}`);
}

function openModal(projectId) {
  const project = portfolioData.projects.find(p => p.id === projectId);
  if (project) {
    selectedProject.value = project;
    isModalOpen.value = true;
  }
}

function closeModal() {
  isModalOpen.value = false;
}

function showToast(msg) {
  toastMessage.value = msg;
  setTimeout(() => {
    toastMessage.value = '';
  }, 3200);
}

// Background Particle Canvas
function initCanvas() {
  const canvas = document.getElementById('bgCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');
  
  let width = canvas.width = window.innerWidth;
  let height = canvas.height = window.innerHeight;

  window.addEventListener('resize', () => {
    width = canvas.width = window.innerWidth;
    height = canvas.height = window.innerHeight;
  });

  const particles = Array.from({ length: 30 }, () => ({
    x: Math.random() * width,
    y: Math.random() * height,
    radius: Math.random() * 1.5 + 1,
    vx: (Math.random() - 0.5) * 0.3,
    vy: (Math.random() - 0.5) * 0.3,
    alpha: Math.random() * 0.3 + 0.15
  }));

  function animate() {
    ctx.clearRect(0, 0, width, height);

    particles.forEach(p => {
      p.x += p.vx; p.y += p.vy;
      if (p.x < 0) p.x = width; if (p.x > width) p.x = 0;
      if (p.y < 0) p.y = height; if (p.y > height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(139, 92, 246, ${p.alpha})`;
      ctx.fill();
    });

    requestAnimationFrame(animate);
  }
  animate();
}

// Scroll Reveal Observer
function initScrollObserver() {
  const reveals = document.querySelectorAll('.reveal');
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('active');
      }
    });
  }, { threshold: 0.12 });

  reveals.forEach(r => observer.observe(r));
}

// Custom Cursor Movement
function initCursor() {
  window.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    cursorDotStyle.value = { left: `${mouseX}px`, top: `${mouseY}px` };
  });

  function renderRing() {
    ringX += (mouseX - ringX) * 0.15;
    ringY += (mouseY - ringY) * 0.15;
    cursorRingStyle.value = { left: `${ringX}px`, top: `${ringY}px` };
    requestAnimationFrame(renderRing);
  }
  renderRing();
}

onMounted(() => {
  document.documentElement.setAttribute('data-theme', 'dark');
  initCanvas();
  initCursor();
  setTimeout(initScrollObserver, 100);
});
</script>

<template>
  <div class="app-root">
    <!-- Background Particle Canvas -->
    <canvas id="bgCanvas"></canvas>

    <!-- Custom Cursor -->
    <div class="custom-cursor-dot" :style="cursorDotStyle"></div>
    <div class="custom-cursor-ring" :style="cursorRingStyle"></div>

    <!-- Top Sticky Glass Navbar -->
    <Navbar 
      :theme="theme" 
      :personal="portfolioData.personal"
      @toggle-theme="toggleTheme" 
    />

    <!-- Main Content 1-Column Flow -->
    <main>
      <Hero :personal="portfolioData.personal" @show-toast="showToast" />
      <About :about="portfolioData.about" class="reveal" />
      <Skills :skills="portfolioData.skills" class="reveal" />
      <Projects :projects="portfolioData.projects" @open-modal="openModal" class="reveal" />
      <Timeline :experience="portfolioData.experience" class="reveal" />
      <Contact :personal="portfolioData.personal" @show-toast="showToast" class="reveal" />
    </main>

    <!-- Modern Expanded 4-Column Footer -->
    <footer class="site-footer">
      <div class="container">
        <div class="footer-grid">
          <div class="footer-col brand-col">
            <div class="footer-brand">
              <span class="brand-name">iqbal</span><span class="brand-dot">.</span>
            </div>
            <p class="footer-bio">
              Merancang antarmuka web modern, sistem POS toko, prototipe UI/UX di Figma, serta game 3D & AR interaktif berbasis Vue 3 & Unity Engine (C#).
            </p>
            <div class="footer-status-pill">
              <span class="status-pulse-dot"></span>
              <span>Tersedia untuk Magang, Freelance & Kolaborasi</span>
            </div>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Navigasi Utama</h4>
            <ul class="footer-links">
              <li><a href="#top">Beranda</a></li>
              <li><a href="#about">Tentang Saya</a></li>
              <li><a href="#skills">Keahlian & Stack</a></li>
              <li><a href="#projects">Portofolio Karya</a></li>
              <li><a href="#timeline">Pengalaman</a></li>
              <li><a href="#contact">Hubungi Saya</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Karya Pilihan</h4>
            <ul class="footer-links">
              <li><a href="#projects">Sew U Platform</a></li>
              <li><a href="#projects">POS Nikky Frozen</a></li>
              <li><a href="#projects">DemonTix Ticket App</a></li>
              <li><a href="#projects">MBG Rush 3D Game</a></li>
              <li><a href="#projects">Anatomi AR Book</a></li>
            </ul>
          </div>

          <div class="footer-col">
            <h4 class="footer-col-title">Tautan & Sosial</h4>
            <ul class="footer-links">
              <li>
                <a :href="portfolioData.personal.github" target="_blank">
                  <i class="fa-brands fa-github"></i> GitHub (@iqblmlnf) ↗
                </a>
              </li>
              <li>
                <a :href="portfolioData.personal.linkedin" target="_blank">
                  <i class="fa-brands fa-linkedin"></i> LinkedIn ↗
                </a>
              </li>
              <li>
                <a :href="portfolioData.personal.dribbble" target="_blank">
                  <i class="fa-brands fa-dribbble"></i> Dribbble ↗
                </a>
              </li>
              <li>
                <a :href="portfolioData.personal.cvUrl || '/CV_Iqbal_Maulana_Fajar.pdf'" download="CV_Iqbal_Maulana_Fajar.pdf" target="_blank">
                  <i class="fa-solid fa-file-pdf"></i> Unduh CV (PDF) ↗
                </a>
              </li>
              <li>
                <a href="#contact">
                  <i class="fa-regular fa-paper-plane"></i> Kirim Pesan Direct
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div class="footer-bottom">
          <p>&copy; 2026 <strong>{{ portfolioData.personal.name }}</strong> (<a :href="portfolioData.personal.github" target="_blank" class="footer-link">@iqblmlnf</a>). Hak Cipta Dilindungi.</p>
          <p class="footer-tech-tag">Dirancang dengan Vue 3 (Composition API) & Vite</p>
        </div>
      </div>
    </footer>

    <!-- Vue Modal Popup -->
    <Modal :is-open="isModalOpen" :project="selectedProject" @close="closeModal" />

    <!-- Vue Toast Notification -->
    <Toast :message="toastMessage" />
  </div>
</template>

<style>
.site-footer {
  padding: 5rem 0 3rem 0;
  border-top: 1px solid var(--border-color);
  background: rgba(10, 10, 10, 0.95);
  backdrop-filter: blur(16px);
  color: var(--text-secondary);
}

.footer-grid {
  display: grid;
  grid-template-columns: 1.4fr 1fr 1fr 1.1fr;
  gap: 3rem;
  margin-bottom: 4rem;
}

.brand-col {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.footer-brand {
  font-family: var(--font-heading);
  font-size: 1.6rem;
  font-weight: 700;
  letter-spacing: -0.03em;
  color: var(--text-primary);
}

.brand-dot {
  color: var(--accent-violet);
}

.footer-bio {
  font-size: 0.92rem;
  color: var(--text-secondary);
  line-height: 1.65;
}

.footer-status-pill {
  display: inline-flex;
  align-items: center;
  gap: 0.6rem;
  padding: 0.45rem 1rem;
  background: var(--accent-violet-soft);
  border: 1px solid var(--accent-violet-border);
  border-radius: var(--radius-full);
  font-family: var(--font-mono);
  font-size: 0.78rem;
  font-weight: 600;
  color: var(--accent-violet);
  width: fit-content;
  margin-top: 0.5rem;
}

.status-pulse-dot {
  width: 8px;
  height: 8px;
  border-radius: 50%;
  background: #10b981;
  box-shadow: 0 0 10px #10b981;
}

.footer-col-title {
  font-family: var(--font-heading);
  font-size: 1rem;
  font-weight: 700;
  color: var(--text-primary);
  margin-bottom: 1.2rem;
  letter-spacing: -0.01em;
}

.footer-links {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
}

.footer-links a {
  color: var(--text-secondary);
  text-decoration: none;
  font-size: 0.9rem;
  transition: var(--transition-normal);
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
}

.footer-links a:hover {
  color: var(--accent-violet);
  transform: translateX(3px);
}

.footer-bottom {
  padding-top: 2rem;
  border-top: 1px solid var(--border-color);
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 1rem;
  font-size: 0.88rem;
  color: var(--text-muted);
}

.footer-tech-tag {
  font-family: var(--font-mono);
  font-size: 0.8rem;
  color: var(--text-muted);
}

.footer-link {
  color: var(--accent-violet);
  text-decoration: none;
  font-weight: 700;
}

.footer-link:hover {
  text-decoration: underline;
}

@media (max-width: 868px) {
  .footer-grid {
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
  }
  .footer-bottom {
    flex-direction: column;
    text-align: center;
  }
}

@media (max-width: 576px) {
  .footer-grid {
    grid-template-columns: 1fr;
    gap: 2rem;
  }
}
</style>

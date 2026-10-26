<script setup>
import { ref, onMounted, onUnmounted, computed } from 'vue';
import { portfolioData } from '../data/portfolioData';
import { playClickSound, toggleSound, isSoundEnabled } from '../utils/audio';

const props = defineProps({
  isOpen: Boolean
});

const emits = defineEmits(['close', 'show-toast']);

const searchQuery = ref('');
const soundStatus = ref(isSoundEnabled());

const navigationItems = [
  { id: 'top', title: 'Beranda / Top', category: 'Navigasi', icon: 'fa-house' },
  { id: 'about', title: 'Tentang Iqbal Maulana', category: 'Navigasi', icon: 'fa-user' },
  { id: 'skills', title: 'Keahlian & Stack Teknis', category: 'Navigasi', icon: 'fa-layer-group' },
  { id: 'projects', title: 'Portofolio & Repositori', category: 'Navigasi', icon: 'fa-laptop-code' },
  { id: 'timeline', title: 'Pengalaman & Timeline', category: 'Navigasi', icon: 'fa-timeline' },
  { id: 'contact', title: 'Hubungi Saya', category: 'Navigasi', icon: 'fa-envelope' },
];

const actionItems = [
  { action: 'copy-email', title: 'Salin Email Iqbal Maulana', category: 'Aksi', icon: 'fa-copy' },
  { action: 'open-github', title: 'Buka GitHub Profile @iqblmlnf', category: 'Aksi', icon: 'fa-brands fa-github' },
  { action: 'toggle-sound', title: 'Toggle Suara Efek Web Audio', category: 'Pengaturan', icon: 'fa-volume-high' }
];

const filteredItems = computed(() => {
  const query = searchQuery.value.toLowerCase().trim();
  if (!query) return [...navigationItems, ...actionItems];

  return [...navigationItems, ...actionItems].filter(item => 
    item.title.toLowerCase().includes(query) || 
    item.category.toLowerCase().includes(query)
  );
});

function handleKeydown(e) {
  if ((e.ctrlKey || e.metaKey) && e.key.toLowerCase() === 'k') {
    e.preventDefault();
    if (props.isOpen) {
      emits('close');
    } else {
      openPalette();
    }
  } else if (e.key === 'Escape' && props.isOpen) {
    emits('close');
  }
}

function openPalette() {
  playClickSound();
}

function selectItem(item) {
  playClickSound();
  emits('close');

  if (item.id) {
    const el = document.getElementById(item.id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  } else if (item.action === 'copy-email') {
    navigator.clipboard.writeText(portfolioData.personal.email);
    emits('show-toast', '📋 Email telah disalin ke clipboard!');
  } else if (item.action === 'open-github') {
    window.open(portfolioData.personal.github, '_blank');
  } else if (item.action === 'toggle-sound') {
    const state = toggleSound();
    soundStatus.value = state;
    emits('show-toast', `🔊 Suara Efek: ${state ? 'AKTIF' : 'NONAKTIF'}`);
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown);
});

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown);
});
</script>

<template>
  <Transition name="modal-fade">
    <div v-if="isOpen" class="cmd-overlay" @click.self="emits('close')">
      <div class="cmd-box">
        <div class="cmd-search-header">
          <i class="fa-solid fa-magnifying-glass search-icon"></i>
          <input 
            type="text" 
            v-model="searchQuery" 
            placeholder="Cari halaman, proyek, atau jalankan perintah (Esc untuk tutup)..." 
            class="cmd-input"
            autofocus
          />
          <span class="cmd-kbd">Esc</span>
        </div>

        <div class="cmd-results">
          <div v-if="filteredItems.length === 0" class="cmd-empty">
            Tidak ada perintah yang cocok dengan "{{ searchQuery }}"
          </div>

          <div 
            v-for="item in filteredItems" 
            :key="item.title" 
            class="cmd-item"
            @click="selectItem(item)"
          >
            <div class="cmd-item-left">
              <i :class="['fa-solid', item.icon, 'item-icon']"></i>
              <span>{{ item.title }}</span>
            </div>
            <span class="cmd-tag">{{ item.category }}</span>
          </div>
        </div>
      </div>
    </div>
  </Transition>
</template>

<style scoped>
.cmd-overlay {
  position: fixed;
  inset: 0;
  z-index: 99999;
  background: rgba(0, 0, 0, 0.75);
  backdrop-filter: blur(12px);
  display: flex;
  align-items: flex-start;
  justify-content: center;
  padding-top: 12vh;
}

.cmd-box {
  width: 90%;
  max-width: 640px;
  background: rgba(15, 23, 42, 0.95);
  border: 1px solid var(--accent-emerald-border);
  border-radius: var(--radius-md);
  box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.8), var(--shadow-glow);
  overflow: hidden;
}

.cmd-search-header {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1.2rem 1.5rem;
  border-bottom: 1px solid var(--border-color);
}

.search-icon {
  color: var(--accent-emerald);
  font-size: 1.1rem;
}

.cmd-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-size: 1rem;
  font-family: var(--font-main);
}

.cmd-kbd {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.2rem 0.6rem;
  background: rgba(255, 255, 255, 0.08);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xs);
  color: var(--text-muted);
}

.cmd-results {
  max-height: 360px;
  overflow-y: auto;
  padding: 0.6rem;
}

.cmd-empty {
  padding: 2rem;
  text-align: center;
  color: var(--text-muted);
  font-size: 0.92rem;
}

.cmd-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.85rem 1rem;
  border-radius: var(--radius-sm);
  cursor: pointer;
  transition: all 0.2s ease;
}

.cmd-item:hover {
  background: var(--accent-emerald-soft);
  color: var(--accent-emerald);
}

.cmd-item-left {
  display: flex;
  align-items: center;
  gap: 0.8rem;
  font-size: 0.92rem;
  font-weight: 600;
  color: var(--text-primary);
}

.cmd-item:hover .cmd-item-left {
  color: var(--accent-emerald);
}

.item-icon {
  width: 18px;
  color: var(--accent-emerald);
}

.cmd-tag {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  padding: 0.15rem 0.5rem;
  background: rgba(255, 255, 255, 0.05);
  border-radius: var(--radius-xs);
  color: var(--text-muted);
}
</style>

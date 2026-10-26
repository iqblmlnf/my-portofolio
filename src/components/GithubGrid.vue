<script setup>
import { ref, onMounted } from 'vue';
import { portfolioData } from '../data/portfolioData';
import { playClickSound } from '../utils/audio';

const hoveredTile = ref(null);
const weeks = ref([]);

function generateGridData() {
  const result = [];
  const daysInYear = 52 * 7;
  
  for (let i = 0; i < daysInYear; i++) {
    // Generate realistic contribution distribution
    const rand = Math.random();
    let count = 0;
    let level = 0;

    if (rand > 0.45) {
      count = Math.floor(Math.random() * 8) + 1;
      if (count <= 2) level = 1;
      else if (count <= 4) level = 2;
      else if (count <= 6) level = 3;
      else level = 4;
    }

    const date = new Date(2025, 0, 1 + i);
    result.push({
      id: i,
      date: date.toISOString().split('T')[0],
      count,
      level
    });
  }

  // Chunk into 52 weeks
  const chunkedWeeks = [];
  for (let w = 0; w < 52; w++) {
    chunkedWeeks.push(result.slice(w * 7, (w + 1) * 7));
  }
  weeks.value = chunkedWeeks;
}

function handleTileHover(tile) {
  hoveredTile.value = tile;
}

onMounted(() => {
  generateGridData();
});
</script>

<template>
  <div class="github-grid-section">
    <div class="github-card">
      <div class="github-header">
        <div class="github-profile-info">
          <i class="fa-brands fa-github github-icon"></i>
          <div>
            <h4 class="profile-name">Aktivitas GitHub — @iqblmlnf</h4>
            <p class="profile-subtext">540+ Kontribusi & Commit Kode Terverifikasi dalam 1 Tahun Terakhir</p>
          </div>
        </div>
        <a 
          :href="portfolioData.personal.github" 
          target="_blank" 
          class="btn-github-link"
          @click="playClickSound"
        >
          <i class="fa-solid fa-arrow-up-right-from-square"></i> Lihat Profile GitHub
        </a>
      </div>

      <!-- Contribution Heatmap Grid -->
      <div class="heatmap-wrapper">
        <div class="heatmap-grid">
          <div v-for="(week, wIdx) in weeks" :key="wIdx" class="heatmap-column">
            <div 
              v-for="tile in week" 
              :key="tile.id" 
              class="heatmap-tile"
              :class="`level-${tile.level}`"
              @mouseenter="handleTileHover(tile)"
            ></div>
          </div>
        </div>
      </div>

      <!-- Footer & Hover Tooltip -->
      <div class="heatmap-footer">
        <div class="tooltip-box">
          <span v-if="hoveredTile">
            <strong>{{ hoveredTile.count }} kontribusi</strong> pada {{ hoveredTile.date }}
          </span>
          <span v-else class="text-muted">Arahkan kursor ke kotak untuk melihat detail commit</span>
        </div>

        <div class="heatmap-legend">
          <span>Sedikit</span>
          <span class="legend-tile level-0"></span>
          <span class="legend-tile level-1"></span>
          <span class="legend-tile level-2"></span>
          <span class="legend-tile level-3"></span>
          <span class="legend-tile level-4"></span>
          <span>Banyak</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.github-grid-section {
  margin-top: 3.5rem;
}

.github-card {
  background: var(--bg-card);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-lg);
  padding: 2rem;
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(16px);
  transition: border-color 0.3s ease;
}

.github-card:hover {
  border-color: var(--accent-emerald-border);
}

.github-header {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.8rem;
  flex-wrap: wrap;
  gap: 1rem;
}

.github-profile-info {
  display: flex;
  align-items: center;
  gap: 1rem;
}

.github-icon {
  font-size: 2.5rem;
  color: var(--text-primary);
}

.profile-name {
  font-size: 1.15rem;
  font-weight: 700;
  color: var(--text-primary);
}

.profile-subtext {
  font-size: 0.88rem;
  color: var(--text-secondary);
}

.btn-github-link {
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.55rem 1.2rem;
  background: var(--accent-emerald-soft);
  border: 1px solid var(--accent-emerald-border);
  border-radius: var(--radius-full);
  color: var(--accent-emerald);
  font-size: 0.85rem;
  font-weight: 600;
  transition: all 0.25s ease;
}

.btn-github-link:hover {
  background: var(--accent-emerald);
  color: var(--bg-dark);
  transform: translateY(-2px);
}

.heatmap-wrapper {
  overflow-x: auto;
  padding-bottom: 0.5rem;
}

.heatmap-grid {
  display: flex;
  gap: 3px;
  min-width: 720px;
}

.heatmap-column {
  display: flex;
  flex-direction: column;
  gap: 3px;
}

.heatmap-tile {
  width: 10px;
  height: 10px;
  border-radius: 2px;
  background-color: rgba(255, 255, 255, 0.05);
  transition: transform 0.15s ease, background-color 0.2s ease;
  cursor: pointer;
}

.heatmap-tile:hover {
  transform: scale(1.4);
  z-index: 5;
}

.heatmap-tile.level-0 { background-color: rgba(255, 255, 255, 0.06); }
.heatmap-tile.level-1 { background-color: #0e4429; }
.heatmap-tile.level-2 { background-color: #006d32; }
.heatmap-tile.level-3 { background-color: #26a641; }
.heatmap-tile.level-4 { background-color: #39d353; box-shadow: 0 0 6px #39d353; }

.heatmap-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 1.2rem;
  font-size: 0.82rem;
  color: var(--text-secondary);
}

.tooltip-box strong {
  color: var(--accent-emerald);
}

.heatmap-legend {
  display: flex;
  align-items: center;
  gap: 0.4rem;
  font-family: var(--font-mono);
  font-size: 0.75rem;
}

.legend-tile {
  width: 10px;
  height: 10px;
  border-radius: 2px;
}

@media (max-width: 768px) {
  .github-header { flex-direction: column; align-items: flex-start; }
}
</style>

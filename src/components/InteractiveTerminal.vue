<script setup>
import { ref, onMounted, nextTick } from 'vue';
import { portfolioData } from '../data/portfolioData';
import { playTypeSound, playSuccessSound, playClickSound } from '../utils/audio';

const inputCommand = ref('');
const terminalHistory = ref([
  { type: 'sys', text: '⚡ Iqbal Maulana (iqblmlnf) Developer Workstation v2.5' },
  { type: 'sys', text: 'Ketik "help" atau klik tombol chip cepat untuk mengeksekusi perintah terminal.' }
]);

const terminalOutput = ref(null);

const presetCommands = [
  'help', 'cat bio.md', 'skills --all', 'projects --list', 'cv', 'git log', 'clear'
];

function scrollToBottom() {
  nextTick(() => {
    if (terminalOutput.value) {
      terminalOutput.value.scrollTop = terminalOutput.value.scrollHeight;
    }
  });
}

function handleInputKeypress(e) {
  playTypeSound();
}

function runCommand(cmdText) {
  const raw = (cmdText || inputCommand.value).trim().toLowerCase();
  if (!raw) return;

  playClickSound();

  terminalHistory.value.push({ type: 'user', text: `$ ${raw}` });
  inputCommand.value = '';

  const args = raw.split(' ');
  const cmd = args[0];

  switch (cmd) {
    case 'help':
      terminalHistory.value.push({
        type: 'output',
        text: `PERINTAH TERSEDIA:
  • help           — Menampilkan daftar perintah
  • bio / cat bio.md — Bio singkat Iqbal Maulana Fajar
  • skills         — Menampilkan stack & keahlian teknis
  • projects       — Menampilkan daftar proyek repositori
  • cv             — Mengunduh CV resmi Iqbal Maulana Fajar (PDF)
  • git log        — Menampilkan histori commit repositori
  • date           — Menampilkan waktu sistem & zona WIB
  • whoami         — Informasi user saat ini
  • contact        — Informasi kontak & GitHub
  • clear          — Membersihkan layar terminal`
      });
      playSuccessSound();
      break;

    case 'bio':
    case 'cat':
      terminalHistory.value.push({
        type: 'output',
        text: `[PROFILE] ${portfolioData.personal.name} (@iqblmlnf)
Role: ${portfolioData.personal.role}
Lokasi: ${portfolioData.personal.location}
Bio: "${portfolioData.personal.bio}"`
      });
      playSuccessSound();
      break;

    case 'skills':
      terminalHistory.value.push({
        type: 'output',
        text: `[STACK UI/UX]: ${portfolioData.skills.uiux.join(', ')}
[STACK FE]   : ${portfolioData.skills.frontend.join(', ')}
[STACK GAME] : ${portfolioData.skills.game.join(', ')}
[TOOLS & DEV]: ${portfolioData.skills.tools.join(', ')}`
      });
      playSuccessSound();
      break;

    case 'projects':
      terminalHistory.value.push({
        type: 'output',
        text: portfolioData.projects.map((p, idx) => `[${idx+1}] ${p.title} (${p.year})\n    Stack: ${p.stack.join(', ')}\n    GitHub: ${p.githubUrl}`).join('\n\n')
      });
      playSuccessSound();
      break;

    case 'git':
      terminalHistory.value.push({
        type: 'output',
        text: `commit 8f3a91c (HEAD -> main, origin/main)
Author: Iqbal Maulana <iqblmlnf@github.com>
Date:   Wed Sep 16 2026 18:57:00 +0700

    feat: polish Vue 3 portfolio with high-tech interactive CLI, 3D tilt & spotlight cards`
      });
      playSuccessSound();
      break;

    case 'date':
      terminalHistory.value.push({
        type: 'output',
        text: `System Time: ${new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' })} WIB`
      });
      break;

    case 'whoami':
      terminalHistory.value.push({
        type: 'output',
        text: `visitor@iqblmlnf-portfolio ~ [Guest Access Granted]`
      });
      break;

    case 'contact':
      terminalHistory.value.push({
        type: 'output',
        text: `Email  : ${portfolioData.personal.email}
GitHub : ${portfolioData.personal.github}
Status : ${portfolioData.personal.availability}`
      });
      playSuccessSound();
      break;

    case 'cv':
      terminalHistory.value.push({
        type: 'output',
        text: `[CV DOWNLOAD] Mengunduh berkas CV ${portfolioData.personal.name}...\nFile: CV_Iqbal_Maulana_Fajar.pdf`
      });
      {
        const cvLink = document.createElement('a');
        cvLink.href = portfolioData.personal.cvUrl || '/CV_Iqbal_Maulana_Fajar.pdf';
        cvLink.download = 'CV_Iqbal_Maulana_Fajar.pdf';
        cvLink.target = '_blank';
        document.body.appendChild(cvLink);
        cvLink.click();
        document.body.removeChild(cvLink);
      }
      playSuccessSound();
      break;

    case 'clear':
      terminalHistory.value = [];
      break;

    default:
      terminalHistory.value.push({
        type: 'error',
        text: `zsh: command not found: ${raw}. Ketik "help" untuk daftar perintah.`
      });
      break;
  }

  scrollToBottom();
}
</script>

<template>
  <div class="terminal-container">
    <div class="terminal-header">
      <div class="terminal-dots">
        <span class="dot dot-red"></span>
        <span class="dot dot-yellow"></span>
        <span class="dot dot-green"></span>
      </div>
      <div class="terminal-title">
        <i class="fa-solid fa-terminal" style="color: var(--accent-emerald);"></i>
        iqbal@iqblmlnf-macbook:~ (zsh)
      </div>
      <div class="terminal-status">ONLINE</div>
    </div>

    <!-- Quick Preset Buttons -->
    <div class="terminal-quick-chips">
      <span class="chip-label"><i class="fa-solid fa-bolt"></i> Quick Exec:</span>
      <button 
        v-for="chip in presetCommands" 
        :key="chip" 
        class="chip-btn"
        @click="runCommand(chip)"
      >
        {{ chip }}
      </button>
    </div>

    <div class="terminal-body" ref="terminalOutput">
      <div 
        v-for="(item, idx) in terminalHistory" 
        :key="idx" 
        class="terminal-line"
        :class="item.type"
      >
        <pre>{{ item.text }}</pre>
      </div>

      <div class="terminal-input-row">
        <span class="prompt-user">iqbal@dev-box</span>
        <span class="prompt-symbol">:$</span>
        <input 
          type="text" 
          v-model="inputCommand" 
          @keydown="handleInputKeypress"
          @keyup.enter="runCommand(inputCommand)"
          placeholder="ketik perintah di sini (cth: help)..."
          class="terminal-input"
          spellcheck="false"
        />
      </div>
    </div>
  </div>
</template>

<style scoped>
.terminal-container {
  background: rgba(10, 14, 23, 0.92);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-md);
  overflow: hidden;
  box-shadow: var(--shadow-card);
  backdrop-filter: blur(16px);
  margin-top: 2rem;
  transition: border-color 0.3s ease;
}

.terminal-container:hover {
  border-color: var(--accent-emerald-border);
}

.terminal-header {
  background: rgba(17, 24, 39, 0.9);
  padding: 0.75rem 1.2rem;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-bottom: 1px solid var(--border-color);
}

.terminal-dots {
  display: flex;
  align-items: center;
  gap: 0.45rem;
}

.dot {
  width: 11px;
  height: 11px;
  border-radius: 50%;
}

.dot-red { background: #ef4444; }
.dot-yellow { background: #f59e0b; }
.dot-green { background: #10b981; }

.terminal-title {
  font-family: var(--font-mono);
  font-size: 0.82rem;
  color: var(--text-secondary);
  display: flex;
  align-items: center;
  gap: 0.5rem;
}

.terminal-status {
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 700;
  color: var(--accent-emerald);
  background: var(--accent-emerald-soft);
  padding: 0.15rem 0.6rem;
  border-radius: var(--radius-full);
}

.terminal-quick-chips {
  padding: 0.6rem 1.2rem;
  background: rgba(15, 23, 42, 0.6);
  border-bottom: 1px solid rgba(255, 255, 255, 0.04);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  flex-wrap: wrap;
}

.chip-label {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  color: var(--text-muted);
}

.chip-btn {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  padding: 0.25rem 0.65rem;
  background: rgba(255, 255, 255, 0.05);
  border: 1px solid var(--border-color);
  border-radius: var(--radius-xs);
  color: var(--text-secondary);
  cursor: pointer;
  transition: all 0.2s ease;
}

.chip-btn:hover {
  background: var(--accent-emerald-soft);
  border-color: var(--accent-emerald-border);
  color: var(--accent-emerald);
}

.terminal-body {
  padding: 1.2rem;
  max-height: 280px;
  overflow-y: auto;
  font-family: var(--font-mono);
  font-size: 0.88rem;
  line-height: 1.6;
}

.terminal-line {
  margin-bottom: 0.4rem;
}

.terminal-line pre {
  white-space: pre-wrap;
  word-break: break-word;
  font-family: inherit;
}

.terminal-line.sys {
  color: var(--accent-emerald);
}

.terminal-line.user {
  color: var(--text-primary);
  font-weight: 700;
}

.terminal-line.output {
  color: var(--text-secondary);
}

.terminal-line.error {
  color: #f87171;
}

.terminal-input-row {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin-top: 0.5rem;
}

.prompt-user {
  color: var(--accent-emerald);
  font-weight: 700;
}

.prompt-symbol {
  color: var(--text-muted);
}

.terminal-input {
  flex: 1;
  background: transparent;
  border: none;
  outline: none;
  color: var(--text-primary);
  font-family: var(--font-mono);
  font-size: 0.88rem;
}
</style>

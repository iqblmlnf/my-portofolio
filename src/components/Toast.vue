<script setup>
import { defineProps } from 'vue';

const props = defineProps({
  message: String
});
</script>

<template>
  <Transition name="toast-slide">
    <div v-if="message" class="toast-box">
      <span>{{ message }}</span>
    </div>
  </Transition>
</template>

<style scoped>
.toast-box {
  position: fixed;
  bottom: 2rem;
  right: 2rem;
  z-index: 300;
  padding: 0.85rem 1.5rem;
  background: var(--bg-surface);
  border: 1px solid var(--accent);
  color: var(--text-main);
  border-radius: var(--radius-sm);
  font-size: 0.9rem;
  font-weight: 500;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.4);
}
</style>

<template>
  <!-- Затемнённый фон. Клик по нему закрывает модальное окно -->
  <div class="overlay" @click.self="$emit('close')">
    <!-- Контейнер модального окна -->
    <div class="modal">
      <!-- Слот позволяет вставлять любую форму внутрь модалки -->
      <slot />
    </div>
  </div>
</template>

<script setup lang="ts">
  // Описываем событие закрытия модального окна
  defineEmits(['close'])
</script>

<style scoped>
  /* Затемнённый фон поверх всей страницы */
  .overlay {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1000;
  }

  /* Окно модалки */
  .modal {
    background: white;
    padding: 20px;
    border-radius: 12px;
    width: 100%;
    max-width: 420px;
  }
</style>

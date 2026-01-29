<template>
  <!-- Форма используется и для создания, и для редактирования -->
  <form @submit.prevent="submit">
    <!-- Имя сотрудника -->
    <input v-model="form.firstName" placeholder="Имя" required />

    <!-- Фамилия сотрудника -->
    <input v-model="form.lastName" placeholder="Фамилия" required />

    <!-- Возраст (числовое поле) -->
    <input v-model.number="form.age" type="number" placeholder="Возраст" />

    <!-- Стаж (числовое поле) -->
    <input v-model.number="form.experience" type="number" placeholder="Стаж" />

    <!-- Адрес -->
    <input v-model="form.address" placeholder="Адрес" />

    <!-- Кнопка сохранения -->
    <button type="submit">Сохранить</button>
  </form>
</template>

<script setup lang="ts">
  import type { Employee } from '~/models/employee'
  import { v4 as uuid } from 'uuid'
  import { reactive } from 'vue'

  /*
    Если employee передан — форма в режиме редактирования,
    если нет — форма в режиме создания
  */
  const props = defineProps<{
    employee?: Employee | null
  }>()

  // Событие сохранения данных формы
  const emit = defineEmits(['save'])

  // Локальное состояние формы
  const form = reactive({
    // ID создаётся только при добавлении нового сотрудника
    id: props.employee?.id ?? uuid(),
    firstName: props.employee?.firstName ?? '',
    lastName: props.employee?.lastName ?? '',
    age: props.employee?.age ?? null,
    experience: props.employee?.experience ?? null,
    address: props.employee?.address ?? '',
  })

  // Отправка данных формы родительскому компоненту
  const submit = () => emit('save', { ...form })
  </script>

  <style scoped>
  /* Вертикальное расположение элементов формы */
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
  }

  /* Общие стили для инпутов */
  input {
    padding: 8px;
    border-radius: 6px;
    border: 1px solid #ccc;
  }
</style>

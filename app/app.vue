<template>
  <div class="container">
    <!-- Кнопка добавления сотрудника -->
    <button @click="openCreate">Добавить сотрудника</button>

    <!-- Таблица сотрудников -->
    <EmployeeTable
      :employees="employees"
      @edit="openEdit"
      @delete="remove"
    />

    <!-- Модальное окно с формой -->
    <BaseModal v-if="isOpen" @close="close">
      <EmployeeForm
        :employee="selected"
        @save="save"
      />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
import { useEmployees } from '~/composables/useEmployees'

// Подключаем контроллер
const { employees, addEmployee, updateEmployee, removeEmployee } = useEmployees()

// Состояние модального окна
const isOpen = ref(false)

// Выбранный сотрудник для редактирования
const selected = ref(null)

// Открытие формы создания
const openCreate = () => {
  selected.value = null
  isOpen.value = true
}

// Открытие формы редактирования
const openEdit = (emp) => {
  selected.value = emp
  isOpen.value = true
}

// Сохранение данных формы
const save = (emp) => {
  selected.value ? updateEmployee(emp) : addEmployee(emp)
  isOpen.value = false
}

// Удаление сотрудника
const remove = (id: string) => {
  if (confirm('Удалить сотрудника?')) {
    removeEmployee(id)
  }
}

// Закрытие модального окна
const close = () => (isOpen.value = false)
</script>

<style>
/* Контейнер страницы */
.container {
  max-width: 1000px;
  margin: 40px auto;
  padding: 0 16px;
  font-family: system-ui, sans-serif;
}

/* Базовые стили кнопок */
button {
  padding: 6px 12px;
  border-radius: 6px;
  border: 1px solid #ccc;
  background: #fff;
  cursor: pointer;
}

button:hover {
  background: #f3f

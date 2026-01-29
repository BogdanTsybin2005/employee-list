<template>
  <div class="container">
    <button @click="openCreate">Добавить сотрудника</button>

    <EmployeeTable
      :employees="employees"
      @edit="openEdit"
      @delete="remove"
    />

    <BaseModal v-if="isOpen" @close="close">
      <EmployeeForm
        :employee="selected"
        @save="save"
      />
    </BaseModal>
  </div>
</template>

<script setup lang="ts">
  import { ref } from 'vue'
  import { useEmployees } from '~/composables/useEmployees'

  const { employees, addEmployee, updateEmployee, removeEmployee } = useEmployees()

  const isOpen = ref(false)
  const selected = ref(null)

  const openCreate = () => {
    selected.value = null
    isOpen.value = true
  }

  const openEdit = (emp) => {
    selected.value = emp
    isOpen.value = true
  }

  const save = (emp) => {
    selected.value ? updateEmployee(emp) : addEmployee(emp)
    isOpen.value = false
  }

  const remove = (id: string) => {
    if (confirm('Удалить сотрудника?')) {
      removeEmployee(id)
    }
  }

  const close = () => {
    isOpen.value = false
  }
</script>

<style>
  .container {
    max-width: 1000px;
    margin: 40px auto;
    padding: 0 16px;
    font-family: system-ui, sans-serif;
  }

  button {
    padding: 6px 12px;
    border-radius: 6px;
    border: 1px solid #ccc;
    background: #fff;
    cursor: pointer;
  }

  button:hover {
    background: #f3f3f3;
  }

  button.danger {
    border-color: #e66;
    color: #c00;
  }

  button.danger:hover {
    background: #ffecec;
  }
</style>

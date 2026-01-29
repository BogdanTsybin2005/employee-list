<template>
    <div class="container">
      <button @click="openCreate">Добавить сотрудника</button>

      <EmployeeTable
        :employees="employees"
        @edit="openEdit"
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
  import { useEmployees } from '~/composables/useEmployees'

  const { employees, addEmployee, updateEmployee } = useEmployees()

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

  const close = () => (isOpen.value = false)
</script>

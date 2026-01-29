<template>
    <table class="table">
        <thead>
            <tr>
                <th>Имя</th>
                <th>Фамилия</th>
                <th>Возраст</th>
                <th>Стаж</th>
                <th>Адрес</th>
                <th></th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="emp in employees" :key="emp.id">
                <td>{{ emp.firstName }}</td>
                <td>{{ emp.lastName }}</td>
                <td>{{ emp.age }}</td>
                <td>{{ emp.experience }}</td>
                <td>{{ emp.address }}</td>
                <td>
                <button @click="$emit('edit', emp)">Редактировать</button>
                </td>
            </tr>
        </tbody>
    </table>
</template>

<script setup lang="ts">
    import type { Employee } from '~/models/employee'

    defineProps<{
        employees: Employee[]
    }>()
</script>

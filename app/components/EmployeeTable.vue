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
                <td class="actions">
                    <button @click="$emit('edit', emp)">Редактировать</button>
                    <button class="danger" @click="$emit('delete', emp.id)">
                        Удалить
                    </button>
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

<style scoped>
    .table {
        width: 100%;
        border-collapse: collapse;
        margin-top: 20px;
    }

    th, td {
        padding: 10px;
        border-bottom: 1px solid #ddd;
        text-align: left;
    }

    th {
        background: #f7f7f7;
    }

    .actions {
        display: flex;
        gap: 8px;
    }

    @media (max-width: 700px) {
        .table thead {
            display: none;
        }

        .table tr {
            display: block;
            margin-bottom: 16px;
            border: 1px solid #ddd;
            border-radius: 8px;
            padding: 8px;
        }

        .table td {
            display: flex;
            justify-content: space-between;
        }
    }
</style>

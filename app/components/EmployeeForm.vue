<template>
    <form @submit.prevent="submit">
        <input v-model="form.firstName" placeholder="Имя" required />
        <input v-model="form.lastName" placeholder="Фамилия" required />
        <input v-model.number="form.age" type="number" placeholder="Возраст" />
        <input v-model.number="form.experience" type="number" placeholder="Стаж" />
        <input v-model="form.address" placeholder="Адрес" />
        <button type="submit">Сохранить</button>
    </form>
</template>

<script setup lang="ts">
    import type { Employee } from '~/models/employee'
    import { v4 as uuid } from 'uuid'

    const props = defineProps<{
        employee?: Employee | null
    }>()

    const emit = defineEmits(['save'])

    const form = reactive<Employee>({
        id: props.employee?.id ?? uuid(),
        firstName: props.employee?.firstName ?? '',
        lastName: props.employee?.lastName ?? '',
        age: props.employee?.age ?? 0,
        experience: props.employee?.experience ?? 0,
        address: props.employee?.address ?? '',
    })

    const submit = () => emit('save', { ...form })
</script>

<style scoped>
    form {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    input {
        padding: 8px;
        border-radius: 6px;
        border: 1px solid #ccc;
    }
</style>

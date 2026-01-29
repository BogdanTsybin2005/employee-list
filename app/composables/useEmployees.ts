import type { Employee } from '~/models/employee'

// Ключ для хранения данных в LocalStorage
const STORAGE_KEY = 'employees'

export function useEmployees() {
  // Реактивный список сотрудников
  const employees = ref<Employee[]>([])

  // Загрузка данных из LocalStorage
  const load = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    employees.value = data ? JSON.parse(data) : []
  }

  // Сохранение данных в LocalStorage
  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees.value))
  }

  // Добавление нового сотрудника
  const addEmployee = (employee: Employee) => {
    employees.value.push(employee)
    save()
  }

  // Обновление существующего сотрудника
  const updateEmployee = (employee: Employee) => {
    const index = employees.value.findIndex(e => e.id === employee.id)
    if (index !== -1) {
      employees.value[index] = employee
      save()
    }
  }

  // Удаление сотрудника по ID
  const removeEmployee = (id: string) => {
    employees.value = employees.value.filter(e => e.id !== id)
    save()
  }

  // Загрузка данных при инициализации
  onMounted(load)

  // Публичный API composable
  return {
    employees,
    addEmployee,
    updateEmployee,
    removeEmployee,
  }
}

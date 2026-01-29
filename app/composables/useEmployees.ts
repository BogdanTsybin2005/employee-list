import type { Employee } from '~/models/employee'

const STORAGE_KEY = 'employees'

export function useEmployees() {
  const employees = ref<Employee[]>([])
  
  const load = () => {
    const data = localStorage.getItem(STORAGE_KEY)
    employees.value = data ? JSON.parse(data) : []
  }

  const save = () => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(employees.value))
  }

  const addEmployee = (employee: Employee) => {
    employees.value.push(employee)
    save()
  }

  const updateEmployee = (employee: Employee) => {
    const index = employees.value.findIndex(e => e.id === employee.id)
    if (index !== -1) {
      employees.value[index] = employee
      save()
    }
  }

  const removeEmployee = (id: string) => {
    employees.value = employees.value.filter(e => e.id !== id)
    save()
  }

  onMounted(load)

  return {
    employees,
    addEmployee,
    updateEmployee,
    removeEmployee,
  }
}

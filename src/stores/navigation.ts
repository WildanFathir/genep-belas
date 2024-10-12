import { ref, watch } from 'vue'
import { defineStore } from 'pinia'
import { useRoute } from 'vue-router'

export const useNavigationStore = defineStore('navigation', () => {
  const route = useRoute()
  const pathSelected = ref(route.fullPath)

  watch(route, () => {
    pathSelected.value = route.fullPath
  })

  return {
    pathSelected,
  }
})

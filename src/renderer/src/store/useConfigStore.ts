import { defineStore } from 'pinia'
import { ref } from 'vue'

const useConfigStore = defineStore(
  'config',
  () => {
    const config = ref({
      rounded: false,
      deviceId: '',
    })
    return { config }
  },
  // 持久化
  { persist: true },
)

export default useConfigStore

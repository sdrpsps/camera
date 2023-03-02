<template>
  <div v-if="!config.showSetting" class="drag absolute top-[18%] left-[18%] z-10 h-[65%] w-[65%] bg-transparent"></div>
</template>

<script setup lang="ts">
import useConfigStore from '../store/useConfigStore'

const { config } = useConfigStore()
</script>

<style scoped>
.drag {
  -webkit-app-region: drag;
}
</style>

<template>
  <div v-if="!config.showSetting" class="drag absolute top-[13%] left-[13%] z-10 h-[75%] w-[75%] bg-transparent"></div>
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

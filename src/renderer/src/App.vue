<script setup lang="ts">
import { onMounted } from 'vue'
import Camera from './components/Camera.vue'
// import useDrag from './composables/useDrag'

onMounted(() => {
  // 拖拽窗口
  // const { drag } = useDrag()
  // drag.run()
})

const onContextMenu = (): void => {
  window.api.onContextMenu()
}
</script>

<template>
  <Suspense>
    <main class="w-screen h-screen" @contextmenu="onContextMenu">
      <Camera />
    </main>
  </Suspense>
</template>

<style lang="less"></style>

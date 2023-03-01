<script setup lang="ts">
import Camera from './components/Camera.vue'

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

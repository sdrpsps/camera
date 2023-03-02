<template>
  <section
    class="relative group w-screen h-screen flex justify-center items-center overflow-hidden duration-300 ease-in-out"
    :class="{ 'rounded-full': config.rounded }">
    <section v-if="cameraStatus" class="text-gray-200 hidden group-hover:block z-10">
      <el-icon
        v-if="!config.showSetting"
        class="absolute text-2xl top-2 left-1/2 -translate-x-[0.75rem] cursor-pointer"
        @click="config.showSetting = !config.showSetting"
        ><Setting
      /></el-icon>
      <el-icon
        class="absolute text-2xl bottom-2 left-1/2 -translate-x-[0.75rem] cursor-pointer"
        @click="config.rounded = !config.rounded"
        ><Baseball
      /></el-icon>
    </section>
    <main>
      <video
        class="object-cover h-screen duration-300 ease-in-out"
        :class="{
          blur: config.showSetting,
          'rounded-full': config.rounded,
          'rounded-xl': !config.rounded,
          'bg-[#2f3241]': !cameraStatus,
        }"
        :style="`border: solid ${config.borderWidth} ${config.borderColor}`"></video>
      <Transition>
        <CameraSetting v-if="config.showSetting" />
      </Transition>
      <Drag />
    </main>
  </section>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import useConfigStore from '../store/useConfigStore'
import CameraSetting from './CameraSetting.vue'
import Drag from './Drag.vue'

onMounted(() => {
  const video = document.querySelector('video')!

  navigator.mediaDevices
    .getUserMedia(constraints.value)
    .then((stream) => {
      cameraStatus.value = true
      video.srcObject = stream
      video.play()
    })
    .catch((error) => {
      cameraStatus.value = false
      ElMessage.error({ message: '找不到摄像头', duration: 0, center: true, offset: 40 })
      console.error(error)
    })
})
// 摄像头可用状态
const cameraStatus = ref<boolean>(false)

// 摄像头参数
const { config } = useConfigStore()
const constraints = ref({
  video: { deviceId: config.deviceId },
  audio: false,
})
</script>

<style scoped lang="less">
// v-if 淡入淡出
.v-enter-active,
.v-leave-active {
  transition: opacity 0.5s ease;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>

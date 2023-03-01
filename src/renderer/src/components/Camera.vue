<template>
  <section
    class="relative group w-screen h-screen flex justify-center items-center overflow-hidden duration-300 ease-in-out"
    :class="{ 'rounded-full': config.rounded }">
    <section v-if="cameraStatus" class="text-gray-200 hidden group-hover:block z-10">
      <el-icon
        v-if="!showSetting"
        class="absolute top-1 left-1/2 -translate-x-[8px] cursor-pointer"
        @click="showSetting = !showSetting"
        ><Setting
      /></el-icon>
      <el-icon
        class="absolute bottom-1 left-1/2 -translate-x-[8px] cursor-pointer"
        @click="config.rounded = !config.rounded"
        ><Baseball
      /></el-icon>
    </section>
    <main>
      <video
        class="object-cover h-screen duration-300 ease-in-out"
        :class="{ blur: showSetting, 'rounded-full': config.rounded, 'bg-[#2f3241]': !cameraStatus }"></video>
      <Transition>
        <CameraSetting v-if="showSetting" @on-toggle-setting="onToggleSetting" />
      </Transition>
    </main>
  </section>
</template>

<script setup lang="ts">
import { ElMessage } from 'element-plus'
import { onMounted, ref } from 'vue'
import useConfigStore from '../store/useConfigStore'
import CameraSetting from './CameraSetting.vue'

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
      ElMessage.error({ message: '找不到摄像头', duration: 0 })
      console.log(error)
    })
})
const cameraStatus = ref<boolean>(false)

// 参数设置显示
const showSetting = ref<boolean>(false)

// 摄像头参数
const { config } = useConfigStore()
const constraints = ref({
  video: { deviceId: config.deviceId },
  audio: false,
})

// 关闭设置窗口
const onToggleSetting = (): void => {
  showSetting.value = false
}
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

<template>
  <section class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 p-5">
    <main>
      <section class="mb-5 flex justify-between items-center text-gray-300">
        <h2>参数设置</h2>
        <el-icon class="cursor-pointer" @click="toggleSetting"><Close /></el-icon>
      </section>
      <section>
        <el-form label-width="0" label-position="top" class="w-max">
          <el-form-item>
            <el-select v-model="config.deviceId" placeholder="选择摄像头" clearable>
              <el-option v-for="item in cameras" :key="item.deviceId" :label="item.label" :value="item.deviceId" />
            </el-select>
          </el-form-item>
        </el-form>
      </section>
    </main>
  </section>
</template>

<script setup lang="ts">
import useConfigStore from '../store/useConfigStore'

const { config } = useConfigStore()
// 获取摄像头列表
const devices = await navigator.mediaDevices.enumerateDevices()

// 摄像头列表
const cameras = devices.filter((item) => item.kind === 'videoinput')

// 点击关闭图标时
const emit = defineEmits(['on-toggle-setting'])
const toggleSetting = (): void => {
  emit('on-toggle-setting', false)
}
</script>

<style scoped></style>

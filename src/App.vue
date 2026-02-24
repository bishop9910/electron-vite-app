<script setup lang="ts">
import { onBeforeMount } from 'vue';
import UpdateInfo from './components/UpdateInfo.vue';
import { installUpdate, loadConfig } from './scripts/ipc';

onBeforeMount(() => {
  loadConfig()
})

const handleInstallUpdate = () => {
  installUpdate()
};
</script>

<template>
  <UpdateInfo @install="handleInstallUpdate"/>
</template>

<style>
.flex-center {
  display: flex;
  align-items: center;
  justify-content: center;
}
.screen{
  height: 100%;
}
</style>

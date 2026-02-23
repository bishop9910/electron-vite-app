<script setup lang="ts">
import { onBeforeMount } from 'vue';
import UpdateInfo from './components/UpdateInfo.vue';
import { loadConfig } from './scripts/ipc';

onBeforeMount(() => {
  loadConfig()
})

const handleInstallUpdate = () => {
  window.ipcRenderer.send('install-update');
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

import { createApp } from 'vue'
import App from './App.vue'

import { init } from "./scripts/ipc"
// If you want use Node.js, the`nodeIntegration` needs to be enabled in the Main process.
// import './demos/node'
import 'element-plus/dist/index.css'
import 'element-plus/theme-chalk/dark/css-vars.css'

createApp(App).mount('#app');
init();
postMessage({ payload: 'removeLoading' }, '*');

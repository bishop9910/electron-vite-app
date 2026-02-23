import { type Config } from '../../type'

var isInited: boolean = false;

export async function init(){
  if(isInited){
    return
  }
  window.ipcRenderer.on('main-process-message', (_event, ...args) => {
    console.log('[Receive Main-process message]:', ...args)
  });
  window.ipcRenderer.send("init");
  const version = await getVersion();
  const name = await getAppName();

  window.ipcRenderer.send("show-notification", {
    title: name,
    body: `已成功启动，版本号${version}`
  });
}

export async function getVersion() {
  return window.ipcRenderer.invoke("get-version");
}

export async function getAppName() {
  return window.ipcRenderer.invoke("get-app-name");
}

export function getConfig(){
  return window.ipcRenderer.invoke("get-config");
}

export function editConfig(formData: Config): void{
  window.ipcRenderer.send("edit-config", formData);
}

export function useConfig(configData: Config): void{
  if(configData.theme === "dark"){
    document.documentElement.classList.add('dark')
  }
  if(configData.theme !== "dark" && document.documentElement.classList.contains('dark')){
    document.documentElement.classList.remove('dark')
  }
}

export async function loadConfig() {
  try {
    const data = await getConfig()
    useConfig(data)
  } catch (err) {
    console.error('Failed to load config:', err)
  }
}
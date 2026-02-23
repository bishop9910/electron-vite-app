import { getConfig } from "./config";
import { type Config } from '../../type'
import { win } from ".";
import { app } from 'electron';
import pkg from 'electron-updater';
const { autoUpdater } = pkg;

function initAutoUpdate() {
  if (!app.isPackaged) {
    return;
  }

  // autoUpdater.setFeedURL({
    //一定要添加仓库名口阿
    //记得把latest.yml也传上去
    // provider: 'github',
    // owner: 'bishop9910',
    // repo: 'electron-vite-app'
  // });

  autoUpdater.checkForUpdatesAndNotify();

  autoUpdater.on('error', (err: Error) => {
    win?.webContents.send('update-error', err.message);
  });

  autoUpdater.on('download-progress', (progressObj) => {
    win?.webContents.send('update-download-progress', progressObj);
  });

  autoUpdater.on('update-downloaded', (_info) => {
    win?.webContents.send('update-downloaded')
  });

  autoUpdater.on('update-available', (_info) => {
    win?.webContents.send("update-available")
  })

  autoUpdater.on('update-not-available', (_info)=>{
    win?.webContents.send("update-not-available")
  })
}

export function checkUpdate(): void{
  const config: Config = getConfig();
  if(config.autoUpdate){
    win?.webContents.send('update-checking')
    initAutoUpdate()
  }
}

export function installUpdate(): void{
  autoUpdater.quitAndInstall()
}
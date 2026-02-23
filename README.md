# electron-vite-app

[![GitHub Build](https://github.com/bishop9910/electron-vite-app/actions/workflows/build.yml/badge.svg)](https://github.com/bishop9910/electron-vite-app/actions/workflows/build.yml)

## Quick Setup

```sh
# clone the project
git clone https://github.com/bishop9910/electron-vite-app.git

# enter the project directory
cd electron-vite-app

# install dependency
npm install

# develop
npm run dev
```

## Debug

![electron-vite-react-debug.gif](https://github.com/electron-vite/electron-vite-react/blob/main/electron-vite-react-debug.gif?raw=true)

## Directory

```diff
  ├─┬ electron
  │ ├─┬ main
  │ │ ├── config.ts       app config scripts in main thread
  │ │ ├── image.ts        local img solve scripts
  │ │ ├── init.ts         app init function
  │ │ ├── io.ts           json in/out script
  │ │ ├── notify.ts       notification script
  │ │ ├── update.ts       autoupdate script
  │ │ └── index.ts        entry of Electron-Main
  │ └─┬ preload
  │   └── index.ts        entry of Preload-Scripts
  ├─┬ src
  │ ├─┬ assets
  │ │ └─┬ style
  │ │   └── base.css      base style for app
  │ ├─┬ components
  │ │ └── UpdateInfo.vue  autoupdate info message box
  │ ├─┬ scripts
  │ │ ├── node.ts         (not used)
  │ │ └── ipc.ts          ipc scripts(init for ipc thread)
  │ ├── App.vue           root component for app
  │ └── main.ts           entry of Electron-Renderer
  ├── index.html          entry of Vue and Vite
  ├── type.d.ts           all types defined in app
  ├── package.json        package config
  └── vite.config.ts      vite config
```

# Remember to change this code in update.ts
(provide a feed for electron updater)

```ts
  autoUpdater.setFeedURL({
    //一定要添加仓库名口阿
    //记得把latest.yml也传上去
    provider: 'github',
    owner: 'bishop9910',
    repo: 'electron-vite-app'
  });
```
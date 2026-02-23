# Galgame Management Application based on electron-vite-vue

[![GitHub Build](https://github.com/bishop9910/Galgame-Manager/actions/workflows/build.yml/badge.svg)](https://github.com/bishop9910/Galgame-Manager/actions/workflows/build.yml)

## Quick Setup

```sh
# clone the project
git clone https://github.com/bishop9910/Galgame-Manager.git

# enter the project directory
cd Galgame-Manager

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
  │ │ └── index.ts    entry of Electron-Main
  │ └─┬ preload
  │   └── index.ts    entry of Preload-Scripts
  ├─┬ src
  │ └── main.ts       entry of Electron-Renderer
  ├── index.html      entry of Vue and Vite
  ├── package.json
  └── vite.config.ts
```
# Wails 2 - File Drop Test

## About

This is test project to get the full path of file in Wails 2.

## How to run

First clone this repo:

```bash
git clone git@github.com:ayatkyo/wails-2-file-drop-test.git
```

Then clone this repos [go-webview2](https://github.com/ayatkyo/go-webview2/tree/feature/file-real-path) and [](https://github.com/ayatkyo/wails/tree/feature/v2-windows-file-real-path) into that directory

```bash
cd wails-2-file-drop-test
git clone --depth 1 --single-branch --branch "feature/v2-windows-file-real-path" git@github.com:ayatkyo/wails.git ./local/wails
git clone --depth 1 --single-branch --branch "feature/file-real-path" git@github.com:ayatkyo/go-webview2.git ./local/go-webview2
```

Build Wails runtime using command:

```bash
cd .\local\wails\v2\internal\frontend\
pnpm install && pnpm run build
```

After that, run using this command:

```bash
wails dev
```

## Video

https://github.com/wailsapp/wails/assets/2143364/54a8781f-c098-4bbf-bd32-cd8550690255

const { app, BrowserWindow, Menu, shell } = require('electron')
const path = require('path')

const isDev = process.env.NODE_ENV === 'development'

function createWindow() {
  const win = new BrowserWindow({
    width:     420,
    height:    860,
    minWidth:  380,
    minHeight: 700,
    resizable: true,
    title:     'fx-991EX ClassWiz',
    backgroundColor: '#111111',
    icon: path.join(__dirname, '../build-resources/icon.png'),
    webPreferences: {
      nodeIntegration:  false,
      contextIsolation: true,
      preload: path.join(__dirname, 'preload.js'),
      // Allow local file access for Electron build
      webSecurity: !isDev,
    },
    // Window frame
    frame:          true,
    autoHideMenuBar: true,
    titleBarStyle:  'default',
  })

  if (isDev) {
    win.loadURL('http://localhost:5173')
    // Open DevTools in dev mode
    // win.webContents.openDevTools()
  } else {
    // Load from built dist folder
    win.loadFile(path.join(__dirname, '../dist/index.html'))
  }

  // Open external links in system browser, not Electron
  win.webContents.setWindowOpenHandler(({ url }) => {
    shell.openExternal(url)
    return { action: 'deny' }
  })

  // Remove default menu in production
  Menu.setApplicationMenu(null)

  return win
}

// Single instance lock
const gotLock = app.requestSingleInstanceLock()
if (!gotLock) {
  app.quit()
} else {
  app.on('second-instance', () => {
    const wins = BrowserWindow.getAllWindows()
    if (wins.length) {
      if (wins[0].isMinimized()) wins[0].restore()
      wins[0].focus()
    }
  })

  app.whenReady().then(() => {
    createWindow()
    app.on('activate', () => {
      if (BrowserWindow.getAllWindows().length === 0) createWindow()
    })
  })

  app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') app.quit()
  })
}

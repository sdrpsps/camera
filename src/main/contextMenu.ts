import { ipcMain, app, Menu, shell, MenuItemConstructorOptions, BrowserWindow } from 'electron'

ipcMain.on('mainPopMenu', (event) => {
  const template = [
    {
      label: '访问官网',
      click: (): void => {
        shell.openExternal('https://hchow.icu')
      },
    },
    {
      label: '打开DevTool',
      click: (): void => {
        BrowserWindow.fromWebContents(event.sender)?.webContents.openDevTools()
      },
    },
    { type: 'separator' },
    {
      label: '退出',
      click: (): void => {
        app.quit()
      },
    },
  ] as MenuItemConstructorOptions[]
  const menu = Menu.buildFromTemplate(template)
  menu.popup()
})

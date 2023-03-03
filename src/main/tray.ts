import { Menu, shell, Tray } from 'electron'
import path from 'path'

const createTray = (): void => {
  const tray = new Tray(
    path.resolve(
      __dirname,
      process.platform === 'darwin' ? '../../resources/iconTemplate@2x.png' : '../../resources/windowTray.png',
    ),
  )
  const contextMenu = Menu.buildFromTemplate([
    { label: '访问官网', click: () => shell.openExternal('https://hchow.icu') },
    { type: 'separator' },
    { label: '退出', role: 'quit' },
  ])

  tray.setToolTip('做着玩的摄像头')
  tray.setContextMenu(contextMenu)
}

export default createTray

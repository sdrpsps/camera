import { BrowserWindow, ipcMain } from 'electron'

export default (win: BrowserWindow): void => {
  ipcMain.handle('onDrag', (_event, position: { x: number; y: number }) => {
    const [x, y] = win.getPosition()
    win.setPosition(x + position.x, y + position.y)
    console.log(x, '--------------', y)
  })
}

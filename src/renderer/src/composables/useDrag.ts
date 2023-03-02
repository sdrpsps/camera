/**
 * 思想：
 * 当鼠标移动了多少个像素时
 * 同时通知主进程移动多少个像素
 */

class Drag {
  private body?: HTMLBodyElement
  private pageX = 0
  private pageY = 0
  public run(): void {
    window.addEventListener('DOMContentLoaded', () => {
      this.body = document.querySelector('body')!
      // 为什么要使用 bind ？因为 mouseDown 指向的 this 是当前鼠标事件对象而不是 Drag 类
      this.body.addEventListener('mousedown', this.mouseDown.bind(this))
    })
  }
  private mouseDown(e: MouseEvent): void {
    // 先保存当前鼠标位置
    this.pageX = e.pageX
    this.pageY = e.pageY
    const mouseMoveCallback = this.mouseMove.bind(this)
    this.body?.addEventListener('mousemove', mouseMoveCallback)
    // 鼠标抬起和离开窗口时取消回调
    this.body?.addEventListener('mouseup', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
    this.body?.addEventListener('mouseout', () => {
      this.body?.removeEventListener('mousemove', mouseMoveCallback)
    })
  }

  private mouseMove(e: MouseEvent): void {
    const x = e.pageX - this.pageX
    const y = e.pageY - this.pageY
    window.api.onDrag({ x, y })
  }
}

export default (): any => {
  const drag = new Drag()
  return { drag }
}

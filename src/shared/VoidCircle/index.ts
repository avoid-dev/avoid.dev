import { CanvasKit } from "../CanvasKit"

export class VoidCircle extends CanvasKit {
  x: number = 0
  y: number = 0
  size: number = 100
  drawCircle() {
    if (!this.ctx || !this.canvas) return

    this.ctx.fillStyle = "white"
    this.ctx.beginPath()
    this.ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2)
    this.ctx.fill()
    this.ctx.stroke()
  }
  setup() {
    if (!this.ctx || !this.canvas) return
  }
  changes() {
    this.x =
      (Math.cos(this.t * 10 + 10) * window.innerWidth) / 2 +
      window.innerWidth / 2
    this.y =
      (Math.sin(this.t * 10 + 3) * window.innerHeight) / 2 +
      window.innerHeight / 2
    this.size = Math.sin(this.t * 10 + 5) * 20 + 50
  }
  draw() {
    if (!this.ctx) return
    this.ctx.fillStyle = "rgba(255, 255, 255, 0.3)"
    this.ctx.fillRect(0, 0, window.innerWidth, window.innerHeight)
    this.changes()
    this.drawCircle()
  }
}

export class CanvasKit {
  canvas: HTMLCanvasElement | null = null
  _setupDone: boolean = false
  ctx: CanvasRenderingContext2D | null = null
  t: number = 0
  constructor() {
    this.animate = this.animate.bind(this)
    this.animate()
  }
  fixSize() {
    if (!this.canvas) return
    this.canvas.width = window.innerWidth
    this.canvas.height = window.innerHeight
  }
  init() {
    if (!this.canvas) return
    window.addEventListener("resize", () => this.fixSize())
    this.fixSize()
    this._setupDone = true
    this.ctx = this.canvas.getContext("2d")
    this.setup()
  }
  animate() {
    requestAnimationFrame(this.animate)
    if (!this.canvas) return
    if (!this._setupDone) this.init()
    this.t += 0.001
    this.draw()
  }
  setup() {}
  draw() {}
}

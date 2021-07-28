import { nonnull } from './utils'

export class Renderer {
  public readonly canvas: HTMLCanvasElement
  public readonly context: CanvasRenderingContext2D

  public constructor(canvas: HTMLCanvasElement) {
    this.canvas = canvas
    this.context = nonnull(canvas.getContext('2d'))
  }

  public start(): void {
    window.requestAnimationFrame((ts) => this.on_frame(ts))
  }

  private on_frame(timestamp: DOMHighResTimeStamp): void {
    this.draw_frame(timestamp)
    window.requestAnimationFrame((ts) => this.on_frame(ts))
  }

  private t = 0

  private draw_frame(timestamp: DOMHighResTimeStamp): void {
    console.log(timestamp)
    this.context.fillStyle = 'rgb(255,255,255)'
    this.context.fillRect(0, 0, 600, 150)
    const x = Math.sin((2 * Math.PI * this.t) / 60.0) * 300 + 300
    this.context.fillStyle = 'rgb(0,0,255)'
    this.context.fillRect(x, 10, 100, 100)
    this.t += 1
  }
}

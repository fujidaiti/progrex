import { Renderer } from './renderer'

export function render(): void {
  const canvas = document.createElement('canvas')
  canvas.width = 600
  canvas.height = 150
  document.body.appendChild(canvas)
  renderer = new Renderer(canvas)
  renderer.start()
}

let renderer: Renderer

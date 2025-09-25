'use client'

import { useEffect, useRef } from 'react'

const AnimatedBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null)

  useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    let width = (canvas.width = window.innerWidth)
    let height = (canvas.height = window.innerHeight)
    window.addEventListener('resize', () => {
      width = canvas.width = window.innerWidth
      height = canvas.height = window.innerHeight
    })

    const particles: {
      x: number
      y: number
      size: number
      speedX: number
      speedY: number
    }[] = []

    const numParticles = 50

    for (let i = 0; i < numParticles; i++) {
      particles.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 2 + 1,
        speedX: Math.random() * 2 - 1,
        speedY: Math.random() * 2 - 1,
      })
    }

    const animate = () => {
      ctx.clearRect(0, 0, width, height)

      particles.forEach(p => {
        p.x += p.speedX
        p.y += p.speedY

        if (p.x > width || p.x < 0) p.speedX *= -1
        if (p.y > height || p.y < 0) p.speedY *= -1

        ctx.beginPath()
        ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2)
        ctx.fillStyle = 'rgba(165, 180, 252, 0.5)' // primary-300 with opacity
        ctx.fill()
      })

      requestAnimationFrame(animate)
    }

    animate()
  }, [])

  return (
    <canvas
      ref={canvasRef}
      className="fixed inset-0 pointer-events-none opacity-20 dark:opacity-30 z-0"
    />
  )
}

export default AnimatedBackground 
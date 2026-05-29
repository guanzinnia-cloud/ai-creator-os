import { useEffect, useRef } from 'react'

interface Node {
  ox: number
  oy: number
  x: number
  y: number
  vx: number
  vy: number
  baseR: number
  r: number
  brightness: number
  baseBright: number
  pulsePhase: number
  pulseSpeed: number
}

export default function NetworkCanvas() {
  const containerRef = useRef<HTMLDivElement>(null)
  const canvasRef = useRef<HTMLCanvasElement>(null)
  const mouseRef = useRef({ x: -1000, y: -1000, active: false })
  const collapsedRef = useRef(false)
  const animIdRef = useRef<number>(0)
  const lastTimeRef = useRef(0)
  const collapsedTimeRef = useRef(0)
  const skillNodeRef = useRef<Node | null>(null)
  const expandTimerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const DPRRef = useRef(1)

  useEffect(() => {
    const container = containerRef.current
    const canvas = canvasRef.current
    if (!container || !canvas) return

    const ctx = canvas.getContext('2d')
    if (!ctx) return

    const DPR = window.devicePixelRatio || 1
    DPRRef.current = DPR

    let w = 0
    let h = 0

    function resize() {
      const rect = container!.getBoundingClientRect()
      w = canvas!.width = rect.width * DPR
      h = canvas!.height = rect.height * DPR
      canvas!.style.width = rect.width + 'px'
      canvas!.style.height = rect.height + 'px'
    }

    resize()
    window.addEventListener('resize', resize)

    const nodes: Node[] = []

    function initNodes() {
      const cols = 12
      const rows = 8
      const spacingX = w / (cols + 1)
      const spacingY = h / (rows + 1)
      nodes.length = 0

      for (let r = 0; r < rows; r++) {
        for (let c = 0; c < cols; c++) {
          const baseX = (c + 1) * spacingX + (Math.random() - 0.5) * spacingX * 0.3
          const baseY = (r + 1) * spacingY + (Math.random() - 0.5) * spacingY * 0.3
          const br = 2 + Math.random() * 2
          nodes.push({
            ox: baseX, oy: baseY,
            x: baseX, y: baseY,
            vx: 0, vy: 0,
            baseR: br, r: br,
            brightness: 0.1 + Math.random() * 0.2,
            baseBright: 0.1 + Math.random() * 0.15,
            pulsePhase: Math.random() * Math.PI * 2,
            pulseSpeed: 0.5 + Math.random() * 1.5,
          })
        }
      }
      skillNodeRef.current = nodes[Math.floor(nodes.length / 2 + 6)]
    }

    initNodes()

    function drawExplosion(_dt: number, _mx: number, _my: number) {
      const sn = skillNodeRef.current
      if (!sn) return

      // Glow halo
      const gradient = ctx!.createRadialGradient(sn.x, sn.y, 0, sn.x, sn.y, 80 * DPR)
      gradient.addColorStop(0, 'rgba(74, 246, 255, 0.3)')
      gradient.addColorStop(0.5, 'rgba(74, 246, 255, 0.08)')
      gradient.addColorStop(1, 'rgba(74, 246, 255, 0)')
      ctx!.fillStyle = gradient
      ctx!.beginPath()
      ctx!.arc(sn.x, sn.y, 80 * DPR, 0, Math.PI * 2)
      ctx!.fill()

      // Particle burst
      const particleCount = 40
      const time = performance.now() / 1000
      for (let i = 0; i < particleCount; i++) {
        const angle = (i / particleCount) * Math.PI * 2 + time * 2
        const radius = 20 + Math.sin(time * 3 + i) * 15
        const px = sn.x + Math.cos(angle) * radius
        const py = sn.y + Math.sin(angle) * radius
        const size = 1 + Math.random() * 1.5
        const alpha = 0.4 + Math.sin(time * 4 + i) * 0.3

        ctx!.beginPath()
        ctx!.arc(px, py, size, 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(74, 246, 255, ${alpha})`
        ctx!.fill()
      }

      // Connection beams
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        if (n === sn) continue
        const ndx = n.x - sn.x
        const ndy = n.y - sn.y
        const nd = Math.sqrt(ndx * ndx + ndy * ndy)
        if (nd < 120 * DPR) {
          ctx!.beginPath()
          ctx!.moveTo(sn.x, sn.y)
          ctx!.lineTo(n.x, n.y)
          ctx!.strokeStyle = `rgba(74, 246, 255, ${0.15 * (1 - nd / (120 * DPR))})`
          ctx!.lineWidth = 0.8
          ctx!.stroke()
        }
      }
    }

    function updateNodes(dt: number, mx: number, my: number) {
      for (let i = 0; i < nodes.length; i++) {
        const n = nodes[i]
        n.pulsePhase += n.pulseSpeed * dt

        let targetR: number
        if (collapsedRef.current && mouseRef.current.active) {
          targetR = n === skillNodeRef.current ? 10 : (Math.sin(n.pulsePhase) * 0.5 + 0.5) * 1.5
        } else {
          targetR = n.baseR + Math.sin(n.pulsePhase) * 1.5
        }
        n.r += (targetR - n.r) * 5 * dt

        let tb: number
        if (collapsedRef.current && mouseRef.current.active) {
          tb = n === skillNodeRef.current ? 1.0 : 0.05
        } else {
          tb = n.baseBright + Math.sin(n.pulsePhase) * 0.1
        }
        n.brightness += (tb - n.brightness) * 4 * dt

        if (collapsedRef.current && mouseRef.current.active) {
          const dx = mx - n.x
          const dy = my - n.y
          const dist = Math.sqrt(dx * dx + dy * dy)
          if (dist > 1) {
            const force = (n === skillNodeRef.current) ? 20 : 10
            const nvx = (dx / dist) * force
            const nvy = (dy / dist) * force
            n.vx += (nvx - n.vx) * 6 * dt
            n.vy += (nvy - n.vy) * 6 * dt
            n.x += n.vx * dt * 60
            n.y += n.vy * dt * 60
          }
        } else {
          const springK = 3
          const damp = 6
          const ax = (n.ox - n.x) * springK
          const ay = (n.oy - n.y) * springK
          n.vx += ax * dt
          n.vy += ay * dt
          n.vx *= Math.max(0, 1 - damp * dt)
          n.vy *= Math.max(0, 1 - damp * dt)
          n.x += n.vx * dt * 60
          n.y += n.vy * dt * 60
        }

        ctx!.beginPath()
        ctx!.arc(n.x, n.y, Math.max(0.5, n.r), 0, Math.PI * 2)
        ctx!.fillStyle = `rgba(74, 246, 255, ${n.brightness})`
        ctx!.fill()

        if ((!collapsedRef.current || !mouseRef.current.active) && n.r > 1.5) {
          ctx!.beginPath()
          ctx!.arc(n.x, n.y, Math.max(0.3, n.r * 0.4), 0, Math.PI * 2)
          ctx!.fillStyle = `rgba(255, 255, 255, ${n.brightness * 0.5})`
          ctx!.fill()
        }

        if (n.brightness > 0.3 && (!collapsedRef.current || !mouseRef.current.active)) {
          for (let j = i + 1; j < nodes.length; j++) {
            const nx = nodes[j]
            const cdx = nx.x - n.x
            const cdy = nx.y - n.y
            const d = Math.sqrt(cdx * cdx + cdy * cdy)
            if (d < 100 * DPR) {
              ctx!.beginPath()
              ctx!.moveTo(n.x, n.y)
              ctx!.lineTo(nx.x, nx.y)
              ctx!.strokeStyle = `rgba(74, 246, 255, ${(n.brightness + nx.brightness) * 0.5 * (1 - d / (100 * DPR))})`
              ctx!.lineWidth = 0.5
              ctx!.stroke()
            }
          }
        }
      }
    }

    function update(timestamp: number) {
      if (!lastTimeRef.current) lastTimeRef.current = timestamp
      const dt = Math.min((timestamp - lastTimeRef.current) / 1000, 0.05)
      lastTimeRef.current = timestamp

      const rect = canvas!.getBoundingClientRect()
      const mouseX = (mouseRef.current.x - rect.left) * DPR
      const mouseY = (mouseRef.current.y - rect.top) * DPR

      ctx!.clearRect(0, 0, w, h)

      if (collapsedRef.current && mouseRef.current.active) {
        collapsedTimeRef.current += dt
      } else {
        collapsedTimeRef.current = 0
      }

      if (collapsedRef.current && mouseRef.current.active && collapsedTimeRef.current > 0.15) {
        drawExplosion(dt, mouseX, mouseY)
      }

      updateNodes(dt, mouseX, mouseY)
      animIdRef.current = requestAnimationFrame(update)
    }

    const onMouseEnter = () => {
      mouseRef.current.active = true
      collapsedRef.current = true
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current)
    }
    const onMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX
      mouseRef.current.y = e.clientY
    }
    const onMouseLeave = () => {
      mouseRef.current.x = -1000
      mouseRef.current.y = -1000
      mouseRef.current.active = false
      collapsedRef.current = false
      expandTimerRef.current = setTimeout(() => {
        collapsedRef.current = false
      }, 800)
    }

    container.addEventListener('mouseenter', onMouseEnter)
    container.addEventListener('mousemove', onMouseMove)
    container.addEventListener('mouseleave', onMouseLeave)

    animIdRef.current = requestAnimationFrame(update)

    return () => {
      cancelAnimationFrame(animIdRef.current)
      window.removeEventListener('resize', resize)
      container.removeEventListener('mouseenter', onMouseEnter)
      container.removeEventListener('mousemove', onMouseMove)
      container.removeEventListener('mouseleave', onMouseLeave)
      if (expandTimerRef.current) clearTimeout(expandTimerRef.current)
    }
  }, [])

  return (
    <div ref={containerRef} className="network-canvas-container">
      <canvas ref={canvasRef} className="network-canvas-el" />
    </div>
  )
}

'use client'

import { useEffect, useRef } from 'react'
import Image from 'next/image'

/**
 * The crash-test dummy logo, with a subtle cursor-tracking tilt.
 * Feels like the dummy is paying attention to you. Editorial, not gimmicky:
 * max ~5° rotation, small translate, smooth easing.
 */
export function CursorMark({ size = 36 }: { size?: number }) {
  const wrapRef = useRef<HTMLSpanElement>(null)
  const innerRef = useRef<HTMLSpanElement>(null)

  useEffect(() => {
    const wrap = wrapRef.current
    const inner = innerRef.current
    if (!wrap || !inner) return

    let raf = 0
    let targetX = 0
    let targetY = 0
    let currentX = 0
    let currentY = 0

    function handleMove(e: MouseEvent) {
      if (!wrap) return
      const rect = wrap.getBoundingClientRect()
      const cx = rect.left + rect.width / 2
      const cy = rect.top + rect.height / 2
      const dx = e.clientX - cx
      const dy = e.clientY - cy
      const dist = Math.hypot(dx, dy)
      const maxDist = 600
      const strength = Math.min(1, dist / maxDist)
      // normalize and dampen
      targetX = (dx / Math.max(dist, 1)) * strength * 3
      targetY = (dy / Math.max(dist, 1)) * strength * 3

      if (!raf) raf = requestAnimationFrame(tick)
    }

    function tick() {
      // smooth follow
      currentX += (targetX - currentX) * 0.12
      currentY += (targetY - currentY) * 0.12
      if (inner) {
        const rotX = -currentY * 0.6
        const rotY = currentX * 0.6
        inner.style.transform = `perspective(360px) rotateX(${rotX}deg) rotateY(${rotY}deg) translate(${currentX * 0.4}px, ${currentY * 0.4}px)`
      }
      const settled = Math.abs(targetX - currentX) < 0.05 && Math.abs(targetY - currentY) < 0.05
      if (!settled) {
        raf = requestAnimationFrame(tick)
      } else {
        raf = 0
      }
    }

    function handleLeave() {
      targetX = 0
      targetY = 0
      if (!raf) raf = requestAnimationFrame(tick)
    }

    window.addEventListener('mousemove', handleMove)
    window.addEventListener('mouseleave', handleLeave)
    return () => {
      window.removeEventListener('mousemove', handleMove)
      window.removeEventListener('mouseleave', handleLeave)
      if (raf) cancelAnimationFrame(raf)
    }
  }, [])

  return (
    <span
      ref={wrapRef}
      className="mark"
      style={{
        width: size,
        height: size,
        perspective: 360,
      }}
      aria-hidden="true"
    >
      <span
        ref={innerRef}
        style={{
          display: 'inline-flex',
          width: '100%',
          height: '100%',
          transition: 'transform 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
          willChange: 'transform',
        }}
      >
        <Image
          src="/brand/dummy-labs-icon.png"
          alt=""
          width={size}
          height={size}
          className="w-full h-full object-cover"
          priority
        />
      </span>
    </span>
  )
}

'use client'
import { useEffect, useRef } from 'react'

export default function Cursor() {
  const cursorRef = useRef(null)
  const ringRef = useRef(null)
  const pos = useRef({ x: 0, y: 0 })
  const ring = useRef({ x: 0, y: 0 })
  const rafRef = useRef(null)

  useEffect(() => {
    const onMove = (e) => {
      pos.current = { x: e.clientX, y: e.clientY }
      if (cursorRef.current) {
        cursorRef.current.style.transform = `translate(${e.clientX - 6}px, ${e.clientY - 6}px)`
      }
    }

    const animate = () => {
      ring.current.x += (pos.current.x - ring.current.x - 18) * 0.1
      ring.current.y += (pos.current.y - ring.current.y - 18) * 0.1
      if (ringRef.current) {
        ringRef.current.style.transform = `translate(${ring.current.x}px, ${ring.current.y}px)`
      }
      rafRef.current = requestAnimationFrame(animate)
    }

    window.addEventListener('mousemove', onMove)
    rafRef.current = requestAnimationFrame(animate)

    const hoverEls = document.querySelectorAll('a, button, input, textarea, [data-cursor]')
    hoverEls.forEach((el) => {
      el.addEventListener('mouseenter', () => {
        if (ringRef.current) {
          ringRef.current.style.width = '52px'
          ringRef.current.style.height = '52px'
          ringRef.current.style.borderColor = 'rgba(200,24,28,0.8)'
        }
      })
      el.addEventListener('mouseleave', () => {
        if (ringRef.current) {
          ringRef.current.style.width = '36px'
          ringRef.current.style.height = '36px'
          ringRef.current.style.borderColor = 'rgba(200,24,28,0.5)'
        }
      })
    })

    return () => {
      window.removeEventListener('mousemove', onMove)
      cancelAnimationFrame(rafRef.current)
    }
  }, [])

  return (
    <>
      <div ref={cursorRef} className="cursor" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  )
}

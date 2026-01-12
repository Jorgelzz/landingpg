"use client"

import { useEffect, useRef, useState, ReactNode } from "react"
import { cn } from "@/lib/utils"

interface ScrollAnimateProps {
  children: ReactNode
  className?: string
  animation?: "fade-in" | "slide-up" | "slide-left" | "slide-right" | "scale-in"
  delay?: 0 | 1 | 2 | 3 | 4
  threshold?: number
}

export function ScrollAnimate({
  children,
  className,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
}: ScrollAnimateProps) {
  const [isVisible, setIsVisible] = useState(false)
  const elementRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const element = elementRef.current
    if (!element) return

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Reativa a animação sempre que entrar na viewport
          setIsVisible(true)
        } else {
          // Reseta para re-animar quando entrar novamente
          setIsVisible(false)
        }
      },
      {
        threshold,
        rootMargin: "0px 0px -80px 0px",
      }
    )

    observer.observe(element)

    return () => {
      if (element) {
        observer.unobserve(element)
      }
    }
  }, [threshold])

  const animationClasses = {
    "fade-in": "animate-fade-in",
    "slide-up": "animate-slide-up",
    "slide-left": "animate-slide-left",
    "slide-right": "animate-slide-right",
    "scale-in": "animate-scale-in",
  }

  const delayClasses = {
    0: "",
    1: "animate-on-scroll-delay-1",
    2: "animate-on-scroll-delay-2",
    3: "animate-on-scroll-delay-3",
    4: "animate-on-scroll-delay-4",
  }

  return (
    <div
      ref={elementRef}
      className={cn(
        animationClasses[animation],
        delayClasses[delay],
        isVisible && "visible",
        className
      )}
    >
      {children}
    </div>
  )
}

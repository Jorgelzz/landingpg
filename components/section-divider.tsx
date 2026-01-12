"use client"

interface SectionDividerProps {
  variant?: "top" | "bottom"
  className?: string
}

export function SectionDivider({ variant = "top", className = "" }: SectionDividerProps) {
  // Blocos irregulares com sobreposição para transição suave
  // Posições ajustadas para maior sobreposição (menos espaços entre blocos)
  const blocks = [
    { x: 0, y: 10, width: 140, height: 85 },
    { x: 100, y: 5, width: 130, height: 90 },      // Sobreposição de 40px
    { x: 200, y: 15, width: 125, height: 80 },   // Sobreposição de 30px
    { x: 295, y: 8, width: 135, height: 88 },    // Sobreposição de 30px
    { x: 395, y: 12, width: 120, height: 92 },    // Sobreposição de 20px
    { x: 485, y: 3, width: 140, height: 75 },    // Sobreposição de 35px
    { x: 590, y: 18, width: 130, height: 85 },   // Sobreposição de 35px
    { x: 690, y: 10, width: 125, height: 90 },   // Sobreposição de 25px
    { x: 785, y: 5, width: 135, height: 88 },   // Sobreposição de 30px
    { x: 890, y: 15, width: 120, height: 82 },   // Sobreposição de 25px
    { x: 980, y: 8, width: 120, height: 95 },    // Sobreposição de 20px
    { x: 1080, y: 12, width: 120, height: 88 },   // Sobreposição de 20px
  ]

  return (
    <div className={`relative w-full overflow-hidden ${className}`}>
      <svg
        className={`w-full h-24 md:h-28 ${variant === "top" ? "rotate-180" : ""}`}
        viewBox="0 0 1200 120"
        preserveAspectRatio="none"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          {/* Gradiente suave para os blocos - mais visível no light */}
          <linearGradient id="blockGradient" x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor="hsl(var(--muted))" stopOpacity="0.65" />
            <stop offset="50%" stopColor="hsl(var(--muted))" stopOpacity="0.85" />
            <stop offset="100%" stopColor="hsl(var(--muted))" stopOpacity="0.65" />
          </linearGradient>
          {/* Filtro de blur suave para bordas */}
          <filter id="blur">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" />
          </filter>
        </defs>
        
        {/* Base sólida */}
        <rect
          x="0"
          y="0"
          width="1200"
          height="120"
          fill="hsl(var(--background))"
        />
        
        {/* Blocos principais com gradiente e sobreposição */}
        {blocks.map((block, index) => (
          <g key={index}>
            {/* Bloco principal com gradiente - mais opaco no light mode */}
            <rect
              x={block.x}
              y={block.y}
              width={block.width}
              height={block.height}
              fill="url(#blockGradient)"
              rx="6"
              className="opacity-90 dark:opacity-55"
            />
            {/* Camada interna para mais profundidade e suavidade */}
            <rect
              x={block.x + 5}
              y={block.y + 5}
              width={block.width - 10}
              height={block.height - 10}
              fill="hsl(var(--muted))"
              opacity="0.5"
              className="dark:opacity-45"
              rx="5"
            />
          </g>
        ))}
        
        {/* Blocos menores para preencher espaços e criar transição mais suave */}
        {[
          { x: 50, y: 65, width: 60, height: 50 },
          { x: 150, y: 70, width: 55, height: 45 },
          { x: 350, y: 68, width: 65, height: 52 },
          { x: 550, y: 72, width: 58, height: 48 },
          { x: 750, y: 65, width: 62, height: 50 },
          { x: 950, y: 70, width: 56, height: 48 },
          { x: 1050, y: 68, width: 60, height: 50 },
        ].map((block, index) => (
          <rect
            key={`small-${index}`}
            x={block.x}
            y={block.y}
            width={block.width}
            height={block.height}
            fill="hsl(var(--muted))"
            opacity="0.6"
            className="dark:opacity-35"
            rx="5"
          />
        ))}
      </svg>
    </div>
  )
}

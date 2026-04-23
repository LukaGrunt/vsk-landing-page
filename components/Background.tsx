'use client'

export default function Background() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden bg-black">
      {/* Very subtle gradient - top to bottom */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at top, rgba(40, 40, 40, 0.6) 0%, transparent 50%)',
        }}
      />

      {/* Subtle gold glow in center */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(ellipse at center, rgba(143, 129, 89, 0.15) 0%, transparent 50%)',
        }}
      />

      {/* Subtle noise texture */}
      <div className="absolute inset-0 noise-texture opacity-20" />

      {/* Vignette overlay - very subtle */}
      <div
        className="absolute inset-0"
        style={{
          background: 'radial-gradient(circle at center, transparent 40%, rgba(0, 0, 0, 0.6) 100%)',
        }}
      />
    </div>
  )
}

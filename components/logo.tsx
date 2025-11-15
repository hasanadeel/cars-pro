export default function CarProsLogo({ className = "w-10 h-10" }: { className?: string }) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {/* Outer circle background */}
      <svg viewBox="0 0 100 100" className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle with gradient */}
        <defs>
          <linearGradient id="carLogGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="oklch(0.55 0.2 185)" /> {/* Teal */}
            <stop offset="100%" stopColor="oklch(0.75 0.25 50)" /> {/* Orange */}
          </linearGradient>
        </defs>

        {/* Main circle background */}
        <circle cx="50" cy="50" r="48" fill="url(#carLogGradient)" />

        {/* Car silhouette - modern sports car profile */}
        <g transform="translate(20, 35)">
          {/* Car body */}
          <path d="M 8 20 L 15 12 L 35 12 L 42 20 Z" fill="white" opacity="0.95" />
          {/* Cabin/windows area */}
          <path d="M 16 12 L 28 8 L 34 12 Z" fill="white" opacity="0.85" />
          {/* Front wheel */}
          <circle cx="12" cy="24" r="4" fill="white" opacity="0.9" />
          {/* Rear wheel */}
          <circle cx="38" cy="24" r="4" fill="white" opacity="0.9" />
          {/* Wheel hub details */}
          <circle cx="12" cy="24" r="2" fill="oklch(0.55 0.2 185)" opacity="0.8" />
          <circle cx="38" cy="24" r="2" fill="oklch(0.55 0.2 185)" opacity="0.8" />
        </g>

        {/* Speed lines for motion */}
        <line x1="12" y1="55" x2="25" y2="55" stroke="white" strokeWidth="2" opacity="0.6" strokeLinecap="round" />
        <line x1="18" y1="60" x2="28" y2="60" stroke="white" strokeWidth="1.5" opacity="0.4" strokeLinecap="round" />
      </svg>
    </div>
  )
}

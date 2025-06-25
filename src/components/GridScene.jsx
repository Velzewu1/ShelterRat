// Updated GridScene component
export default function GridScene({
  color = '0,255,0',
  opacity = 0.7,
  cellWidth = '6em',
  cellHeight = '10em',
  perspective = '1700px',
  rotateX = -60,
  translateZ = 100,
  className = '',
  ...rest
}) {
  return (
    <div
      className={`pointer-events-none fixed inset-0 overflow-hidden ${className}`}
      style={{ 
        perspective, 
        zIndex: -1, // Changed to -1 to ensure it stays behind content
        width: '100vw',
        height: '100vh'
      }}
      {...rest}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200vw', // Reduced from 1000vw to prevent scrollbars
          height: '200vh', // Reduced from 1000vh to prevent scrollbars
          backgroundImage: `
            linear-gradient(rgba(${color},${opacity}) 0.1em,transparent 0.1em),
            linear-gradient(90deg,rgba(${color},${opacity}) 0.1em,transparent 0.1em)
          `,
          backgroundSize: `${cellWidth} ${cellHeight}`,
          transform: `rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
          transformOrigin: 'center',
        }}
      />
    </div>
  );
}
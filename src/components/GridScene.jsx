export default function GridScene({
  color = '0,255,100',
  opacity = 0.5,
  cellWidth = '4em',
  cellHeight = '10em',
  perspective = '1500px',
  rotateX = -70,
  translateZ = 100,
  className = '',
  ...rest
}) {
  return (
    <div
      className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`}
      style={{ 
        perspective, 
        zIndex: -1,
        width: '100vw',
        height: '300vh',
        top: 0,
        left: 0
      }}
      {...rest}
    >
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
        style={{
          width: '200vw',
          height: '400vh',
          backgroundImage: `
            linear-gradient(rgba(${color},${opacity}) 0.1em,transparent 0.1em),
            linear-gradient(90deg,rgba(${color},${opacity}) 0.1em,transparent 0.1em)
          `,
          backgroundSize: `${cellWidth} ${cellHeight}`,
          transform: `rotateX(${rotateX}deg) translateZ(${translateZ}px)`,
          transformOrigin: 'center',
          filter: `
            drop-shadow(0 0 1px rgba(${color},0.8))
            drop-shadow(0 0 3px rgba(${color},0.4))
            drop-shadow(0 0 6px rgba(${color},0.2))
            drop-shadow(0 0 10px rgba(${color},0.4))
          `,
          maskImage: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%, 
            rgba(0,0,0,0.7) 40%, 
            rgba(0,0,0,0.4) 60%, 
            rgba(0,0,0,0.2) 80%, 
            rgba(0,0,0,0.05) 100%
          )`,
          WebkitMaskImage: `linear-gradient(to bottom, 
            rgba(0,0,0,1) 0%, 
            rgba(0,0,0,0.9) 20%, 
            rgba(0,0,0,0.7) 40%, 
            rgba(0,0,0,0.4) 60%, 
            rgba(0,0,0,0.2) 80%, 
            rgba(0,0,0,0.05) 100%
          )`,
        }}
      />
    </div>
  );
}
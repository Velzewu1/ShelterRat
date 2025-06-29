import GridScene from '../components/GridScene'; // Adjust path as needed
import { useEffect, useState } from 'react';

export default function MainPage() {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div  
      style={{
        position: 'relative',
        width: '100%',
        color: 'white'
      }}
    >
      {/* Background grid with parallax */}
      <div style={{
        transform: `translateY(${scrollY * 0.5}px)`,
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -2
      }}>
        <GridScene />
      </div>
      
      {/* Logo with camera follow effect */}
      <div style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10
      }}>
        <div style={{
          transform: `translateY(${Math.min(scrollY * 0.3, window.innerHeight * 2 * 0.3)}px)`,
          transition: 'transform 0.1s ease-out'
        }}>
          <img 
            src="../../public/images/logo.png" 
            alt="Logo" 
            className="w-1/2 h-1/2" 
            style={{
              filter: 'drop-shadow(0 0 15px rgba(0, 255, 100, 0.4))',
              transform: 'perspective(1000px) rotateX(5deg)',
              transformOrigin: 'center bottom'
            }}
          />
          <p>Welcome to the journey</p>
        </div>
      </div>
      
      {/* Planet section with parallax */}
      <div style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 5,
        overflow: 'hidden'
      }}>
        {/* Moon with slower parallax - positioned to the left */}
        <img 
          src="../../public/images/moon.png"
          alt="Moon"
          style={{
            transform: `translateY(${Math.max(0, Math.min((scrollY - window.innerHeight) * 0.3, window.innerHeight * 0.3))}px)`,
            position: 'absolute',
            left: '5%',
            width: '800px',
            height: '800px',
            filter: `
              drop-shadow(0 0 30px rgba(0, 255, 100, 0.3))
              drop-shadow(0 0 60px rgba(0, 255, 100, 0.1))
            `,
            opacity: 0.9
          }}
        />
        
        {/* Floating text */}
        <div style={{
          transform: `translateY(${Math.max(0, Math.min((scrollY - window.innerHeight) * 0.1, window.innerHeight * 0.1))}px)`,
          zIndex: 10
        }}>
          <h2 style={{ fontSize: '2.5rem', marginBottom: '2rem', textShadow: '0 0 20px rgba(0, 255, 100, 0.5)' }}>
            Lunar Encounter
          </h2>
          <p style={{ fontSize: '1.2rem', opacity: 0.8 }}>Passing by the ancient moon</p>
        </div>
      </div>
      
      {/* Ground section */}
      <div style={{ 
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        position: 'relative',
        zIndex: 10,
        background: 'linear-gradient(to bottom, transparent 0%, rgba(26, 32, 44, 0.3) 50%, rgba(26, 32, 44, 0.8) 100%)'
      }}>
        {/* Ground texture overlay */}
        <div style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          right: 0,
          height: '50%',
          background: `
            linear-gradient(90deg, transparent 0px, rgba(0, 255, 100, 0.1) 2px, transparent 2px),
            linear-gradient(transparent 0px, rgba(0, 255, 100, 0.1) 2px, transparent 2px)
          `,
          backgroundSize: '40px 40px',
          opacity: 0.3,
          transform: `translateY(${(scrollY - window.innerHeight * 2) * -0.1}px)`
        }} />
        
        <div style={{
          transform: `translateY(${(scrollY - window.innerHeight * 2) * 0.05}px)`
        }}>
          <h2 style={{ 
            fontSize: '3rem', 
            marginBottom: '2rem',
            textShadow: '0 0 30px rgba(0, 255, 100, 0.7)',
            filter: 'drop-shadow(0 0 10px rgba(0, 255, 100, 0.4))'
          }}>
            Surface Reached
          </h2>
          <p style={{ fontSize: '1.3rem', opacity: 0.9 }}>The journey continues on solid ground</p>
        </div>
      </div>
    </div>
  );
}
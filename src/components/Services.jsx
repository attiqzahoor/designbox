import React, { useState, useEffect } from 'react';

export default function Services() {
  const [hovered, setHovered] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const hoverOverlay = (id, direction, title, description) => {
    const baseStyle = {
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      borderRadius: '12px',
      backgroundColor: 'rgba(0,0,0,0.7)',
      color: '#fff',
      padding: isMobile ? '12px' : '16px',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      transition: 'transform 0.4s ease, opacity 0.4s ease',
      zIndex: 2,
      opacity: hovered === id ? 1 : 0,
      pointerEvents: hovered === id ? 'auto' : 'none',
      transform:
        hovered === id
          ? 'translate(0,0)'
          : direction === 'top'
          ? 'translateY(-100%)'
          : direction === 'bottom'
          ? 'translateY(100%)'
          : direction === 'right'
          ? 'translateX(100%)'
          : 'translate(0,0)',
    };

    return (
      <div style={baseStyle}>
        <div>
          <h4 style={{ marginBottom: '8px', fontSize: isMobile ? '1rem' : '1.2rem' }}>{title}</h4>
          <p style={{ fontSize: isMobile ? '0.8rem' : '0.9rem' }}>{description}</p>
        </div>
        <button
          style={{
            backgroundColor: '#fff',
            color: '#000',
            padding: '6px 10px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            alignSelf: 'flex-start',
            fontSize: isMobile ? '0.8rem' : '0.9rem'
          }}
        >
          More →
        </button>
      </div>
    );
  };

  const serviceBoxStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #ff7f11',
    borderRadius: '12px',
    width: '100%',
    height: '100%',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    fontWeight: 'bold',
    margin: '0 auto',
    fontSize: isMobile ? '1rem' : '1.2rem',
    color: '#fff',
    padding: isMobile ? '10px' : '20px',
    textAlign: 'center'
  };

  if (isMobile) {
    return (
      <section
        id="services"
        style={{ padding: '30px 15px', maxWidth: '1060px', margin: '0 auto' }}
      >
        <h2
          style={{
            textAlign: 'center',
            fontSize: '1.8rem',
            color: '#fff',
            marginBottom: '30px',
            fontWeight: 'bold',
            transition: 'text-shadow 0.3s ease',
            textShadow: hovered === 'heading' ? '0 0 12px #fff' : 'none'
          }}
          onMouseEnter={() => setHovered('heading')}
          onMouseLeave={() => setHovered(null)}
        >
          Our Services
        </h2>

        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '15px'
          }}
        >
          {/* First Row */}
          <div style={{ display: 'flex', gap: '15px', height: '180px' }}>
            <div
              onMouseEnter={() => setHovered('div2')}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...serviceBoxStyle,
                flex: 1
              }}
            >
              Brand Identity
              {hoverOverlay(
                'div2',
                'top',
                'Brand Identity',
                'Crafting logos, brand guides, and consistent branding.'
              )}
            </div>

            <div
              onMouseEnter={() => setHovered('div3')}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...serviceBoxStyle,
                flex: 1
              }}
            >
              UI/UX Design
              {hoverOverlay(
                'div3',
                'bottom',
                'UI/UX Design',
                'Modern, user-friendly design for your digital products.'
              )}
            </div>
          </div>

          {/* Second Row */}
          <div style={{ display: 'flex', gap: '15px', height: '180px' }}>
            <div
              onMouseEnter={() => setHovered('div4')}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...serviceBoxStyle,
                flex: 1
              }}
            >
              Marketing Materials
              {hoverOverlay(
                'div4',
                'right',
                'Marketing Materials',
                'Designs for flyers, posters, brochures, and social media.'
              )}
            </div>

            <div
              onMouseEnter={() => setHovered('div5')}
              onMouseLeave={() => setHovered(null)}
              style={{
                ...serviceBoxStyle,
                flex: 1
              }}
            >
              Web Design
              {hoverOverlay(
                'div5',
                'top',
                'Web Design',
                'Responsive, modern websites that drive conversions.'
              )}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section
      id="services"
      style={{ padding: '40px 20px', maxWidth: '1060px', margin: '0 auto' }}
    >
      <div
        className="parent"
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'repeat(4, 1fr)',
          gap: '8px',
          height: '460px',
        }}
      >
        {/* div1 - main title */}
        <div
          className="div1"
          onMouseEnter={() => setHovered('div1')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...serviceBoxStyle,
            gridRow: 'span 4 / span 4',
            fontSize: '2rem',
          }}
        >
          <span
            style={{
              transition: 'text-shadow 0.3s ease',
              textShadow: hovered === 'div1' ? '0 0 12px #fff' : 'none',
            }}
          >
            Our Services
          </span>
        </div>

        {/* div2 */}
        <div
          className="div2"
          onMouseEnter={() => setHovered('div2')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...serviceBoxStyle,
            gridRow: 'span 2 / span 2',
          }}
        >
          Brand Identity
          {hoverOverlay(
            'div2',
            'top',
            'Brand Identity',
            'Crafting logos, brand guides, and consistent branding.'
          )}
        </div>

        {/* div3 */}
        <div
          className="div3"
          onMouseEnter={() => setHovered('div3')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...serviceBoxStyle,
            gridRow: 'span 2 / span 2',
          }}
        >
          UI/UX Design
          {hoverOverlay(
            'div3',
            'bottom',
            'UI/UX Design',
            'Modern, user-friendly design for your digital products.'
          )}
        </div>

        {/* div4 */}
        <div
          className="div4"
          onMouseEnter={() => setHovered('div4')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...serviceBoxStyle,
            gridRow: 'span 2 / span 2',
            gridColumnStart: 2,
            gridRowStart: 3,
          }}
        >
          Marketing Materials
          {hoverOverlay(
            'div4',
            'right',
            'Marketing Materials',
            'Designs for flyers, posters, brochures, and social media.'
          )}
        </div>

        {/* div5 */}
        <div
          className="div5"
          onMouseEnter={() => setHovered('div5')}
          onMouseLeave={() => setHovered(null)}
          style={{
            ...serviceBoxStyle,
            gridRow: 'span 2 / span 2',
            gridColumnStart: 3,
            gridRowStart: 3,
          }}
        >
          Web Design
          {hoverOverlay(
            'div5',
            'top',
            'Web Design',
            'Responsive, modern websites that drive conversions.'
          )}
        </div>
      </div>
    </section>
  );
}
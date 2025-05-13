import React, { useState, useEffect } from 'react';

export default function Navbar() {
  const [hoveredItem, setHoveredItem] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);  // Track screen size
  
  const navItems = [
    { name: 'Home', id: 'hero' },
    { name: 'About', id: 'about' },
    // { name: 'Portfolio', id: 'portfolio' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768); // Check if screen size is mobile
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('resize', handleResize);
    handleResize();  // Check initial screen size
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
    };
  }, [scrolled]);

  return (
    <>
      {/* Top Navbar - Only show title on mobile, full nav on desktop when not scrolled */}
      {!scrolled && (
        <nav style={{ 
          padding: '20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          width: '100%',
        }}>
          {/* On desktop: show left items */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              gap: '30px',
              position: 'absolute',
              left: '-10%',
              width: '80%',
              justifyContent: 'center'
            }}>
              {navItems.slice(0, 2).map(item => (
                <NavItem 
                  key={item.id}
                  item={item}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              ))}
            </div>
          )}

          {/* Centered title - always visible when not scrolled */}
          <h1 style={{ 
            margin: '0 auto',
            fontSize: '1.5rem',
            fontWeight: 600,
            padding: '0 50px',
            textAlign: 'center',
            zIndex: 10,
          }}>
            Des!gn Box
          </h1>

          {/* On desktop: show right items */}
          {!isMobile && (
            <div style={{ 
              display: 'flex', 
              gap: '30px',
              position: 'absolute',
              right: '5%',
              width: '40%',
              justifyContent: 'center'
            }}>
              {navItems.slice(2).map(item => (
                <NavItem 
                  key={item.id}
                  item={item}
                  hoveredItem={hoveredItem}
                  setHoveredItem={setHoveredItem}
                />
              ))}
            </div>
          )}
        </nav>
      )}

      {/* Bottom Navbar (visible on smaller screens or when scrolled) */}
      {(scrolled || isMobile) && (
        <nav style={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          position: 'fixed',
          bottom: 5,
          left: 0,
          right: 0,
          backgroundColor: 'white',
          zIndex: 1000,
          boxShadow: '0 -2px 10px rgba(0,0,0,0.1)',
          borderRadius: scrolled && !isMobile ? '35px 35px 35px 35px' : '0',
          height: '60px',
          width: scrolled && !isMobile ? '40%' : '100%',
          marginLeft: scrolled && !isMobile ? '30%' : '0',
        }}>
          <div style={{ display: 'flex', gap: '15px' }}>
            {navItems.map(item => (
              <NavItem 
                key={item.id}
                item={item}
                hoveredItem={hoveredItem}
                setHoveredItem={setHoveredItem}
                scrolled={true}
              />
            ))}
          </div>
        </nav>
      )}
    </>
  );
}

const NavItem = ({ item, hoveredItem, setHoveredItem, scrolled = false }) => {
  return (
    <a 
      href={`#${item.id}`}
      style={{
        textDecoration: 'none',
        color: hoveredItem === item.id ? 'var(--primary-color)' : 
              item.id === 'contact' ? 'white' : '#333',
        backgroundColor: item.id === 'contact' ? 'var(--primary-color)' : 'transparent',
        transition: 'all 0.3s cubic-bezier(0.4, 0, 0.2, 1)',
        padding: item.id === 'contact' ? 
          (scrolled ? '6px 15px' : '8px 20px') : 
          '5px 0',
        borderRadius: item.id === 'contact' ? '25px' : '0',
        position: 'relative',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        fontSize: scrolled ? '0.9rem' : '1rem'
      }}
      onMouseEnter={() => setHoveredItem(item.id)}
      onMouseLeave={() => setHoveredItem(null)}
    >
      {item.name}
      {item.id === 'contact' && (
        <>
          <span style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: hoveredItem === 'contact' ? '100%' : '0%',
            height: '100%',
            backgroundColor: 'rgba(255,255,255,0.2)',
            transition: 'width 0.5s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: 0
          }}></span>
          <span style={{
            marginLeft: '8px',
            transform: hoveredItem === 'contact' ? 'translateX(5px)' : 'translateX(0)',
            transition: 'transform 0.3s ease',
            display: 'inline-block'
          }}>→</span>
        </>
      )}
      {item.id !== 'contact' && !scrolled && (
        <span style={{
          position: 'absolute',
          bottom: 0,
          left: 0,
          width: hoveredItem === item.id ? '100%' : '0%',
          height: '1px',
          backgroundColor: 'var(--primary-color)',
          transition: 'width 0.3s cubic-bezier(0.4, 0, 0.2, 1)'
        }}></span>
      )}
    </a>
  );
};
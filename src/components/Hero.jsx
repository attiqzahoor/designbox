import React, { useState, useEffect } from 'react';

export default function Hero() {
  const [fadeIn, setFadeIn] = useState(false);
  const [isBlinking, setIsBlinking] = useState(true);
  const [showButton, setShowButton] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', checkMobile);
    checkMobile(); // Initial check

    setTimeout(() => {
      setFadeIn(true);
    }, 1000);

    setTimeout(() => {
      setIsBlinking(false);
      setShowButton(true);
    }, 3000);

    return () => {
      window.removeEventListener('resize', checkMobile);
    };
  }, []);

  return (
    <section 
      style={{
        textAlign: 'center',
        height: '80vh',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        position: 'relative',
        padding: '0 20px',
        marginTop: '80px',
      }}
    >
      {/* Main centered container */}
      <div style={{
        padding: '40px',
        borderRadius: '15px',
        border: '2px solid var(--primary-color)',
        boxShadow: 'rgba(255, 255, 255, 0.3) 0px 20px 30px -10px',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',
        maxWidth: '800px',
        width: '90%',
        margin: '0 auto',
      }}>
        {/* First line with word animations */}
        <h2 style={{
          fontSize: isMobile ? '2rem' : '3rem',
          fontWeight: 'normal', 
          letterSpacing: '1px',
          animation: fadeIn ? 'fadeInText 2s ease-out forwards' : 'none',
        }}>
          <span style={{
            display: 'inline-block',
            animation: isBlinking ? 'flicker 1s step-start infinite' : 'none',
            fontFamily: 'Pacifico, cursive',
            color: 'white',
          }}>
            Hi, I'm a 
          </span>
          <span style={{
            opacity: fadeIn ? 1 : 0, 
            transition: 'opacity 1s ease',
            animation: isBlinking ? 'none' : 'fadeInText 1.5s ease-out forwards',
            fontFamily: '"Brush Script MT", cursive',
            color: 'white',
            marginLeft: '10px'
          }}>
            Creative Graphic Designer
          </span>
          {!isMobile && (
            <>
              <br />
              <span style={{
                opacity: fadeIn ? 1 : 0,
                transition: 'opacity 1s ease',
                animation: isBlinking ? 'none' : 'fadeInText 2s ease-out forwards',
                fontFamily: '"Brush Script MT", cursive',
                color: 'var(--primary-color)',
                fontSize: '2.5rem',
                display: 'inline-block',
                marginTop: '20px'
              }}>
                Passionate about bringing ideas to life
              </span>
            </>
          )}
        </h2>

        {/* Second line that slides in from the left */}
        <p 
          style={{
            fontSize: isMobile ? '1rem' : '1.2rem',
            marginTop: isMobile ? '20px' : '40px',
            color: 'white',
            animation: fadeIn ? 'slideInLeft 1s ease-out forwards' : 'none',
            fontFamily: 'Arial, sans-serif'
          }}
        >
          Transforming ideas into visual reality
        </p>

        {/* Contact button */}
        {showButton && (
          <div>
            <a 
              href="#contact" 
              style={{
                marginTop: isMobile ? '15px' : '30px',
                display: 'inline-block',
                padding: isMobile ? '8px 16px' : '12px 24px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                border: '2px solid var(--primary-color)',
                backgroundColor: 'transparent',
                color: 'var(--primary-color)',
                fontWeight: 'bold',
                borderRadius: '30px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                opacity: showButton ? 1 : 0,
                animation: showButton ? 'fadeInButton 1s ease-out forwards' : 'none',
                fontFamily: 'Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.color = 'white';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--primary-color)';
              }}
            >
              Contact Us
            </a>

            {/* Our Work button */}
            <a 
              href="#portfolio" 
              style={{
                marginTop: isMobile ? '15px' : '30px',
                display: 'inline-block',
                padding: isMobile ? '8px 16px' : '12px 24px',
                fontSize: isMobile ? '0.9rem' : '1rem',
                border: '2px solid var(--primary-color)',
                backgroundColor: 'var(--primary-color)',  // Primary color background
                color: 'white',  // White text color
                fontWeight: 'bold',
                borderRadius: '30px',
                textDecoration: 'none',
                transition: 'all 0.3s ease',
                opacity: showButton ? 1 : 0,
                animation: showButton ? 'fadeInButton 1s ease-out forwards' : 'none',
                fontFamily: 'Arial, sans-serif'
              }}
              onMouseEnter={(e) => {
                e.target.style.backgroundColor = 'transparent';
                e.target.style.color = 'var(--primary-color)';
                e.target.style.border = '2px solid var(--primary-color)';
              }}
              onMouseLeave={(e) => {
                e.target.style.backgroundColor = 'var(--primary-color)';
                e.target.style.color = 'white';
                e.target.style.border = '2px solid var(--primary-color)';
              }}
            >
              Our Work
            </a>
          </div>
        )}
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes flicker {
          0%, 50%, 100% { opacity: 1; }
          25%, 75% { opacity: 0; }
        }
        @keyframes fadeInText {
          0% { opacity: 0; }
          100% { opacity: 1; }
        }
        @keyframes slideInLeft {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0); }
        }
        @keyframes fadeInButton {
          0% { opacity: 0; transform: translateY(20px); }
          100% { opacity: 1; transform: translateY(0); }
        }
      `}</style>

      {/* Include Google Fonts */}
      <link
        href="https://fonts.googleapis.com/css2?family=Pacifico&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css2?family=Brush+Script+MT&display=swap"
        rel="stylesheet"
      />
    </section>
  );
}

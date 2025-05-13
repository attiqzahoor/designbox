import React from 'react';

export default function About() {
  // 20 items with real image URLs from Unsplash (logo-like images)
  const items = [
    { id: 1, imgUrl: 'https://images.unsplash.com/photo-1611162616305-c69b3fa7fbe0?w=80&h=60&fit=crop' },
    { id: 2, imgUrl: 'https://images.unsplash.com/photo-1611162616475-465b1877466d?w=80&h=60&fit=crop' },
    { id: 3, imgUrl: 'https://images.unsplash.com/photo-1614680376573-df3480f0c6ff?w=80&h=60&fit=crop' },
    { id: 4, imgUrl: 'https://images.unsplash.com/photo-1614680376593-902f74cf0d41?w=80&h=60&fit=crop' },
    { id: 5, imgUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=80&h=60&fit=crop' },
    { id: 6, imgUrl: 'https://images.unsplash.com/photo-1546820389-3461da0a6a5e?w=80&h=60&fit=crop' },
    { id: 7, imgUrl: 'https://images.unsplash.com/photo-1546054454-aa26e2b734c7?w=80&h=60&fit=crop' },
    { id: 8, imgUrl: 'https://images.unsplash.com/photo-1556740738-b6a63e27c4df?w=80&h=60&fit=crop' },
    { id: 9, imgUrl: 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=80&h=60&fit=crop' },
    { id: 10, imgUrl: 'https://images.unsplash.com/photo-1598128558393-70ff21433be0?w=80&h=60&fit=crop' },
    { id: 11, imgUrl: 'https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=80&h=60&fit=crop' },
    { id: 12, imgUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=80&h=60&fit=crop' },
    { id: 13, imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=60&fit=crop' },
    { id: 14, imgUrl: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=80&h=60&fit=crop' },
    { id: 15, imgUrl: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=80&h=60&fit=crop' },
    { id: 16, imgUrl: 'https://images.unsplash.com/photo-1552664730-d307ca884978?w=80&h=60&fit=crop' },
    { id: 17, imgUrl: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=80&h=60&fit=crop' },
    { id: 18, imgUrl: 'https://images.unsplash.com/photo-1521791136064-7986c2920216?w=80&h=60&fit=crop' },
    { id: 19, imgUrl: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=80&h=60&fit=crop' },
    { id: 20, imgUrl: 'https://images.unsplash.com/photo-1542744173-8e7e53415bb0?w=80&h=60&fit=crop' }
  ];

  return (
    <section id="about" style={{
      width: '100%',
      padding: '60px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Top moving divs (right to left) - SLOW */}
      <div style={{
        height: '15vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: '30px',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <div style={{
          display: 'flex',
          animation: 'slideRightToLeft 60s linear infinite',
        }}>
          {[...items, ...items].map((item, index) => (
            <div key={`top-${item.id}-${index}`} style={{
              minWidth: '80px',
              height: '60px',
              margin: '0 25px',
              border: '1.5px solid var(--primary-color)',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              overflow: 'hidden',
              backgroundColor: '#f5f5f5' // Light background for logos
            }}>
              <img 
                src={item.imgUrl} 
                alt={`Client Logo ${item.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '5px'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Bottom moving divs (left to right) - SLOW */}
      <div style={{
        height: '15vh',
        width: '100vw',
        display: 'flex',
        alignItems: 'center',
        overflow: 'hidden',
        marginBottom: '60px',
        position: 'relative',
        left: '50%',
        right: '50%',
        marginLeft: '-50vw',
        marginRight: '-50vw'
      }}>
        <div style={{
          display: 'flex',
          animation: 'slideLeftToRight 60s linear infinite',
        }}>
          {[...items, ...items].map((item, index) => (
            <div key={`bottom-${item.id}-${index}`} style={{
              minWidth: '80px',
              height: '60px',
              margin: '0 25px',
              border: '1.5px solid var(--primary-color)',
              borderRadius: '4px',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              flexShrink: 0,
              overflow: 'hidden',
              backgroundColor: '#f5f5f5' // Light background for logos
            }}>
              <img 
                src={item.imgUrl} 
                alt={`Client Logo ${item.id}`}
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'contain',
                  padding: '5px'
                }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* About content */}
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '0 30px',
        textAlign: 'center'
      }}>
        <h2 style={{
          fontSize: '2.2rem',
          margin: '30px 0',
          color: 'var(--primary-color)'
        }}>
          About Me
        </h2>
        <p style={{
          fontSize: '1.1rem',
          lineHeight: '1.7',
          color: '#555'
        }}>
          I'm a passionate designer with experience in branding, web, and visual identity. 
          I help clients make an impact through design.
        </p>
      </div>

      {/* CSS Animations */}
      <style>{`
        @keyframes slideRightToLeft {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        @keyframes slideLeftToRight {
          0% { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }
      `}</style>
    </section>
  );
}
import React, { useState } from 'react';

export default function Portfolio() {
  const [hoveredItem, setHoveredItem] = useState(null);

  const portfolioItems = [
    {
      id: 1,
      title: "E-commerce Website",
      description: "Built a full-featured online store with React, Node.js, and MongoDB.",
      style: {
        gridColumn: 'span 3 / span 3',
        gridRow: 'span 2 / span 2',
        backgroundColor: 'rgba(75, 192, 192, 0.8)'
      },
      hoverDirection: 'right'
    },
    {
      id: 2,
      title: "Mobile Banking App",
      description: "Secure banking application with React Native and biometric login.",
      style: {
        gridColumn: 'span 2 / span 2',
        gridRow: 'span 5 / span 5',
        gridColumnStart: 4,
        backgroundColor: 'rgba(54, 162, 235, 0.8)'
      },
      hoverDirection: 'left'
    },
    {
      id: 3,
      title: "Healthcare Portal",
      description: "Patient management system with appointment scheduling.",
      style: {
        gridRow: 'span 3 / span 3',
        gridRowStart: 3,
        backgroundColor: 'rgba(255, 99, 132, 0.8)'
      },
      hoverDirection: 'bottom'
    },
    {
      id: 4,
      title: "Education Platform",
      description: "Learning management system with video courses and quizzes.",
      style: {
        gridColumn: 'span 2 / span 2',
        gridRow: 'span 2 / span 2',
        gridRowStart: 3,
        backgroundColor: 'rgba(255, 159, 64, 0.8)'
      },
      hoverDirection: 'top'
    },
    {
      id: 5,
      title: "Restaurant POS",
      description: "Custom point-of-sale system with kitchen display integration.",
      style: {
        gridColumnStart: 2,
        gridRowStart: 5,
        backgroundColor: 'rgba(153, 102, 255, 0.8)'
      },
      hoverDirection: 'right'
    },
    {
      id: 6,
      title: "Travel Booking",
      description: "Hotel and flight booking platform with real-time availability.",
      style: {
        gridColumnStart: 3,
        gridRowStart: 5,
        backgroundColor: 'rgba(255, 206, 86, 0.8)'
      },
      hoverDirection: 'left'
    }
  ];

  const getSlideStyle = (item) => {
    const base = {
      position: 'absolute',
      backgroundColor: 'rgba(0, 0, 0, 0.85)',
      color: 'white',
      padding: '20px',
      transition: 'all 0.4s cubic-bezier(0.25, 0.8, 0.25, 1)',
      zIndex: 3,
      width: '100%',
      height: '100%',
      display: 'flex',
      alignItems: 'center',
      opacity: hoveredItem === item.id ? 1 : 0,
    };

    const directions = {
      right: { transform: hoveredItem === item.id ? 'translateX(0)' : 'translateX(100%)' },
      left: { transform: hoveredItem === item.id ? 'translateX(0)' : 'translateX(-100%)' },
      top: { transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(-100%)' },
      bottom: { transform: hoveredItem === item.id ? 'translateY(0)' : 'translateY(100%)' }
    };

    return { ...base, ...directions[item.hoverDirection] };
  };

  return (
    <section id="portfolio" style={{
      padding: '40px 20px',
      maxWidth: '1200px',
      margin: '0 auto',
      textAlign: 'center',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>
      <h2 style={{
        marginBottom: '40px',
        fontSize: '2.5rem',
        color: '#333',
        fontWeight: '600'
      }}>My Portfolio</h2>

      <div style={{
        display: 'grid',
        gridTemplateColumns: 'repeat(5, 1fr)',
        gridTemplateRows: 'repeat(5, 1fr)',
        gap: '8px',
        width: '100%',
        maxWidth: '1000px',
        aspectRatio: '5/3',
        margin: '0 auto'
      }}>
        {portfolioItems.map((item) => (
          <div
            key={item.id}
            style={{
              ...item.style,
              position: 'relative',
              borderRadius: '8px',
              overflow: 'hidden',
              transition: 'all 0.3s ease',
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              transform: hoveredItem === item.id ? 'translateY(-5px)' : 'none',
              boxShadow: hoveredItem === item.id
                ? '0 10px 20px rgba(0, 0, 0, 0.15)'
                : '0 4px 6px rgba(0, 0, 0, 0.1)'
            }}
            onMouseEnter={() => setHoveredItem(item.id)}
            onMouseLeave={() => setHoveredItem(null)}
          >
            <div style={{
              textAlign: 'center',
              zIndex: 2,
              padding: '20px'
            }}>
              <span style={{
                fontSize: '2rem',
                fontWeight: 'bold',
                color: '#fff',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}>{item.id}</span>
              <h3 style={{
                marginTop: '10px',
                fontSize: '1.5rem',
                color: '#fff',
                textShadow: '1px 1px 3px rgba(0,0,0,0.3)'
              }}>{item.title}</h3>
            </div>

            <div style={getSlideStyle(item)}>
              <p style={{
                margin: '0',
                fontSize: '1rem',
                lineHeight: '1.6',
                padding: '10px'
              }}>{item.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

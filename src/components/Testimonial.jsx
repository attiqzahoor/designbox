import React, { useState, useEffect } from 'react';

const TestimonialCarousel = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const primaryColor = '#ff7f11';

  const testimonials = [
    {
      id: 1,
      name: 'John Doe',
      message: 'Excellent service! The team was very professional and delivered beyond our expectations.',
      image: 'https://randomuser.me/api/portraits/men/1.jpg',
      position: 'CEO, TechCorp'
    },
    {
      id: 2,
      name: 'Jane Smith',
      message: 'Their attention to detail is remarkable. Will definitely work with them again.',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      position: 'Marketing Director'
    },
    {
      id: 3,
      name: 'Robert Johnson',
      message: 'Transformed our digital presence completely. Highly recommended!',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      position: 'Founder, StartupX'
    },
    {
      id: 4,
      name: 'Emily Davis',
      message: 'Creative solutions and timely delivery. Perfect partnership.',
      image: 'https://randomuser.me/api/portraits/women/2.jpg',
      position: 'Product Manager'
    },
    {
      id: 5,
      name: 'Michael Wilson',
      message: 'Exceptional quality and great communication throughout the project.',
      image: 'https://randomuser.me/api/portraits/men/3.jpg',
      position: 'CTO, InnovateCo'
    },
    {
      id: 6,
      name: 'Sarah Thompson',
      message: 'Exceeded all our expectations. Will be our go-to team for future projects.',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      position: 'Head of Design'
    }
  ];

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const nextTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  };

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000);
    return () => clearInterval(interval);
  }, []);

  // Function to get the display position for each testimonial
  const getDisplayPosition = (index) => {
    const total = testimonials.length;
    let position = index - activeIndex;
    
    // Adjust positions to create the infinite loop effect
    if (position < -2) position += total;
    if (position > 3) position -= total;
    
    return position;
  };

  // Responsive settings
  const isMobile = windowWidth <= 768;
  const testimonialWidth = isMobile ? '90vw' : '600px';
  const testimonialHeight = isMobile ? 'auto' : '270px';
  const testimonialPadding = isMobile ? '20px' : '30px';
  const transformOffset = isMobile ? 280 : 320;
  const showMultiple = !isMobile;

  return (
    <div style={{
      maxWidth: '1060px',
      margin: '0 auto',
      padding: isMobile ? '40px 10px' : '60px 20px',
      backgroundColor: '#000000',
      position: 'relative',
      overflow: 'hidden',
      minHeight: isMobile ? '400px' : '500px',
    }}>
      <h2 style={{
        textAlign: 'center',
        color: primaryColor,
        fontSize: isMobile ? '1.8rem' : '2.5rem',
        marginBottom: isMobile ? '50px' : '50px',
      
        fontWeight: 'bold',
        textTransform: 'uppercase',
        letterSpacing: '1px',
        padding: isMobile ? '0 10px' : '0'
      }}>
        Hear From Them
      </h2>

      <div style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'relative',
        marginBottom: isMobile ? '80px' : '40px',
        height: '100%',
        overflow: 'visible',
        minHeight: isMobile ? '200px' : '300px'
      }}>
        {testimonials.map((testimonial, index) => {
          const position = showMultiple ? getDisplayPosition(index) : (index === activeIndex ? 0 : 999);
          const isVisible = showMultiple ? (position >= -2 && position <= 3) : (index === activeIndex);
          
          if (!isVisible) return null;

          const isActive = position === 0;
          const isAdjacent = Math.abs(position) === 1;
          const isFar = Math.abs(position) === 2;

          let style = {
            position: 'absolute',
            width: testimonialWidth,
            height: testimonialHeight,
            minHeight: isMobile ? '300px' : 'auto',
            transition: 'all 0.5s ease',
            backgroundColor: '#000000',
            border: `2px solid ${primaryColor}`,
            borderRadius: '12px',
            padding: testimonialPadding,
            boxShadow: '0 4px 20px rgba(0,0,0,0.1)',
            zIndex: isActive ? 3 : isAdjacent ? 2 : 1,
            opacity: isMobile ? (isActive ? 1 : 0) : (isActive ? 1 : isAdjacent ? 0.8 : isFar ? 0.5 : 0),
            transform: isMobile 
              ? `translateX(${position * 0}px) scale(${isActive ? 1 : 0.9})` 
              : `translateX(${position * transformOffset}px) scale(${isActive ? 1 : isAdjacent ? 0.9 : 0.8})`,
            pointerEvents: isActive ? 'auto' : 'none',
            margin: isMobile ? '0 auto' : '0'
          };

          return (
            <div key={testimonial.id} style={style}>
              <div style={{ 
                display: 'flex', 
                alignItems: 'center', 
                marginBottom: isMobile ? '15px' : '20px',
                flexDirection: isMobile ? 'column' : 'row',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  style={{
                    width: isMobile ? '60px' : '70px',
                    height: isMobile ? '60px' : '70px',
                    borderRadius: '50%',
                    objectFit: 'cover',
                    marginRight: isMobile ? '0' : '20px',
                    marginBottom: isMobile ? '10px' : '0',
                    border: `2px solid ${primaryColor}`,
                  }}
                />
                <div>
                  <div style={{ 
                    fontWeight: 'bold', 
                    fontSize: isMobile ? '1.1rem' : '1.3rem', 
                    color: '#fff' 
                  }}>
                    {testimonial.name}
                  </div>
                  <div style={{ 
                    color: primaryColor, 
                    fontSize: isMobile ? '0.9rem' : '1rem' 
                  }}>
                    {testimonial.position}
                  </div>
                </div>
              </div>
              <div style={{
                fontStyle: 'italic',
                color: '#ddd',
                lineHeight: '1.7',
                fontSize: isMobile ? '1rem' : '1.1rem',
                textAlign: isMobile ? 'center' : 'left'
              }}>
                "{testimonial.message}"
              </div>
            </div>
          );
        })}

        {/* Navigation Arrows - Hidden on mobile if showing single testimonial */}
        {(!isMobile || showMultiple) && (
          <>
            <button 
              onClick={prevTestimonial}
              style={{
                position: 'absolute',
                left: isMobile ? '5px' : '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: primaryColor,
                fontSize: isMobile ? '1.5rem' : '2rem',
                cursor: 'pointer',
                zIndex: 10,
                padding: '10px',
              }}
            >
              &lt;
            </button>
            <button 
              onClick={nextTestimonial}
              style={{
                position: 'absolute',
                right: isMobile ? '5px' : '10px',
                top: '50%',
                transform: 'translateY(-50%)',
                background: 'none',
                border: 'none',
                color: primaryColor,
                fontSize: isMobile ? '1.5rem' : '2rem',
                cursor: 'pointer',
                zIndex: 10,
                padding: '10px',
              }}
            >
              &gt;
            </button>
          </>
        )}
      </div>

      {/* Pagination Dots - Always visible */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginTop: isMobile ? '20px' : '30px',
        gap: '12px',
        position: 'absolute',
        bottom: '20px',
        left: 0,
        right: 0
      }}>
        {testimonials.map((_, index) => (
          <button
            key={index}
            onClick={() => setActiveIndex(index)}
            style={{
              width: isMobile ? '10px' : '14px',
              height: isMobile ? '10px' : '12px',
              borderRadius: '50%',
              border: 'none',
              backgroundColor: index === activeIndex ? primaryColor : '#ddd',
              cursor: 'pointer',
              padding: 0,
              transition: 'all 0.3s ease',
            }}
          />
        ))}
      </div>
    </div>
  );
};

export default TestimonialCarousel;
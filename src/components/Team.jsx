import React, { useEffect, useState } from 'react';

const teamMembers = [
  {
    name: 'Muhammad Attiq',
    position: 'Full-Stack Developer',
    image: 'https://randomuser.me/api/portraits/men/10.jpg',
  },
  {
    name: 'Ayesha Khan',
    position: 'UI/UX Designer',
    image: 'https://randomuser.me/api/portraits/women/10.jpg',
  },
  {
    name: 'Ali Raza',
    position: 'Backend Engineer',
    image: 'https://randomuser.me/api/portraits/men/11.jpg',
  },
  {
    name: 'Fatima Noor',
    position: 'Project Manager',
    image: 'https://randomuser.me/api/portraits/women/11.jpg',
  },
];

const primaryColor = '#ff7f11';

// TeamCard Component
const TeamCard = ({ member }) => {
  const [hovered, setHovered] = useState(false);

  return (
    <div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      style={{
        width: '220px',
        backgroundColor: '#111',
        border: `2px solid ${primaryColor}`,
        borderRadius: '14px',
        padding: '25px 20px',
        boxShadow: hovered
          ? `0 8px 20px ${primaryColor}66`
          : `0 4px 12px ${primaryColor}33`,
        transform: hovered ? 'translateY(-5px)' : 'translateY(0)',
        transition: 'all 0.4s ease-out',
        cursor: 'pointer',
      }}
    >
      <img
        src={member.image}
        alt={member.name}
        style={{
          width: '100px',
          height: '100px',
          borderRadius: '50%',
          objectFit: 'cover',
          border: `2px solid ${primaryColor}`,
          marginBottom: '15px',
        }}
      />
      <h3 style={{ margin: '10px 0 5px', fontSize: '1.1rem', color: primaryColor }}>{member.name}</h3>
      <p style={{ color: '#ccc', fontSize: '0.95rem' }}>{member.position}</p>
    </div>
  );
};

// Main Team Component
const Team = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % teamMembers.length);
    }, 3000);

    return () => {
      clearInterval(interval);
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <div style={{ padding: '60px 20px', textAlign: 'center', backgroundColor: '#000' }}>
      <h2 style={{ marginBottom: '40px', color: primaryColor, fontSize: '2.5rem' }}>Our Team</h2>

      {isMobile ? (
        <>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <TeamCard member={teamMembers[currentIndex]} />
          </div>
          <div style={{ marginTop: '20px', display: 'flex', justifyContent: 'center', gap: '10px' }}>
            {teamMembers.map((_, index) => (
              <span
                key={index}
                style={{
                  width: '10px',
                  height: '10px',
                  borderRadius: '50%',
                  backgroundColor: index === currentIndex ? primaryColor : '#555',
                  transition: 'all 0.3s',
                }}
              />
            ))}
          </div>
        </>
      ) : (
        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            flexWrap: 'wrap',
            gap: '40px',
          }}
        >
          {teamMembers.map((member, index) => (
            <TeamCard key={index} member={member} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Team;

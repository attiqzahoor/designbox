import React from 'react';
import { FaLinkedin, FaFacebook, FaWhatsapp, FaInstagram, FaTiktok, FaEnvelope } from 'react-icons/fa';

export default function Contact() {
  const themeColor = '#ff7f11';

  const itemStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: '10px',
    color: '#fff',
    textDecoration: 'none',
    marginBottom: '5px',
    padding: '10px 15px',
    transition: 'all 0.3s ease-out',
    backgroundColor: 'transparent',
    borderRadius: '4px',
  };

  const iconStyle = {
    padding: '10px',
    border: `2px solid ${themeColor}`,
    borderRadius: '50%',
    transition: 'all 0.3s ease-out',
    color: themeColor,
  };

  return (
    <section id="contact" style={{ backgroundColor: '#000', color: '#fff', padding: '60px 20px', position: 'relative' }}>
      
      {/* 🔶 Top Divider Line */}
      <div style={{
        borderTop: '1px solid #333',
        width: '100%',
        marginBottom: '40px',
        opacity: 0.8,
      }}></div>

      <div style={{
        display: 'flex',
        justifyContent: 'space-between',
        flexWrap: 'wrap',
        gap: '30px'
      }}>
        {/* Left Section */}
        <div style={{ flex: '1', minWidth: '250px' }}>
          <h2
            style={{
              fontSize: '2rem',
              color: themeColor,
              cursor: 'pointer',
              transition: 'all 0.3s ease-out',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.textShadow = `0 0 15px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            Des!gn Box
          </h2>
        </div>

        {/* Center Section */}
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column' }}>
          <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noreferrer" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaLinkedin size={20} /></div> LinkedIn
          </a>
          <a href="mailto:designer@example.com" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaEnvelope size={20} /></div> designer@example.com
          </a>
          <a href="https://facebook.com/yourprofile" target="_blank" rel="noreferrer" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaFacebook size={20} /></div> Facebook
          </a>
        </div>

        {/* Right Section */}
        <div style={{ flex: '1', minWidth: '250px', display: 'flex', flexDirection: 'column' }}>
          <a href="https://wa.me/1234567890" target="_blank" rel="noreferrer" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaWhatsapp size={20} /></div> +92 123 4567890
          </a>
          <a href="https://instagram.com/yourprofile" target="_blank" rel="noreferrer" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaInstagram size={20} /></div> Instagram
          </a>
          <a href="https://tiktok.com/@yourprofile" target="_blank" rel="noreferrer" style={itemStyle}
            onMouseEnter={(e) => {
              e.currentTarget.style.color = themeColor;
              e.currentTarget.style.textShadow = `0 0 8px ${themeColor}`;
              e.currentTarget.style.transform = 'translateY(-3px)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.color = '#fff';
              e.currentTarget.style.textShadow = 'none';
              e.currentTarget.style.transform = 'translateY(0)';
            }}
          >
            <div style={iconStyle}><FaTiktok size={20} /></div> TikTok
          </a>
        </div>
      </div>

      {/* ✅ Copyright */}
      <div style={{
        marginTop: '40px',
        textAlign: 'center',
        fontSize: '0.9rem',
        color: '#aaa',
        borderTop: '1px solid #333',
        paddingTop: '20px',
        opacity: 0.8,
      }}>
        © {new Date().getFullYear()} Des!gn Box. All rights reserved.
      </div>
    </section>
  );
}

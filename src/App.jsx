// App.jsx
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import BackgroundShapes from './components/BackgroundShapes';
import Services from './components/Services';
import Testimonial from './components/Testimonial';
import Team from './components/Team'
import Contact from './components/Contact';
import CustomCursor from './components/CustomCursor';

function App() {
  return (
    <div>
      <CustomCursor />
      <BackgroundShapes/>
      <Navbar />
      <Hero />
      <About />
      <Portfolio />
      <Services />
      <Testimonial/>
      <Team/>
      <Contact />
    </div>
  );
}

export default App;

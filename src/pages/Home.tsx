import React, { memo } from 'react';
import { Fade } from "react-awesome-reveal";
import './Style/Home.css';

const Home: React.FC = memo(() => {

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  return (
    <section id="home" className="home-section">
      <div className="home-content">

        <Fade direction="up" cascade damping={0.2} triggerOnce>
          <h1 className="hero-title">Liliane Castro</h1>

          <p className="hero-subtitle">
            Consultoria especializada em benefícios do INSS e planejamento de aposentadoria.
          </p>
        </Fade>

      </div>

      <Fade delay={1000} triggerOnce>
        <button
          onClick={() => scrollToSection('sobre')}
          className="scroll-indicator"
          aria-label="Rolar para baixo"
        >
          <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
            <path d="M7 13l5 5 5-5M7 6l5 5 5-5" />
          </svg>
        </button>
      </Fade>
    </section>
  );
});

Home.displayName = 'Home';
export default Home;
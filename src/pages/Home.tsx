import React, { memo, useEffect, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import './Style/Home.css';

const Home: React.FC = memo(() => {
  const particlesRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;
      particlesRef.current.innerHTML = '';
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';
        const size = Math.random() * 100 + 50;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;
        particle.style.animationDelay = `${Math.random() * 6}s`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();
        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);
    return () => window.removeEventListener('resize', createParticles);
  }, []);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const typingSequences = [
    'Especialista em Aposentadoria',
    'Especialista em Auxílio-doença',
    'Especialista em Pensão por morte',
    'Seus direitos garantidos com excelência'
  ];

  return (
    <section id="home" className="home-section">
      <div className="glow-effect"></div>
      <div ref={particlesRef} className="particles-container"></div>
      <div className="highlight-particle"></div>
      <div className="highlight-particle"></div>

      <div className="home-content">
        <Fade direction="down" cascade damping={0.05} triggerOnce>
          <h1 className="hero-title">Liliane Castro</h1>
          <div className="typing-container">
            <TypingEffect sequences={typingSequences} />
          </div>
          <button onClick={() => scrollToSection('contato')} className="cta-button">
            <span>Fale Comigo</span>
            <span className="icon">→</span>
          </button>
        </Fade>
      </div>

      <button onClick={() => scrollToSection('sobre')} className="scroll-indicator" aria-label="Role para saber mais">
        <div className="scroll-arrow"></div>
      </button>
    </section>
  );
});

const TypingEffect: React.FC<{ sequences: string[] }> = ({ sequences }) => {
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentSequence = sequences[currentIndex];
      if (!isDeleting) {
        if (currentText.length < currentSequence.length) {
          setCurrentText(currentSequence.slice(0, currentText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (currentText.length > 0) {
          setCurrentText(currentSequence.slice(0, currentText.length - 1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % sequences.length);
        }
      }
    }, isDeleting ? 50 : 100);
    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, sequences]);

  return <span className="typing-text">{currentText}</span>;
};

Home.displayName = 'Home';
export default Home;

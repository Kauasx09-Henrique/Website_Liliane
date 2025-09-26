import React, { useCallback, memo, useEffect, useRef } from 'react';
import { Fade } from "react-awesome-reveal";
import './Style/Home.css';

const Home: React.FC = memo(() => {
  const particlesRef = useRef<HTMLDivElement>(null);

  // Criar partículas customizadas
  useEffect(() => {
    const createParticles = () => {
      if (!particlesRef.current) return;

      // Limpar partículas existentes
      particlesRef.current.innerHTML = '';

      // Criar partículas
      for (let i = 0; i < 30; i++) {
        const particle = document.createElement('div');
        particle.className = 'particle';

        // Posição e tamanho aleatórios
        const size = Math.random() * 100 + 50;
        const posX = Math.random() * 100;
        const posY = Math.random() * 100;
        const delay = Math.random() * 6;

        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${posX}%`;
        particle.style.top = `${posY}%`;
        particle.style.animationDelay = `${delay}s`;
        particle.style.opacity = (Math.random() * 0.3 + 0.1).toString();

        particlesRef.current.appendChild(particle);
      }
    };

    createParticles();
    window.addEventListener('resize', createParticles);

    return () => window.removeEventListener('resize', createParticles);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  };

  const typingSequences = [
    'Especialista em Aposentadoria',
    'Especialista em Auxílio-doença',
    'Especialista em Pensão por morte',
    'Seus direitos garantidos com excelência'
  ];

  return (
    <section id="home" className="home-section">
      {/* Efeito de brilho background */}
      <div className="glow-effect"></div>

      {/* Partículas customizadas */}
      <div ref={particlesRef} className="particles-container"></div>

      {/* Partículas de destaque */}
      <div className="highlight-particle"></div>
      <div className="highlight-particle"></div>

      <div className="home-content">
        <Fade direction="down" cascade damping={0.05} triggerOnce>
          <h1 className="hero-title">
            Liliane Castro
          </h1>

          <div className="typing-container">
            <TypingEffect sequences={typingSequences} />
          </div>

          <button
            onClick={() => scrollToSection('contato')}
            className="cta-button"
          >
            <span>Fale Comigo</span>
            <span className="icon">→</span>
          </button>
        </Fade>
      </div>

      <button
        onClick={() => scrollToSection('sobre')}
        className="scroll-indicator"
        aria-label="Role para saber mais"
      >
        <div className="scroll-arrow"></div>
      </button>
    </section>
  );
});

// Componente de typing effect customizado
const TypingEffect: React.FC<{ sequences: string[] }> = ({ sequences }) => {
  const [currentText, setCurrentText] = React.useState('');
  const [currentIndex, setCurrentIndex] = React.useState(0);
  const [isDeleting, setIsDeleting] = React.useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      const currentSequence = sequences[currentIndex];

      if (!isDeleting) {
        // Digitando
        if (currentText.length < currentSequence.length) {
          setCurrentText(currentSequence.slice(0, currentText.length + 1));
        } else {
          // Espera antes de apagar
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        // Apagando
        if (currentText.length > 0) {
          setCurrentText(currentText.slice(0, -1));
        } else {
          setIsDeleting(false);
          setCurrentIndex((currentIndex + 1) % sequences.length);
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [currentText, currentIndex, isDeleting, sequences]);

  return (
    <span className="typing-text">
      {currentText}
    </span>
  );
};

Home.displayName = 'Home';
export default Home;
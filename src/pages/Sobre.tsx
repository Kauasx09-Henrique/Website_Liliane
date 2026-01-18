import React, { useState, useEffect } from 'react';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';
import './Style/Sobre.css';

const Sobre: React.FC = () => {
  const [activeSkill, setActiveSkill] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const skills = [
    { name: "Aposentadoria por Idade", icon: "🏛️" },
    { name: "Aposentadoria por Invalidez", icon: "⚖️" },
    { name: "Auxílio-doença", icon: "🏥" },
    { name: "Pensão por Morte", icon: "💼" },
    { name: "Processo Administrativo INSS", icon: "📋" },
    { name: "Planejamento Previdenciário", icon: "📊" }
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div
        className="cursor-glow"
        style={{
          left: mousePosition.x - 20,
          top: mousePosition.y - 20
        }}
      />

      <div className="container">
        {/* Header com efeito especial */}
        <div className="section-header">
          <Fade direction="down" triggerOnce cascade damping={0.2}>
            <h2 className="section-title">
              <span className="title-gradient">Sobre Mim</span>
            </h2>
            <div className="title-decoration">
              <div className="decoration-line"></div>
              <div className="decoration-dot"></div>
              <div className="decoration-line"></div>
            </div>
          </Fade>
        </div>

        {/* Conteúdo principal */}
        <div className="sobre-content">
          {/* Coluna da imagem com efeitos especiais */}
          <Fade direction="left" triggerOnce delay={300}>
            <div className="image-column">
              <div className="image-wrapper">
                <div className="image-frame">
                  <img
                    src={"https://images.pexels.com/photos/3763188/pexels-photo-3763188.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
                    alt="Dra. Liliane Castro - Advogada Previdenciária"
                    className="profile-image"
                  />
                </div>

                {/* Efeitos flutuantes */}
                <div className="floating-shapes">
                  <div className="shape shape-1"></div>
                  <div className="shape shape-2"></div>
                  <div className="shape shape-3"></div>
                </div>

                {/* Badge de experiência */}
                <Bounce triggerOnce delay={800}>
                  <div className="experience-badge">
                    <span className="badge-years">+10</span>
                    <span className="badge-text">Anos de Experiência</span>
                  </div>
                </Bounce>
              </div>
            </div>
          </Fade>

          {/* Coluna do texto com animações em cascata */}
          <Fade direction="right" triggerOnce delay={500} cascade damping={0.1}>
            <div className="text-column">
              <div className="text-content">
                <div className="intro-text">
                  <h3>
                    <span className="highlight-word">Trajetória</span> e
                    <span className="highlight-word"> Compromisso</span>
                  </h3>

                  <div className="text-grid">
                    <p className="lead-paragraph">
                      Com <span className="emphasis">anos de dedicação</span> ao Direito Previdenciário,
                      minha missão é traduzir a <span className="emphasis">complexidade da lei</span> em
                      <span className="emphasis"> resultados concretos</span> para você.
                    </p>

                    <p>
                      Acredito em uma advocacia <span className="accent">humana</span>,
                      <span className="accent"> transparente</span> e focada em garantir
                      o seu <span className="accent">bem-estar</span> e seus
                      <span className="accent"> direitos</span>.
                    </p>

                    <blockquote className="quote-box">
                      <div className="quote-icon">❝</div>
                      <p>Cada caso é tratado com máxima atenção, buscando sempre a solução mais justa e eficiente.</p>
                    </blockquote>
                  </div>
                </div>

                {/* Seção de competências interativa */}
                <div className="skills-section">
                  <h4>
                    <span className="section-icon">⭐</span>
                    Áreas de Atuação
                  </h4>

                  <div className="skills-grid">
                    {skills.map((skill, index) => (
                      <Zoom
                        key={index}
                        triggerOnce
                        delay={600 + index * 100}
                        className="skill-item-wrapper"
                      >
                        <div
                          className={`skill-item ${activeSkill === index ? 'active' : ''}`}
                          onMouseEnter={() => setActiveSkill(index)}
                          onMouseLeave={() => setActiveSkill(null)}
                          onClick={() => setActiveSkill(activeSkill === index ? null : index)}
                        >
                          <span className="skill-icon">{skill.icon}</span>
                          <span className="skill-name">{skill.name}</span>
                          <div className="skill-hover-effect"></div>
                        </div>
                      </Zoom>
                    ))}
                  </div>
                </div>

                {/* Call to Action */}
                <Fade triggerOnce delay={1200}>
                  <div className="cta-box">
                    <p className="cta-text">Pronto para garantir seus direitos?</p>
                    <button className="cta-button">
                      <span>Agendar Consulta</span>
                      <div className="button-arrow">→</div>
                    </button>
                  </div>
                </Fade>
              </div>
            </div>
          </Fade>
        </div>
      </div>

      {/* Elementos decorativos de fundo */}
      <div className="background-elements">
        <div className="bg-element bg-element-1"></div>
        <div className="bg-element bg-element-2"></div>
        <div className="bg-element bg-element-3"></div>
      </div>
    </section>
  );
};

export default Sobre;
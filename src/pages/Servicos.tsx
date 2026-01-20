import React, { useState, useEffect } from 'react';
import { Fade, Zoom, Flip } from 'react-awesome-reveal';
import './Style/Servicos.css';

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
  caracteristicas: string[];
  delay: number;
}

const Servicos: React.FC = () => {
  const [servicoAtivo, setServicoAtivo] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const servicos: Servico[] = [
    
    {
      id: 1,
      titulo: "Aposentadoria por Idade",
      descricao: "Orientação passo a passo e requerimento administrativo para quem atingiu a idade mínima.",
      icone: "🎂",
      caracteristicas: ["Análise de carência", "Documentação Rural", "Tempo de contribuição", "Pedido no INSS"],
      delay: 400
    },
    {
      id: 2,
      titulo: "Benefícios por Incapacidade",
      descricao: "Assessoria para Auxílio-Doença e Aposentadoria por Invalidez (Incapacidade Permanente).",
      icone: "🩺",
      caracteristicas: ["Análise de Laudos", "Agendamento de Perícia", "Prorrogação de benefício", "Acerto pós-perícia"],
      delay: 600
    },
    {
      id: 3,
      titulo: "Revisão de Benefícios",
      descricao: "Verificação minuciosa do seu benefício atual para encontrar erros de cálculo do INSS.",
      icone: "🔍",
      caracteristicas: ["Revisão da Vida Toda", "Erro de cálculo", "Inclusão de tempo", "Aumento de renda"],
      delay: 800
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="servicos" className="servicos-section">
      <div className="background-particles">
        {[...Array(15)].map((_, i) => (
          <div key={i} className="particle" style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 5}s`,
            animationDuration: `${3 + Math.random() * 4}s`
          }} />
        ))}
      </div>

      <div className="container">
        <div className="servicos-header">
          <Fade direction="down" triggerOnce cascade damping={0.3}>
            <h2 className="section-title">
              <span className="title-text">Serviços Especializados</span>
              <span className="title-underline"></span>
            </h2>
            <p className="section-subtitle">
              Soluções completas e personalizadas para garantir sua tranquilidade e o melhor benefício.
            </p>
          </Fade>
        </div>

        <div className="servicos-grid">
          {servicos.map((servico) => (
            <Fade
              key={servico.id}
              direction="up"
              triggerOnce
              delay={servico.delay}
              className="servico-card-wrapper"
            >
              <div
                className={`servico-card ${servicoAtivo === servico.id ? 'ativo' : ''}`}
                onMouseEnter={() => setServicoAtivo(servico.id)}
                onMouseLeave={() => setServicoAtivo(null)}
                onClick={() => setServicoAtivo(servicoAtivo === servico.id ? null : servico.id)}
              >
                <div className="card-glow"></div>
                
                <div className="card-header">
                  <div className="icon-container">
                    <span className="servico-icon">{servico.icone}</span>
                    <div className="icon-background"></div>
                  </div>
                  <Flip triggerOnce delay={servico.delay + 200}>
                    <h3 className="servico-titulo">{servico.titulo}</h3>
                  </Flip>
                </div>

                <div className="card-content">
                  <p className="servico-descricao">{servico.descricao}</p>
                  <div className="caracteristicas-list">
                    {servico.caracteristicas.map((caracteristica, idx) => (
                      <Zoom key={idx} triggerOnce delay={servico.delay + 300 + idx * 100}>
                        <span className="caracteristica-tag">✓ {caracteristica}</span>
                      </Zoom>
                    ))}
                  </div>
                </div>

                <div className="card-footer">
                  <button className="saiba-mais-btn">
                    <span>Solicitar Análise</span>
                    <div className="btn-arrow">→</div>
                  </button>
                </div>

                <div className="card-expand"></div>
              </div>
            </Fade>
          ))}
        </div>
      </div>

      <div
        className="custom-cursor"
        style={{ left: mousePos.x, top: mousePos.y, opacity: servicoAtivo ? 1 : 0 }}
      />
    </section>
  );
};

export default Servicos;
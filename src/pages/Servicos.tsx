import React, { useState, useRef, useEffect } from 'react';
import { Fade, Zoom, Flip } from 'react-awesome-reveal';
import './Style/Servicos.css';

interface Servico {
  id: number;
  titulo: string;
  descricao: string;
  icone: string;
  cor: string;
  caracteristicas: string[];
  delay: number;
}

const Servicos: React.FC = () => {
  const [servicoAtivo, setServicoAtivo] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const sectionRef = useRef<HTMLElement>(null);

  const servicos: Servico[] = [
    {
      id: 1,
      titulo: "Aposentadoria por Tempo de Contribuição",
      descricao: "Auxiliamos você a calcular o tempo de contribuição e garantir sua aposentadoria no prazo correto.",
      icone: "⏳",
      cor: "var(--secondary-color)",
      caracteristicas: ["Cálculo preciso", "Documentação completa", "Simulações personalizadas", "Acompanhamento jurídico"],
      delay: 200
    },
    {
      id: 2,
      titulo: "Aposentadoria por Idade",
      descricao: "Orientação completa sobre requisitos, regras e procedimentos para obter aposentadoria por idade.",
      icone: "🎂",
      cor: "var(--secondary-color)",
      caracteristicas: ["Análise de elegibilidade", "Planejamento financeiro", "Atualização de regras", "Suporte na aplicação"],
      delay: 400
    },
    {
      id: 3,
      titulo: "Benefícios por Incapacidade",
      descricao: "Assistência na solicitação de auxílios-doença e aposentadoria por invalidez, com acompanhamento completo.",
      icone: "🩺",
      cor: "var(--secondary-color)",
      caracteristicas: ["Avaliação médica", "Documentação completa", "Recursos administrativos", "Suporte contínuo"],
      delay: 600
    },
    {
      id: 4,
      titulo: "Revisão e Planejamento Previdenciário",
      descricao: "Revisamos seu histórico e ajudamos a maximizar benefícios, evitando perdas ou atrasos.",
      icone: "📊",
      cor: "var(--secondary-color)",
      caracteristicas: ["Revisão de cálculos", "Planejamento estratégico", "Identificação de pendências", "Orientação personalizada"],
      delay: 800
    }
  ];

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => setMousePos({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section id="servicos" className="servicos-section" ref={sectionRef}>
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
              <span className="title-text">Serviços Exclusivos</span>
              <span className="title-underline"></span>
            </h2>
            <p className="section-subtitle">
              Soluções completas e personalizadas para impulsionar seu negócio digital
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
                style={{ '--card-color': servico.cor } as React.CSSProperties}
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
                    <span>Saiba Mais</span>
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
        style={{ left: mousePos.x - 15, top: mousePos.y - 15, opacity: servicoAtivo ? 0.8 : 0 }}
      />
    </section>
  );
};

export default Servicos;

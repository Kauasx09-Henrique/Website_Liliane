import React from 'react';
import { Fade, Slide } from 'react-awesome-reveal';
import './Style/Sobre.css';

const Sobre: React.FC = () => {

  const diferenciais = [
    { titulo: "Atendimento Humanizado", texto: "Você não é um número. Entendo sua história para buscar o melhor benefício.", icon: "🤝" },
    { titulo: "Análise Técnica", texto: "Cálculos precisos para garantir que você não perca dinheiro na aposentadoria.", icon: "📊" },
    { titulo: "Agilidade", texto: "Processos administrativos diretos, sem a lentidão do judiciário.", icon: "⚡" },
  ];

  return (
    <section id="sobre" className="sobre-section">
      <div className="container">
        
        <div className="sobre-wrapper">
          {/* COLUNA DA IMAGEM */}
          <div className="image-col">
            <Slide direction="left" triggerOnce>
              <div className="image-composition">
                {/* Imagem Principal */}
                <div className="main-image-frame">
                   <img 
                    src="../../public/Liliane.png" 
                    alt="Liliane Castro" 
                    className="main-image"
                  />
                </div>
                
                {/* Elemento Decorativo de Fundo */}
                <div className="decorative-backdrop"></div>

                {/* Card Flutuante - Estatística */}
                <div className="floating-stat">
                  <span className="stat-number">5+</span>
                  <span className="stat-text">Anos garantindo<br/>direitos</span>
                </div>
              </div>
            </Slide>
          </div>

          {/* COLUNA DE TEXTO */}
          <div className="content-col">
            <Fade direction="up" triggerOnce cascade damping={0.2}>
              <h4 className="label-top">QUEM SOU EU</h4>
              <h2 className="headline">
                Planejamento hoje,<br/>
                <span className="highlight">tranquilidade amanhã.</span>
              </h2>
              
              <p className="bio-text">
                Muitas pessoas perdem dinheiro ou têm benefícios negados por falta de conhecimento técnico. 
                <strong>Eu estou aqui para mudar isso.</strong>
              </p>
              
              <p className="bio-text">
                Sou especialista em desburocratizar a Previdência Social. Minha atuação é focada na via 
                administrativa e no planejamento estratégico, garantindo que você receba o 
                <strong> teto máximo possível</strong> da sua aposentadoria, sem depender da sorte.
              </p>

              {/* Lista de Diferenciais Modernos */}
              <div className="diferenciais-list">
                {diferenciais.map((item, index) => (
                  <div key={index} className="diferencial-item">
                    <div className="diferencial-icon">{item.icon}</div>
                    <div className="diferencial-info">
                      <h5>{item.titulo}</h5>
                      <p>{item.texto}</p>
                    </div>
                  </div>
                ))}
              </div>

              <button className="btn-primary">
                Conhecer meus serviços
              </button>
            </Fade>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sobre;
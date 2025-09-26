import React, { useState, useEffect } from 'react';
import { Fade, Zoom, Bounce } from 'react-awesome-reveal';
import './Footer.css';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [isVisible, setIsVisible] = useState(false);
  const [emailCopied, setEmailCopied] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { threshold: 0.1 }
    );

    const footer = document.querySelector('.footer');
    if (footer) observer.observe(footer);

    return () => observer.disconnect();
  }, []);

  const handleEmailClick = () => {
    navigator.clipboard.writeText('consultor@previdencia.com.br');
    setEmailCopied(true);
    setTimeout(() => setEmailCopied(false), 2000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
  
    { icon: '📱', name: 'WhatsApp', url: 'https://wa.me/556184505988' },
    { icon: '📧', name: 'Email', action: handleEmailClick },
    { icon: '🏢', name: 'CNPJ', action: () => navigator.clipboard.writeText('12.345.678/0001-90') }
  ];

  const quickLinks = [
    { name: 'Início', href: '#hero' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Benefícios', href: '#beneficios' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Contato', href: '#contato' }
  ];

  const servicesList = [
    '📊 Análise Previdenciária',
    '💰 Aposentadoria Programada',
    '🏥 Auxílio-doença e LOAS',
    '👵 Pensão por Morte',
    '⚖️ Revisão de Benefícios',
    '📈 Planejamento Previdenciário'
  ];

  return (
    <>
      {/* Botão de voltar ao topo */}
      <Bounce triggerOnce>
        <button
          className={`back-to-top ${isVisible ? 'visible' : ''}`}
          onClick={scrollToTop}
          aria-label="Voltar ao topo"
        >
          <span className="arrow-up">↑</span>
          <div className="top-pulse"></div>
        </button>
      </Bounce>

      <footer className="footer">
        {/* Onda decorativa */}
        <div className="footer-wave">
          <svg viewBox="0 0 1200 120" preserveAspectRatio="none">
            <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
            <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
            <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
          </svg>
        </div>

        <div className="container">
          {/* Conteúdo principal do footer */}
          <div className="footer-content">
            {/* Coluna de informações */}
            <Fade direction="left" triggerOnce cascade damping={0.2}>
              <div className="footer-column info-column">
                <div className="brand-section">
                  <h3 className="brand-name">Consultor Previdenciário</h3>
                  <p className="brand-tagline">Especialista em Previdência Social e Planejamento</p>
                  <div className="brand-highlights">
                  </div>
                </div>

                <div className="contact-info">
                  <div className="contact-item">
                    <span className="contact-icon">📧</span>
                    <div>
                      <span className="contact-label">Email Profissional</span>
                      <button
                        className="contact-value"
                        onClick={handleEmailClick}
                      >
                        consultor@previdencia.com.br
                        {emailCopied && (
                          <Bounce>
                            <span className="copy-badge">Copiado!</span>
                          </Bounce>
                        )}
                      </button>
                    </div>
                  </div>

                  <div className="contact-item">
                  
                 
                  </div>

                  <div className="contact-item">
                    <span className="contact-icon">🕒</span>
                    <div>
                      <span className="contact-label">Horário de Atendimento</span>
                      <span className="contact-value">Seg-Sex: 8h-18h</span>
                    </div>
                  </div>
                </div>
              </div>
            </Fade>

            {/* Coluna de links rápidos */}
            <Fade direction="up" triggerOnce cascade damping={0.2} delay={200}>
              <div className="footer-column links-column">
                <h4 className="column-title">Navegação</h4>
                <ul className="footer-links">
                  {quickLinks.map((link, index) => (
                    <li key={index}>
                      <a
                        href={link.href}
                        className="footer-link"
                        onClick={(e) => {
                          e.preventDefault();
                          document.querySelector(link.href)?.scrollIntoView({
                            behavior: 'smooth'
                          });
                        }}
                      >
                        <span className="link-icon">→</span>
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </Fade>

            {/* Coluna de serviços */}
            <Fade direction="up" triggerOnce cascade damping={0.2} delay={400}>
              <div className="footer-column services-column">
                <h4 className="column-title">Serviços Previdenciários</h4>
                <ul className="service-list">
                  {servicesList.map((service, index) => (
                    <li key={index}>{service}</li>
                  ))}
                </ul>
              </div>
            </Fade>

            {/* Coluna social */}
            <Fade direction="right" triggerOnce cascade damping={0.2} delay={600}>
              <div className="footer-column social-column">
                <h4 className="column-title">Atendimento</h4>
                <p className="social-text">Consultoria especializada em Previdência Social</p>

                <div className="social-links">
                  {socialLinks.map((social, index) => (
                    <Zoom key={index} triggerOnce delay={800 + index * 100}>
                      {social.url ? (
                        <a
                          href={social.url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="social-link"
                          aria-label={social.name}
                        >
                          <span className="social-icon">{social.icon}</span>
                          <span className="social-tooltip">{social.name}</span>
                        </a>
                      ) : (
                        <button
                          onClick={social.action}
                          className="social-link"
                          aria-label={social.name}
                        >
                          <span className="social-icon">{social.icon}</span>
                          <span className="social-tooltip">{social.name}</span>
                        </button>
                      )}
                    </Zoom>
                  ))}
                </div>

       

          
              </div>
            </Fade>
          </div>

          {/* Divisor */}
          <div className="footer-divider">
            <div className="divider-line"></div>
            <div className="divider-star">⚖️</div>
            <div className="divider-line"></div>
          </div>

          {/* Rodapé inferior */}
          <Fade triggerOnce>
            <div className="footer-bottom">
              <div className="footer-copyright">
                <p>
                  © {currentYear} <span className="highlight-name">Consultor Previdenciário</span>.
                  Todos os direitos reservados.
                </p>
                <p className="footer-message">
                  Atuamos em conformidade com a legislação previdenciária brasileira
                </p>
             
              </div>

              <div className="footer-legal">
                <a href="#privacy" className="legal-link">Política de Privacidade</a>
                <a href="#terms" className="legal-link">Termos de Serviço</a>
                <a href="#disclaimer" className="legal-link">Aviso Legal</a>
              </div>
            </div>
          </Fade>
        </div>

        {/* Efeito de partículas */}
        <div className="footer-particles">
          {[...Array(8)].map((_, i) => (
            <div
              key={i}
              className="particle"
              style={{
                left: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${4 + Math.random() * 3}s`
              }}
            />
          ))}
        </div>
      </footer>
    </>
  );
};

export default Footer;
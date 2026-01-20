import React, { useState, useEffect } from 'react';
import { Fade } from 'react-awesome-reveal';
import './Footer.css';

const Footer: React.FC = () => {
  const [currentYear, setCurrentYear] = useState(2025);
  const [showBackToTop, setShowBackToTop] = useState(false);

  useEffect(() => {
    setCurrentYear(new Date().getFullYear());

    const handleScroll = () => {
      setShowBackToTop(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const socialLinks = [
    { icon: '📱', name: 'WhatsApp', url: 'https://wa.me/556184505988' },
    { icon: '📷', name: 'Instagram', url: '#' }, // Adicione seu link real
    { icon: '💼', name: 'LinkedIn', url: '#' }   // Adicione seu link real
  ];

  const quickLinks = [
    { name: 'Início', href: '#home' },
    { name: 'Sobre Mim', href: '#sobre' },
    { name: 'Serviços', href: '#servicos' },
    { name: 'Contato', href: '#contato' }
  ];

  return (
    <footer className="footer">
      
      {/* Botão Voltar ao Topo */}
      <button
        className={`back-to-top ${showBackToTop ? 'visible' : ''}`}
        onClick={scrollToTop}
        aria-label="Voltar ao topo"
      >
        ↑
      </button>

      <div className="container">
        
        {/* Grid Principal */}
        <div className="footer-grid">
          
          {/* Coluna 1: Marca e Redes Sociais */}
          <Fade triggerOnce direction="up">
            <div className="footer-col brand-col">
              <h3 className="footer-logo">Liliane Castro</h3>
              <p className="footer-desc">
                Consultoria especializada em planejamento previdenciário e soluções administrativas no INSS.
              </p>
              
              <div className="social-row">
                {socialLinks.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-btn"
                    aria-label={social.name}
                  >
                    {social.icon}
                  </a>
                ))}
              </div>
            </div>
          </Fade>

          {/* Coluna 2: Navegação Rápida */}
          <Fade triggerOnce direction="up" delay={200}>
            <div className="footer-col links-col">
              <h4>Navegação</h4>
              <ul>
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <a href={link.href} onClick={(e) => {
                      e.preventDefault();
                      document.querySelector(link.href)?.scrollIntoView({ behavior: 'smooth' });
                    }}>
                      {link.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </Fade>

          {/* Coluna 3: Contato e Legal */}
          <Fade triggerOnce direction="up" delay={400}>
            <div className="footer-col contact-col">
              <h4>Contato</h4>
              <p>Brasília - DF (Atendimento Nacional)</p>
              <p className="email-link">contato@lilianecastro.adv.br</p>
              <p className="hours">Seg-Sex: 09h às 18h</p>
            </div>
          </Fade>

        </div>

        {/* Barra Inferior (Copyright) */}
        <div className="footer-bottom">
          <div className="copyright">
            © {currentYear} Liliane Castro. Todos os direitos reservados.
          </div>
          <div className="legal-links">
             <span>CNPJ: 12.345.678/0001-90</span>
             <span className="separator">•</span>
             <a href="#privacy">Privacidade</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
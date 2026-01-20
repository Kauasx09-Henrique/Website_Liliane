import React, { useState, useEffect } from 'react';
import './Header.css';
import logo from '../../public/logo_lc.png'; // Verifique se o caminho está correto

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Altura do header para compensar o scroll (80px)
  const headerOffset = 80;

  useEffect(() => {
    const handleScroll = () => {
      // Muda a cor do header ao rolar
      setIsScrolled(window.scrollY > 50);

      // Lógica para detectar seção ativa
      const sections = ['home', 'sobre', 'servicos', 'contato'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          // Se o elemento está visível na tela (considerando o offset do header)
          if (rect.top <= headerOffset + 50 && rect.bottom >= headerOffset) {
            setActiveSection(section);
            break; 
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault(); // Evita o # na URL
    setIsMobileMenuOpen(false);
    setActiveSection(sectionId);

    const element = document.getElementById(sectionId);
    if (element) {
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        
        {/* LOGO */}
        <a 
          href="#home" 
          className="logo" 
          onClick={(e) => handleNavClick(e, 'home')}
        >
          {/* Se a imagem não carregar, mostra o texto. Se carregar, mostra imagem e texto */}
          <div className="logo-wrapper">
             <img src={logo} alt="LC" className="logo-img" /> 
             <div className="logo-text">
                <span className="logo-name">Liliane Castro</span>
                <span className="logo-desc">Consultoria Previdenciária</span>
             </div>
          </div>
        </a>

        {/* BOTÃO HAMBURGUER (MOBILE) */}
        <button 
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`} 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Abrir menu"
        >
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </button>

        {/* NAVEGAÇÃO */}
        <nav className={`nav-menu ${isMobileMenuOpen ? 'active' : ''}`}>
          <ul className="nav-list">
            {['home', 'sobre', 'servicos', 'contato'].map((item) => (
              <li key={item} className="nav-item">
                <a
                  href={`#${item}`}
                  className={`nav-link ${activeSection === item ? 'active' : ''}`}
                  onClick={(e) => handleNavClick(e, item)}
                >
                  {item.charAt(0).toUpperCase() + item.slice(1)} {/* Capitaliza primeira letra */}
                </a>
              </li>
            ))}
          </ul>
          
          {/* Botão extra no mobile ou desktop se quiser */}
          <a 
            href="https://wa.me/556184505988" 
            target="_blank" 
            rel="noopener noreferrer"
            className="header-cta-button"
          >
            Fale Comigo
          </a>
        </nav>

        {/* Overlay para fechar menu ao clicar fora (Mobile) */}
        <div 
          className={`nav-overlay ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(false)}
        ></div>
      </div>
    </header>
  );
};

export default Header;
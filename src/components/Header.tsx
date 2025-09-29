import React, { useState, useEffect } from 'react';
import './Header.css';

const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // Efeito de scroll
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    // Detectar seção ativa
    const handleSectionChange = () => {
      const sections = ['home', 'sobre', 'servicos', 'contato'];
      const currentSection = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });

      if (currentSection) {
        setActiveSection(currentSection);
      }
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('scroll', handleSectionChange);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('scroll', handleSectionChange);
    };
  }, []);

  // Efeito de ripple
  const createRipple = (event: React.MouseEvent) => {
    const button = event.currentTarget;
    const circle = document.createElement('span');
    const diameter = Math.max(button.clientWidth, button.clientHeight);
    const radius = diameter / 2;

    circle.style.width = circle.style.height = `${diameter}px`;
    circle.style.left = `${event.clientX - button.getBoundingClientRect().left - radius}px`;
    circle.style.top = `${event.clientY - button.getBoundingClientRect().top - radius}px`;
    circle.classList.add('ripple');

    const ripple = button.getElementsByClassName('ripple')[0];
    if (ripple) {
      ripple.remove();
    }

    button.appendChild(circle);
  };

  const handleNavClick = (event: React.MouseEvent, sectionId: string) => {
    createRipple(event);
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);

    // Scroll suave
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
      <div className="container header-container">
        <a
          href="#home"
          className="logo"
          onClick={(e) => handleNavClick(e, 'home')}
        >
          <img src="../public/logo.lc.png" alt="Logo Liliane Castro" className="logo-img" />
          <span>Liliane Castro</span>
        </a>

        {/* Menu Mobile Toggle */}
        <div
          className={`menu-toggle ${isMobileMenuOpen ? 'active' : ''}`}
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        <nav className={isMobileMenuOpen ? 'active' : ''}>
          <ul>
            <li>
              <a
                href="#home"
                className={activeSection === 'home' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'home')}
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#sobre"
                className={activeSection === 'sobre' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'sobre')}
              >
                Sobre Mim
              </a>
            </li>
            <li>
              <a
                href="#servicos"
                className={activeSection === 'servicos' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'servicos')}
              >
                Serviços
              </a>
            </li>
            <li>
              <a
                href="#contato"
                className={activeSection === 'contato' ? 'active' : ''}
                onClick={(e) => handleNavClick(e, 'contato')}
              >
                Contato
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
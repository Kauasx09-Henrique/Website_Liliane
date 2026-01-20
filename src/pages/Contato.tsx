import React, { useState, useRef } from 'react';
import { Fade, Bounce } from 'react-awesome-reveal';
import './Style/Contato.css';

const Contato: React.FC = () => {
  const [formData, setFormData] = useState({
    nome: '',
    email: '',
    telefone: '',
    assunto: '',
    mensagem: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const formRef = useRef<HTMLFormElement>(null);

  const telefoneWhatsApp = '556184505988'; // Apenas números

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatarMensagemWhatsApp = () => {
    const { nome, email, telefone, assunto, mensagem } = formData;
    return `Olá! Gostaria de entrar em contato através do site:

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Assunto:* ${assunto}

*Mensagem:*
${mensagem}`;
  };

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      const mensagemFormatada = encodeURIComponent(formatarMensagemWhatsApp());
      // Lógica para abrir app ou web dependendo do dispositivo
      const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);
      const baseUrl = isMobile ? 'https://api.whatsapp.com/send' : 'https://web.whatsapp.com/send';
      const urlWhatsApp = `${baseUrl}?phone=${telefoneWhatsApp}&text=${mensagemFormatada}`;

      window.open(urlWhatsApp, '_blank');

      setIsSubmitting(false);
      setSubmitStatus('success');

      setTimeout(() => {
        setFormData({ nome: '', email: '', telefone: '', assunto: '', mensagem: '' });
        setSubmitStatus('idle');
      }, 3000);
    }, 1500);
  };

  const assuntos = [
    'Planejamento Previdenciário',
    'Aposentadoria por Idade',
    'Auxílio Doença/Invalidez',
    'Revisão de Benefício',
    'Outros Assuntos'
  ];

  return (
    <section id="contato" className="contato-section">
      {/* Fundo Decorativo */}
      <div className="contact-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        <Fade direction="down" triggerOnce>
          <div className="contact-header">
            <h2 className="section-title">Vamos Conversar?</h2>
            <p className="section-subtitle">
              Tire suas dúvidas e garanta o melhor benefício. Atendimento ágil pelo WhatsApp.
            </p>
          </div>
        </Fade>

        <div className="contact-content">
          {/* Coluna da Esquerda: Informações */}
          <Fade direction="left" triggerOnce delay={200} className="info-wrapper">
            <div className="contact-info">

              <div className="info-card">
                <div className="card-highlight"></div>
                <div className="info-icon">📱</div>
                <h3>WhatsApp Direto</h3>
                <p>Clique abaixo para iniciar uma conversa agora mesmo.</p>
                <a
                  href={`https://wa.me/${telefoneWhatsApp}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-link"
                >
                  <span>Iniciar Conversa</span>
                  <div className="link-arrow">→</div>
                </a>
              </div>

              <div className="info-details">
                <div className="detail-item">
                  <span className="detail-icon">📍</span>
                  <div>
                    <strong>Localização</strong>
                    <p>Brasília - DF (Atendimento em todo Brasil Online)</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">📧</span>
                  <div>
                    <strong>E-mail</strong>
                    <p>contato@lilianecastro.adv.br</p>
                  </div>
                </div>
                <div className="detail-item">
                  <span className="detail-icon">⏰</span>
                  <div>
                    <strong>Horário</strong>
                    <p>Seg a Sex: 09h às 18h</p>
                  </div>
                </div>
              </div>

              <div className="info-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span> Análise Sigilosa
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span> Atendimento Humanizado
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span> Especialista no INSS
                </div>
              </div>

            </div>
          </Fade>

          {/* Coluna da Direita: Formulário */}
          <Fade direction="right" triggerOnce delay={400} className="form-wrapper">
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={enviarParaWhatsApp}
            >
              <div className="form-header-content">
                <h3>Envie uma mensagem</h3>
                <p>Preencha os dados para agilizar seu atendimento</p>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="nome">Nome Completo</label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="nome"
                      name="nome"
                      value={formData.nome}
                      onChange={handleInputChange}
                      placeholder="Seu nome"
                      required
                      className="form-input"
                    />
                    <span className="input-icon">👤</span>
                  </div>
                </div>

                <div className="input-group">
                  <label htmlFor="telefone">Telefone / WhatsApp</label>
                  <div className="input-wrapper">
                    <input
                      type="tel"
                      id="telefone"
                      name="telefone"
                      value={formData.telefone}
                      onChange={handleInputChange}
                      placeholder="(DD) 99999-9999"
                      required
                      className="form-input"
                    />
                    <span className="input-icon">📞</span>
                  </div>
                </div>

                <div className="input-group full-width">
                  <label htmlFor="email">E-mail</label>
                  <div className="input-wrapper">
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="seu@email.com"
                      required
                      className="form-input"
                    />
                    <span className="input-icon">📧</span>
                  </div>
                </div>

                <div className="input-group full-width">
                  <label htmlFor="assunto">Assunto</label>
                  <div className="input-wrapper">
                    <select
                      id="assunto"
                      name="assunto"
                      value={formData.assunto}
                      onChange={handleInputChange}
                      required
                      className="form-select"
                    >
                      <option value="">Selecione o motivo do contato</option>
                      {assuntos.map((assunto, index) => (
                        <option key={index} value={assunto}>{assunto}</option>
                      ))}
                    </select>
                    <span className="input-icon">📋</span>
                  </div>
                </div>

                <div className="input-group full-width">
                  <label htmlFor="mensagem">Mensagem</label>
                  <div className="input-wrapper">
                    <textarea
                      id="mensagem"
                      name="mensagem"
                      value={formData.mensagem}
                      onChange={handleInputChange}
                      placeholder="Olá, gostaria de saber mais sobre..."
                      rows={4}
                      required
                      className="form-textarea"
                    ></textarea>
                    <span className="input-icon textarea-icon">💭</span>
                  </div>
                </div>
              </div>

              {submitStatus === 'success' && (
                <Bounce triggerOnce>
                  <div className="submit-success">
                    <span className="success-icon">✅</span>
                    <span>Mensagem pronta! Abrindo WhatsApp...</span>
                  </div>
                </Bounce>
              )}

              <button
                type="submit"
                className={`submit-button ${isSubmitting ? 'submitting' : ''}`}
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <div className="loading-spinner"></div>
                    <span>Processando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar Mensagem</span>
                    <div className="whatsapp-submit-icon">➤</div>
                  </>
                )}
              </button>

              <div className="form-footer">
                <p>🔒 Seus dados estão 100% seguros.</p>
              </div>
            </form>
          </Fade>
        </div>

        {/* Seção do Mapa */}
        {/* Seção do Mapa */}
        <Fade direction="up" triggerOnce delay={300}>
          <div className="map-section">
            <h3 className="map-title">Onde Estamos</h3>
            <div className="map-wrapper">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d239.95453785211762!2d-48.1338740724299!3d-15.78957348730076!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1spt-BR!2sbr!4v1768867656166!5m2!1spt-BR!2sbr"
                width="100%"
                height="450"
                style={{ border: 0 }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Localização do Escritório"
              ></iframe>
            </div>
          </div>
        </Fade>

        {/* Botão Flutuante */}
        <Fade triggerOnce delay={600}>
          <a
            href={`https://wa.me/${telefoneWhatsApp}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
            aria-label="Conversar no WhatsApp"
          >
            <div className="float-icon">
              <span>💬</span>
              <div className="float-pulse"></div>
            </div>
            <span className="float-text">Fale Conosco</span>
          </a>
        </Fade>
      </div>
    </section>
  );
};

export default Contato;
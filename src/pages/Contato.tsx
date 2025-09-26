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

  const telefoneWhatsApp = '+556184505988';

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const formatarMensagemWhatsApp = () => {
    const { nome, email, telefone, assunto, mensagem } = formData;

    return `Olá! Gostaria de entrar em contato através do seu site:

*Nome:* ${nome}
*E-mail:* ${email}
*Telefone:* ${telefone}
*Assunto:* ${assunto}

*Mensagem:*
${mensagem}

Aguardo seu retorno!`;
  };

  const enviarParaWhatsApp = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simular processamento
    setTimeout(() => {
      const mensagemFormatada = encodeURIComponent(formatarMensagemWhatsApp());
      const urlWhatsApp = `https://wa.me/${telefoneWhatsApp.replace(/\D/g, '')}?text=${mensagemFormatada}`;

      // Abrir WhatsApp em nova aba
      window.open(urlWhatsApp, '_blank');

      setIsSubmitting(false);
      setSubmitStatus('success');

      // Resetar form após sucesso
      setTimeout(() => {
        setFormData({
          nome: '',
          email: '',
          telefone: '',
          assunto: '',
          mensagem: ''
        });
        setSubmitStatus('idle');
      }, 3000);

    }, 1000);
  };

  const assuntos = [
    'Consulta Jurídica',
    'Orçamento de Serviços',
    'Dúvidas Gerais',
    'Agendamento de Reunião',
    'Outros'
  ];

  return (
    <section id="contato" className="contato-section">
      {/* Elementos decorativos de fundo */}
      <div className="contact-background">
        <div className="bg-shape shape-1"></div>
        <div className="bg-shape shape-2"></div>
        <div className="bg-shape shape-3"></div>
      </div>

      <div className="container">
        {/* Header da seção */}
        <Fade direction="down" triggerOnce>
          <div className="contact-header">
            <h2 className="section-title">
              Vamos Conversar
            </h2>
            <p className="section-subtitle">
              Entre em contato diretamente pelo WhatsApp
            </p>
          </div>
        </Fade>

        <div className="contact-content">
          {/* Informações de contato */}
          <Fade direction="left" triggerOnce delay={200}>
            <div className="contact-info">
              <div className="info-card">
                <div className="info-icon">📱</div>
                <h3>WhatsApp Direto</h3>
                <p>Envie sua mensagem instantaneamente</p>
                <a
                  href={`https://wa.me/${telefoneWhatsApp.replace(/\D/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="whatsapp-direct-link"
                >
                  <span>Conversar Agora</span>
                  <div className="link-arrow">→</div>
                </a>
              </div>

              <div className="info-features">
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Resposta rápida</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Atendimento personalizado</span>
                </div>
                <div className="feature-item">
                  <span className="feature-check">✓</span>
                  <span>Sem complicações</span>
                </div>
              </div>
            </div>
          </Fade>

          {/* Formulário */}
          <Fade direction="right" triggerOnce delay={400}>
            <form
              ref={formRef}
              className="contact-form"
              onSubmit={enviarParaWhatsApp}
            >
              <div className="form-header">
                <h3>Preencha o Formulário</h3>
                <p>Seus dados serão enviados diretamente para o WhatsApp</p>
              </div>

              <div className="form-grid">
                <div className="input-group">
                  <label htmlFor="nome">Nome Completo *</label>
                  <input
                    type="text"
                    id="nome"
                    name="nome"
                    value={formData.nome}
                    onChange={handleInputChange}
                    placeholder="Seu nome completo"
                    required
                    className="form-input"
                  />
                  <div className="input-icon">👤</div>
                </div>

                <div className="input-group">
                  <label htmlFor="email">E-mail *</label>
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
                  <div className="input-icon">📧</div>
                </div>

                <div className="input-group">
                  <label htmlFor="telefone">Telefone/WhatsApp *</label>
                  <input
                    type="tel"
                    id="telefone"
                    name="telefone"
                    value={formData.telefone}
                    onChange={handleInputChange}
                    placeholder="(61) 99999-9999"
                    required
                    className="form-input"
                  />
                  <div className="input-icon">📞</div>
                </div>

                <div className="input-group">
                  <label htmlFor="assunto">Assunto *</label>
                  <select
                    id="assunto"
                    name="assunto"
                    value={formData.assunto}
                    onChange={handleInputChange}
                    required
                    className="form-select"
                  >
                    <option value="">Selecione um assunto</option>
                    {assuntos.map((assunto, index) => (
                      <option key={index} value={assunto}>{assunto}</option>
                    ))}
                  </select>
                  <div className="input-icon">📋</div>
                </div>

                <div className="input-group full-width">
                  <label htmlFor="mensagem">Mensagem *</label>
                  <textarea
                    id="mensagem"
                    name="mensagem"
                    value={formData.mensagem}
                    onChange={handleInputChange}
                    placeholder="Descreva sua necessidade ou dúvida..."
                    rows={5}
                    required
                    className="form-textarea"
                  ></textarea>
                  <div className="input-icon">💭</div>
                </div>
              </div>

              {/* Status de envio */}
              {submitStatus === 'success' && (
                <Bounce triggerOnce>
                  <div className="submit-success">
                    <span className="success-icon">✅</span>
                    <span>Formulário enviado! Redirecionando para o WhatsApp...</span>
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
                    <span>Enviando...</span>
                  </>
                ) : (
                  <>
                    <span>Enviar para WhatsApp</span>
                    <div className="whatsapp-submit-icon">💬</div>
                  </>
                )}
              </button>

              <div className="form-footer">
                <p className="privacy-notice">
                  🔒 Seus dados estão seguros e serão usados apenas para este contato
                </p>
              </div>
            </form>
          </Fade>
        </div>

        {/* =============================================== */}
        {/* INÍCIO DA SEÇÃO DO MAPA                         */}
        {/* =============================================== */}
        <Fade direction="up" triggerOnce delay={300}>
          <div className="map-section">
            <h3 className="map-title">Nossa Localização</h3>
            <div className="map-container" style={{ width: '100%', height: '0', paddingBottom: '75%', position: 'relative' }}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d479.90995510916963!2d-48.134097117003726!3d-15.789202194416198!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sIgreja%20Adventista%20do%20S%C3%A9timo%20Dia%2CBras%C3%ADlia%2CBrasilia%2C%20BRASIL!5e0!3m2!1spt-BR!2sbr!4v1758899025965!5m2!1spt-BR!2sbr"
                style={{ border: 0, position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                allowFullScreen={true}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </Fade>

        {/* =============================================== */}
        {/* FIM DA SEÇÃO DO MAPA                            */}
        {/* =============================================== */}


        {/* Botão flutuante do WhatsApp */}
        <Fade triggerOnce delay={600}>
          <a
            href={`https://wa.me/${telefoneWhatsApp.replace(/\D/g, '')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="whatsapp-float"
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

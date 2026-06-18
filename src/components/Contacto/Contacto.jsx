import { useState } from 'react';
import { Mail, MapPin, Clock, Phone, MessageCircle, Truck, ShieldCheck } from 'lucide-react';
import { PAGE_HERO_IMAGES } from '../../utils/helpers';
import PageHero from '../PageHero/PageHero';
import './Contacto.css';

const HIGHLIGHTS = [
  { icon: MessageCircle, stat: '24–48 hs', label: 'Tiempo de respuesta' },
  { icon: Truck, stat: 'Todo el país', label: 'Envíos disponibles' },
  { icon: ShieldCheck, stat: '30 días', label: 'Garantía de calidad' },
];

const CONTACT_INFO = [
  {
    icon: Mail,
    label: 'Email',
    value: 'hola@esencial.com.ar',
    href: 'mailto:hola@esencial.com.ar',
  },
  {
    icon: Phone,
    label: 'Teléfono',
    value: '+54 11 4567-8900',
    href: 'tel:+541145678900',
  },
  {
    icon: MapPin,
    label: 'Showroom',
    value: 'Palermo, CABA — con cita previa',
  },
  {
    icon: Clock,
    label: 'Horario',
    value: 'Lun a Vie, 10:00 – 18:00 hs',
  },
];

const FAQ_ITEMS = [
  {
    q: '¿Hacen envíos a todo el país?',
    a: 'Sí, enviamos a todo Argentina. El costo y plazo se calculan al finalizar la compra.',
  },
  {
    q: '¿Puedo retirar en persona?',
    a: 'Sí, con cita previa en nuestro showroom de Palermo. Escribinos para coordinar.',
  },
  {
    q: '¿Los productos tienen garantía?',
    a: 'Todos nuestros artículos cuentan con garantía por defectos de fabricación de 30 días.',
  },
];

export default function Contacto() {
  const [form, setForm] = useState({ nombre: '', email: '', mensaje: '' });
  const [enviado, setEnviado] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setEnviado(true);
    setForm({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <main className="contacto">
      <PageHero
        image={PAGE_HERO_IMAGES.contacto}
        tag="Hablemos"
        title="Contacto"
        text="Consultas sobre productos, pedidos o colaboraciones. Te respondemos a la brevedad."
      />

      <section className="contacto-highlights">
        <div className="container contacto-highlights-grid">
          {HIGHLIGHTS.map(({ icon: Icon, stat, label }) => (
            <article key={label} className="contacto-highlight">
              <div className="contacto-highlight-icon">
                <Icon size={20} />
              </div>
              <div>
                <strong>{stat}</strong>
                <span>{label}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="contacto-body">
        <div className="container contacto-grid">
          <div className="contacto-info">
            <h2>Datos de contacto</h2>
            <p className="contacto-info-intro">
              Preferimos el trato cercano. Escribinos por mail o completá el formulario.
            </p>
            <div className="contacto-info-cards">
              {CONTACT_INFO.map(({ icon: Icon, label, value, href }) => (
                <article key={label} className="contacto-info-card">
                  <div className="contacto-info-icon">
                    <Icon size={18} />
                  </div>
                  <div>
                    <span className="contacto-info-label">{label}</span>
                    {href ? (
                      <a href={href} className="contacto-info-value">{value}</a>
                    ) : (
                      <span className="contacto-info-value">{value}</span>
                    )}
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="contacto-form-wrapper">
            {enviado ? (
              <div className="contacto-success">
                <div className="contacto-success-icon">
                  <MessageCircle size={32} />
                </div>
                <h3>¡Mensaje enviado!</h3>
                <p>Gracias por escribirnos. Te responderemos pronto.</p>
                <button
                  type="button"
                  className="page-btn"
                  onClick={() => setEnviado(false)}
                >
                  Enviar otro mensaje
                </button>
              </div>
            ) : (
              <form className="contacto-form" onSubmit={handleSubmit}>
                <h2>Enviá tu consulta</h2>
                <div className="contacto-field">
                  <label htmlFor="nombre">Nombre</label>
                  <input
                    id="nombre"
                    name="nombre"
                    type="text"
                    required
                    value={form.nombre}
                    onChange={handleChange}
                    placeholder="Tu nombre"
                  />
                </div>
                <div className="contacto-field">
                  <label htmlFor="email">Email</label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    value={form.email}
                    onChange={handleChange}
                    placeholder="tu@email.com"
                  />
                </div>
                <div className="contacto-field">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    required
                    rows={5}
                    value={form.mensaje}
                    onChange={handleChange}
                    placeholder="¿En qué podemos ayudarte?"
                  />
                </div>
                <button type="submit" className="page-btn contacto-submit">
                  Enviar mensaje
                </button>
              </form>
            )}
          </div>
        </div>
      </section>

      <section className="contacto-faq">
        <div className="container">
          <div className="page-section-header">
            <h2>Preguntas frecuentes</h2>
            <div className="page-section-line" />
          </div>
          <div className="contacto-faq-grid">
            {FAQ_ITEMS.map(({ q, a }, i) => (
              <article key={q} className="contacto-faq-card">
                <span className="contacto-faq-num">{String(i + 1).padStart(2, '0')}</span>
                <h3>{q}</h3>
                <p>{a}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

import { Link } from 'react-router-dom';
import { Heart, Eye, Users } from 'lucide-react';
import { PAGE_HERO_IMAGES } from '../../utils/helpers';
import PageHero from '../PageHero/PageHero';
import './Nosotros.css';

const TEAM_VALUES = [
  {
    icon: Heart,
    title: 'Pasión por lo simple',
    text: 'Creemos que los mejores objetos son los que desaparecen en tu rutina: útiles, bellos y sin complicaciones.',
  },
  {
    icon: Eye,
    title: 'Transparencia',
    text: 'Contamos de dónde vienen nuestros productos, quién los hace y con qué materiales están elaborados.',
  },
  {
    icon: Users,
    title: 'Comunidad',
    text: 'Apoyamos a productores y artesanos locales, construyendo relaciones de largo plazo basadas en el respeto mutuo.',
  },
];

const TIMELINE = [
  { year: '2022', event: 'Esencial surge como un proyecto personal de curaduría de objetos cotidianos.' },
  { year: '2023', event: 'Abrimos la primera colección con velas artesanales y cerámica de talleres locales.' },
  { year: '2024', event: 'Incorporamos la línea de papelería ecológica y ampliamos nuestro catálogo online.' },
  { year: '2026', event: 'Seguimos creciendo con la misma premisa: menos cantidad, más calidad y propósito.' },
];

export default function Nosotros() {
  return (
    <main className="nosotros">
      <PageHero
        image={PAGE_HERO_IMAGES.nosotros}
        tag="Nuestra historia"
        title="Sobre Esencial"
        text="Seleccionamos objetos cotidianos con alma, historia y responsabilidad ambiental."
      />

      <section className="nosotros-story">
        <div className="container nosotros-story-grid">
          <div className="nosotros-story-text">
            <h2>Cómo empezó todo</h2>
            <p>
              Esencial nació cuando nos dimos cuenta de que llenábamos nuestros espacios
              con cosas innecesarias. Queríamos lo contrario: pocas piezas, bien elegidas,
              que aporten calma y funcionalidad a cada rincón del hogar.
            </p>
            <blockquote className="nosotros-pullquote">
              <p>Menos cantidad, más calidad y propósito en cada elección.</p>
            </blockquote>
            <p>
              Empezamos visitando talleres, probando materiales y conversando con quienes
              fabrican cada producto. Ese recorrido se convirtió en un catálogo curado
              donde cada artículo tiene un motivo para estar.
            </p>
            <p>
              Hoy seguimos con la misma mirada: seleccionar con criterio, contar historias
              reales y ofrecer una alternativa al consumo impulsivo.
            </p>
          </div>
          <div className="nosotros-story-visual">
            <div className="nosotros-story-image">
              <img
                src={PAGE_HERO_IMAGES.nosotros}
                alt="Interior con objetos de diseño artesanal"
              />
            </div>
            <div className="nosotros-story-stat">
              <span className="nosotros-story-stat-num">+15</span>
              <span className="nosotros-story-stat-label">Artesanos aliados</span>
            </div>
          </div>
        </div>
      </section>

      <section className="nosotros-values">
        <div className="container">
          <div className="page-section-header">
            <h2>Lo que nos guía</h2>
            <div className="page-section-line" />
          </div>
          <div className="nosotros-values-grid">
            {TEAM_VALUES.map(({ icon: Icon, title, text }) => (
              <article key={title} className="nosotros-value-card">
                <div className="nosotros-value-icon-wrap">
                  <Icon size={22} className="nosotros-value-icon" />
                </div>
                <h3>{title}</h3>
                <p>{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="nosotros-timeline">
        <div className="container">
          <div className="page-section-header">
            <h2>Nuestro camino</h2>
            <div className="page-section-line" />
          </div>
          <div className="nosotros-timeline-track">
            {TIMELINE.map(({ year, event }) => (
              <div key={year} className="nosotros-timeline-item">
                <span className="nosotros-timeline-year">{year}</span>
                <div className="nosotros-timeline-dot" aria-hidden="true" />
                <p>{event}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="nosotros-cta">
        <div className="container nosotros-cta-inner">
          <h2>Descubrí lo que seleccionamos para vos</h2>
          <p>Explorá nuestro catálogo y encontrá piezas que van a acompañarte por años.</p>
          <Link to="/productos" className="page-btn">
            Ver productos
          </Link>
        </div>
      </section>
    </main>
  );
}

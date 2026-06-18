import { Link } from 'react-router-dom';

// Hero compartido: misma altura en Productos, Nosotros y Contacto
export default function PageHero({
  image,
  title,
  text,
  tag,
  greeting,
  backTo,
  backLabel,
  plain = false,
}) {
  return (
    <section
      className={`page-hero${plain ? ' page-hero--plain' : ''}`}
      style={!plain && image ? { backgroundImage: `url("${image}")` } : undefined}
    >
      {!plain && <div className="page-hero-overlay" aria-hidden="true" />}
      <div className="container page-hero-inner">
        {backTo && (
          <Link to={backTo} className="page-hero-back">
            {backLabel}
          </Link>
        )}
        {tag && (
          <span className={`page-tag${plain ? '' : ' page-tag--light'}`}>{tag}</span>
        )}
        <h1>{title}</h1>
        {greeting && <p className="page-hero-greeting">{greeting}</p>}
        {text && <p className="page-hero-text">{text}</p>}
      </div>
    </section>
  );
}

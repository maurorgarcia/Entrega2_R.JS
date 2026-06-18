import { Link } from 'react-router-dom';
import './NotFound.css';

// Ruta 404 — path="*" en App.jsx (consigna Entrega 2)
export default function NotFound() {
  return (
    <div className="container not-found-wrapper">
      <div className="not-found-card">
        <h1 className="not-found-title">404</h1>
        <h2 className="not-found-subtitle">Página no encontrada</h2>
        <p className="not-found-text">
          La página que estás buscando no existe, ha cambiado de dirección o no está disponible temporalmente.
        </p>
        <Link to="/" className="btn-home-back">
          Ir al inicio
        </Link>
      </div>
    </div>
  );
}

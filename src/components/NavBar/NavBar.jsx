import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import CartWidget from '../CartWidget/CartWidget';
import './NavBar.css';

export default function NavBar({ cart, onEliminar }) {
  const [menuAbierto, setMenuAbierto] = useState(false);
  const [proximamente, setProximamente] = useState(null);

  // Manejo de la navegación y el aviso de secciones disponibles próximamente
  const manejarProximamente = (seccion, e) => {
    e.preventDefault();
    setProximamente(seccion);
    setMenuAbierto(false);
  };

  return (
    <header className="header">
      <div className="container header-container">
        <a href="/" className="logo">
          ESENCIAL
        </a>

        <nav className={`nav ${menuAbierto ? 'open' : ''}`}>
          <ul className="nav-links">
            <li>
              <a href="#productos" onClick={() => setMenuAbierto(false)}>
                Productos
              </a>
            </li>
            <li>
              <a href="#nosotros" onClick={(e) => manejarProximamente('Nosotros', e)}>
                Nosotros
              </a>
            </li>
            <li>
              <a href="#contacto" onClick={(e) => manejarProximamente('Contacto', e)}>
                Contacto
              </a>
            </li>
          </ul>
        </nav>

        <div className="header-actions">
          <CartWidget cart={cart} onEliminar={onEliminar} />
          
          <button 
            className="menu-toggle" 
            onClick={() => setMenuAbierto(!menuAbierto)}
            aria-label="Menú"
          >
            {menuAbierto ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {proximamente && (
        <div className="proximamente-overlay" onClick={() => setProximamente(null)}>
          <div className="proximamente-modal" onClick={(e) => e.stopPropagation()}>
            <button 
              className="proximamente-close" 
              onClick={() => setProximamente(null)}
              aria-label="Cerrar modal"
            >
              <X size={18} />
            </button>
            <h4>Sección: {proximamente}</h4>
            <p>
              Estamos trabajando en esta sección. Estará disponible próximamente en las siguientes entregas del proyecto.
            </p>
            <button className="btn-entendido" onClick={() => setProximamente(null)}>
              Entendido
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

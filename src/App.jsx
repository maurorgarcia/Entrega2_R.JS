import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import NavBar from './components/NavBar/NavBar';
import ScrollToTop from './components/ScrollToTop/ScrollToTop';
import Home from './components/Home/Home';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer';
import Nosotros from './components/Nosotros/Nosotros';
import Contacto from './components/Contacto/Contacto';
import NotFound from './components/NotFound/NotFound';
import './App.css';

function App() {
  // Estado del carrito: lo levanto de localStorage al iniciar
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('esencial_cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  // Cada vez que cambia el carrito, lo guardo en localStorage
  useEffect(() => {
    localStorage.setItem('esencial_cart', JSON.stringify(cart));
  }, [cart]);

  const agregarAlCarrito = (producto, cantidad = 1) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === producto.id);
      const qtyEnCarrito = existe ? existe.qty : 0;

      if (qtyEnCarrito + cantidad > producto.stock) {
        return prevCart;
      }

      if (existe) {
        return prevCart.map((item) =>
          item.id === producto.id ? { ...item, qty: item.qty + cantidad } : item
        );
      }
      return [...prevCart, { ...producto, qty: cantidad }];
    });
  };

  const eliminarDelCarrito = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app-container">
        <NavBar cart={cart} onEliminar={eliminarDelCarrito} />

        <Routes>
          <Route path="/" element={<Home cart={cart} onAgregar={agregarAlCarrito} />} />
          <Route
            path="/productos"
            element={
              <ItemListContainer
                greeting="¡Bienvenidos a Esencial!"
                cart={cart}
                onAgregar={agregarAlCarrito}
              />
            }
          />
          <Route
            path="/category/:categoryId"
            element={
              <ItemListContainer
                greeting="¡Bienvenidos a Esencial!"
                cart={cart}
                onAgregar={agregarAlCarrito}
              />
            }
          />
          <Route
            path="/item/:itemId"
            element={
              <ItemDetailContainer cart={cart} onAgregar={agregarAlCarrito} />
            }
          />
          <Route path="/nosotros" element={<Nosotros />} />
          <Route path="/contacto" element={<Contacto />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <footer className="footer">
          <div className="container footer-grid">
            <div className="footer-brand">
              <span className="footer-logo">ESENCIAL</span>
              <p>Objetos cotidianos con diseño consciente y materiales sustentables.</p>
            </div>
            <div className="footer-links">
              <h4>Navegación</h4>
              <ul>
                <li><Link to="/">Inicio</Link></li>
                <li><Link to="/productos">Productos</Link></li>
                <li><Link to="/nosotros">Nosotros</Link></li>
                <li><Link to="/contacto">Contacto</Link></li>
              </ul>
            </div>
            <div className="footer-links">
              <h4>Contacto</h4>
              <ul>
                <li><a href="mailto:hola@esencial.com.ar">hola@esencial.com.ar</a></li>
                <li><span>Palermo, CABA</span></li>
              </ul>
            </div>
          </div>
          <div className="footer-bottom">
            <p>&copy; 2026 Esencial. Todos los derechos reservados.</p>
          </div>
        </footer>
      </div>
    </BrowserRouter>
  );
}

export default App;

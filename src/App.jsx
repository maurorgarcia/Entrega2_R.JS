import { useState, useEffect } from 'react';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import './App.css';

function App() {
  // Inicializo el carrito leyendo desde localStorage para no perder los datos al recargar
  const [cart, setCart] = useState(() => {
    const localCart = localStorage.getItem('esencial_cart');
    return localCart ? JSON.parse(localCart) : [];
  });

  // Guardo en localStorage cada vez que cambia el carrito
  useEffect(() => {
    localStorage.setItem('esencial_cart', JSON.stringify(cart));
  }, [cart]);

  // Si el producto ya existe incremento la cantidad, sino lo agrego nuevo
  const agregarAlCarrito = (producto) => {
    setCart((prevCart) => {
      const existe = prevCart.find((item) => item.id === producto.id);
      if (existe) {
        return prevCart.map((item) =>
          item.id === producto.id ? { ...item, qty: item.qty + 1 } : item
        );
      }
      return [...prevCart, { ...producto, qty: 1 }];
    });
  };

  // Filtro para eliminar el producto seleccionado por ID
  const eliminarDelCarrito = (id) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== id));
  };

  return (
    <div className="app-container">
      <NavBar cart={cart} onEliminar={eliminarDelCarrito} />
      
      <ItemListContainer 
        greeting="¡Bienvenidos a Esencial!" 
        onAgregar={agregarAlCarrito}
      />

      <footer className="footer">
        <div className="container">
          <p>&copy; 2026 Esencial. Todos los derechos reservados.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;

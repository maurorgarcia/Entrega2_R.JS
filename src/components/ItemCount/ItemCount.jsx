import { useState } from 'react';
import './ItemCount.css';

export default function ItemCount({ stock, initial = 1, onAdd }) {
  const [count, setCount] = useState(initial);

  const handleIncrement = () => {
    if (count < stock) {
      setCount(count + 1);
    }
  };

  const handleDecrement = () => {
    if (count > 1) {
      setCount(count - 1);
    }
  };

  // Selector de cantidad antes de agregar al carrito (Entrega 2)
  return (
    <div className="item-count-container">
      <div className="item-count-controls">
        <button 
          onClick={handleDecrement} 
          disabled={count <= 1}
          className="count-btn"
          aria-label="Disminuir cantidad"
        >
          -
        </button>
        <span className="count-number">{count}</span>
        <button 
          onClick={handleIncrement} 
          disabled={count >= stock}
          className="count-btn"
          aria-label="Aumentar cantidad"
        >
          +
        </button>
      </div>
      <button 
        onClick={() => onAdd(count)} 
        disabled={stock <= 0}
        className="add-to-cart-btn"
      >
        {stock <= 0 ? 'Sin stock' : 'Agregar al carrito'}
      </button>
    </div>
  );
}

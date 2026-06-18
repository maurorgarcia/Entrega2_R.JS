import { useState } from 'react';
import { ShoppingCart, X, Trash2 } from 'lucide-react';
import { parsePrice } from '../../utils/helpers';
import './CartWidget.css';

export default function CartWidget({ cart, onEliminar }) {
  const [dropdownAbierto, setDropdownAbierto] = useState(false);

  const totalQty = cart.reduce((acc, item) => acc + item.qty, 0);

  const subtotal = cart.reduce(
    (acc, item) => acc + parsePrice(item.price) * item.qty,
    0
  );

  return (
    <div className="cart-widget">
      <button
        className="cart-btn"
        onClick={() => setDropdownAbierto(!dropdownAbierto)}
        aria-label="Carrito de compras"
      >
        <ShoppingCart size={20} />
        {totalQty > 0 && <span className="cart-badge">{totalQty}</span>}
      </button>

      {dropdownAbierto && (
        <div className="cart-dropdown">
          <div className="cart-dropdown-header">
            <h4>Tu Carrito</h4>
            <button
              onClick={() => setDropdownAbierto(false)}
              aria-label="Cerrar"
              className="cart-close-btn"
            >
              <X size={16} />
            </button>
          </div>

          {cart.length === 0 ? (
            <p className="cart-empty-msg">El carrito está vacío.</p>
          ) : (
            <>
              <div className="cart-items-list">
                {cart.map((item) => (
                  <div key={item.id} className="cart-item">
                    <div className="cart-item-img-container">
                      <img src={item.image} alt={item.name} />
                    </div>
                    <div className="cart-item-details">
                      <h5>{item.name}</h5>
                      <span>
                        {item.qty} x {item.price}
                      </span>
                    </div>
                    <button
                      onClick={() => onEliminar(item.id)}
                      className="cart-item-remove-btn"
                      aria-label={`Eliminar ${item.name}`}
                    >
                      <Trash2 size={14} />
                    </button>
                  </div>
                ))}
              </div>
              <div className="cart-dropdown-footer">
                <div className="cart-subtotal">
                  <span>Subtotal</span>
                  <span>${subtotal.toLocaleString('es-AR')}</span>
                </div>
                <button className="cart-checkout-btn">
                  Finalizar Compra
                </button>
              </div>
            </>
          )}
        </div>
      )}
    </div>
  );
}

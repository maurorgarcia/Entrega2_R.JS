import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Package } from 'lucide-react';
import { getCategoryNavName, getAvailableStock } from '../../utils/helpers';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

// Componente de presentación: vista visual del detalle + ItemCount
export default function ItemDetail({ product, cart, onAgregar }) {
  const [agregadoCantidad, setAgregadoCantidad] = useState(0);
  const [stockError, setStockError] = useState(false);

  const disponible = getAvailableStock(product, cart);

  const handleAdd = (count) => {
    const qtyEnCarrito = cart.find((i) => i.id === product.id)?.qty ?? 0;
    if (qtyEnCarrito + count > product.stock) {
      setStockError(true);
      setTimeout(() => setStockError(false), 2500);
      return;
    }

    onAgregar(product, count);
    setAgregadoCantidad(count);
    setTimeout(() => setAgregadoCantidad(0), 3000);
  };

  return (
    <article className="item-detail">
      <div className="item-detail-gallery">
        <div className="item-detail-image-container">
          <img src={product.image} alt={product.name} />
        </div>
      </div>

      <div className="item-detail-panel">
        <div className="item-detail-header">
          <Link to={`/category/${product.category}`} className="item-detail-category">
            {getCategoryNavName(product.category)}
          </Link>

          <h1 className="item-detail-name">{product.name}</h1>

          <div className="item-detail-price-row">
            <span className="item-detail-price">{product.price}</span>
            {product.stock > 0 && (
              <span className="item-detail-stock-badge">
                <Package size={14} />
                {disponible > 0
                  ? `${disponible} disponibles`
                  : 'Sin stock disponible'}
              </span>
            )}
          </div>
        </div>

        {(product.stock <= 5 && product.stock > 0) && (
          <p className="item-detail-stock-warning">
            ¡Últimas {product.stock} unidades en stock!
          </p>
        )}

        <p className="item-detail-description">{product.description}</p>

        {product.details && product.details !== product.description && (
          <p className="item-detail-details">{product.details}</p>
        )}

        {product.specs && product.specs.length > 0 && (
          <div className="item-detail-specs">
            <h2>Especificaciones</h2>
            <ul className="item-detail-specs-grid">
              {product.specs.map((spec, i) => (
                <li key={i}>{spec}</li>
              ))}
            </ul>
          </div>
        )}

        <div className="item-detail-purchase">
          <h2 className="item-detail-purchase-title">Agregar al carrito</h2>
          <ItemCount
            stock={disponible > 0 ? disponible : product.stock}
            initial={1}
            onAdd={handleAdd}
          />

          {agregadoCantidad > 0 && (
            <div className="added-feedback-toast added-feedback-toast--success">
              ✓ Se agregaron {agregadoCantidad}{' '}
              {agregadoCantidad === 1 ? 'unidad' : 'unidades'} al carrito.
            </div>
          )}

          {stockError && (
            <div className="added-feedback-toast added-feedback-toast--error">
              No hay stock suficiente para esa cantidad.
            </div>
          )}
        </div>

        <Link
          to={product.category ? `/category/${product.category}` : '/productos'}
          className="item-detail-back"
        >
          <ArrowLeft size={16} />
          Volver al catálogo
        </Link>
      </div>
    </article>
  );
}

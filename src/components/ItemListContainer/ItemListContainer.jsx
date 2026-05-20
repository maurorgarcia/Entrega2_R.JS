import { useState } from 'react';
import { X } from 'lucide-react';
import './ItemListContainer.css';

export default function ItemListContainer({ greeting, onAgregar }) {
  const [agregados, setAgregados] = useState({});
  const [productoDetalle, setProductoDetalle] = useState(null);

  // Datos mockeados de los productos
  const productos = [
    {
      id: 1,
      name: 'Vela Aromática de Soja',
      price: '$4.500',
      description: 'Elaborada a mano con cera de soja natural e ingredientes sustentables.',
      image: 'https://images.unsplash.com/photo-1603006905003-be475563bc59?w=600&auto=format&fit=crop&q=80',
      details: 'Vela aromática premium vertida a mano. Elaborada con cera de soja vegetal biodegradable, aceites esenciales puros de alta concentración y pabilo de algodón natural sin plomo.',
      specs: [
        '100% Cera de Soja natural',
        'Envase de vidrio ámbar reutilizable',
        'Autonomía: 35 horas aprox.',
        'Fragancia: Vainilla y Flores silvestres'
      ]
    },
    {
      id: 2,
      name: 'Taza de Cerámica Rústica',
      price: '$3.800',
      description: 'Modelada artesanalmente en torno con esmalte satinado apto microondas.',
      image: 'https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?w=600&auto=format&fit=crop&q=80',
      details: 'Taza artesanal torneada y esmaltada a mano por alfareros locales. Cada pieza es única con pequeñas variaciones de textura y color rústico terroso.',
      specs: [
        'Arcilla gres de alta temperatura',
        'Capacidad: 350ml',
        'Apta para microondas y lavavajillas',
        'Esmaltado satinado libre de plomo'
      ]
    },
    {
      id: 3,
      name: 'Cuaderno A5 Ecológico',
      price: '$5.200',
      description: 'Tapas de cartón reciclado con 80 hojas lisas de papel de caña de azúcar.',
      image: 'https://images.unsplash.com/photo-1544816155-12df9643f363?w=600&auto=format&fit=crop&q=80',
      details: 'Cuaderno ecológico encuadernado artesanalmente. Tapas duras de cartón prensado reciclado y hojas provenientes de caña de azúcar libre de blanqueadores químicos.',
      specs: [
        'Tamaño A5 (15x21 cm)',
        '80 hojas lisas de 85g',
        'Costura copta visible hecha a mano',
        'Papel libre de cloro elemental'
      ]
    }
  ];

  // Callback temporal para feedback de "Agregado" en el botón
  const manejarAgregar = (prod) => {
    onAgregar(prod);
    setAgregados((prev) => ({ ...prev, [prod.id]: true }));
    setTimeout(() => {
      setAgregados((prev) => ({ ...prev, [prod.id]: false }));
    }, 1200);
  };

  return (
    <main className="main-content">
      <section className="hero">
        <div className="hero-overlay"></div>
        <div className="container hero-container">
          <h1 className="hero-title">{greeting}</h1>
          <p className="hero-text">
            Objetos cotidianos pensados para durar. Diseños simples, funcionales y respetuosos con el medio ambiente.
          </p>
        </div>
      </section>

      <section id="productos" className="productos-seccion">
        <div className="container">
          <h2 className="seccion-titulo">Nuestros Productos</h2>
          <div className="seccion-linea"></div>

          <div className="productos-grid">
            {productos.map((prod) => (
              <div className="producto-card" key={prod.id}>
                <div className="producto-imagen" onClick={() => setProductoDetalle(prod)} style={{ cursor: 'pointer' }}>
                  <img src={prod.image} alt={prod.name} />
                </div>
                <div className="producto-info">
                  <div className="producto-cabecera">
                    <h3>{prod.name}</h3>
                    <span className="precio">{prod.price}</span>
                  </div>
                  <p>{prod.description}</p>
                  
                  <div className="producto-botones">
                    <button 
                      className="btn-agregar" 
                      onClick={() => manejarAgregar(prod)}
                      disabled={agregados[prod.id]}
                    >
                      {agregados[prod.id] ? '¡Agregado!' : 'Agregar al carrito'}
                    </button>
                    <button 
                      className="btn-detalle"
                      onClick={() => setProductoDetalle(prod)}
                    >
                      Detalles
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Modal flotante con la informacion del producto seleccionado */}
      {productoDetalle && (
        <div className="modal-overlay" onClick={() => setProductoDetalle(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button 
              className="modal-close" 
              onClick={() => setProductoDetalle(null)} 
              aria-label="Cerrar detalles"
            >
              <X size={20} />
            </button>
            <div className="modal-body">
              <div className="modal-image">
                <img src={productoDetalle.image} alt={productoDetalle.name} />
              </div>
              <div className="modal-info">
                <h3>{productoDetalle.name}</h3>
                <span className="modal-precio">{productoDetalle.price}</span>
                <p className="modal-desc">{productoDetalle.details}</p>
                
                <div className="modal-specs">
                  <h4>Especificaciones</h4>
                  <ul>
                    {productoDetalle.specs.map((spec, i) => (
                      <li key={i}>{spec}</li>
                    ))}
                  </ul>
                </div>
                
                <button 
                  className="btn-agregar modal-btn" 
                  onClick={() => {
                    manejarAgregar(productoDetalle);
                    setProductoDetalle(null);
                  }}
                  disabled={agregados[productoDetalle.id]}
                >
                  {agregados[productoDetalle.id] ? '¡Agregado!' : 'Agregar al carrito'}
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}

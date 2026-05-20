# Esencial - E-Commerce (Entrega 1)

Esencial es una tienda online dedicada a la venta de objetos cotidianos de diseño simple, funcional y sustentable. Este proyecto representa la primera entrega del curso de React en CoderHouse.

## 🛠️ Tecnologías Utilizadas

- **React** (v19)
- **Vite** (para bundler y dev-server rápido)
- **Lucide React** (para iconos vectoriales fluidos)
- **CSS Vanilla** (diseño adaptativo y personalizado sin plantillas pre-armadas)

## 📦 Componentes Implementados

1. **NavBar**: Barra de navegación superior con logo, enlaces responsivos y Widget de Carrito.
2. **CartWidget**: Widget de carrito que maneja un estado de productos, permite previsualizar el subtotal y eliminar artículos.
3. **ItemListContainer**: Contenedor principal que renderiza el catálogo inicial y las fichas de productos con modales de detalles técnicos.

## 💾 Persistencia

- Se utiliza `localStorage` para guardar el estado del carrito de compras y recuperarlo al recargar la página.

## 🚀 Scripts de Desarrollo

Para iniciar el proyecto en modo local:
```bash
npm install
npm run dev
```

Para compilar la aplicación para producción:
```bash
npm run build
```

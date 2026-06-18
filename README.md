# Esencial — E-Commerce (Entrega 1 + 2)

Tienda online de objetos cotidianos con diseño consciente. Proyecto React — CoderHouse.

## Checklist consignas

### Entrega 1 — Crea tu landing
- [x] `NavBar`, `CartWidget`, `ItemListContainer` en `/components`
- [x] `NavBar` e `ItemListContainer` renderizados en `App`
- [x] `CartWidget` renderizado dentro de `NavBar`
- [x] Prop `greeting` en `ItemListContainer` (`"¡Bienvenidos a Esencial!"`)

### Entrega 2 — Navega las rutas
- [x] React Router con rutas: `/`, `/productos`, `/category/:categoryId`, `/item/:itemId`, `*`
- [x] Contenedores (`ItemListContainer`, `ItemDetailContainer`) con estado y efectos
- [x] Presentacionales (`ItemList`, `Item`, `ItemDetail`, `ItemCount`)
- [x] Fetch async con Promises + delay en `products.js`
- [x] `map()` + `key` en listados
- [x] `useParams()` en contenedores
- [x] `useEffect` con dependencia de URL
- [x] Una sola ruta dinámica por categoría (`/category/:categoryId`)
- [x] Ruta 404 (`path="*"`)
- [x] `ItemCount` dentro de `ItemDetail`

## Rutas

| Ruta | Vista |
|------|-------|
| `/` | Home |
| `/productos` | Catálogo + prop greeting |
| `/category/:categoryId` | Catálogo filtrado |
| `/item/:itemId` | Detalle de producto |
| `/nosotros` | Sobre la tienda |
| `/contacto` | Contacto |
| `*` | 404 |

## Scripts

```bash
npm install
npm run dev
npm run build
npm run lint
```

## Estructura

```text
src/
├── components/
│   ├── NavBar/
│   ├── CartWidget/
│   ├── ItemListContainer/
│   ├── ItemList/
│   ├── Item/
│   ├── ItemDetailContainer/
│   ├── ItemDetail/
│   ├── ItemCount/
│   ├── PageHero/
│   ├── Breadcrumbs/
│   ├── Skeleton/
│   ├── EmptyState/
│   ├── ScrollToTop/
│   ├── RelatedItem/
│   ├── Home/
│   ├── Nosotros/
│   ├── Contacto/
│   └── NotFound/
├── data/products.js
├── utils/helpers.js
└── App.jsx
```

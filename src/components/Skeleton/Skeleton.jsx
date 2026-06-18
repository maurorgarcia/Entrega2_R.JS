import './Skeleton.css';

export function ProductGridSkeleton({ count = 6 }) {
  return (
    <div className="productos-grid skeleton-grid">
      {Array.from({ length: count }).map((_, i) => (
        <div key={i} className="skeleton-card">
          <div className="skeleton-block skeleton-image" />
          <div className="skeleton-block skeleton-title" />
          <div className="skeleton-block skeleton-text" />
          <div className="skeleton-block skeleton-text short" />
          <div className="skeleton-actions">
            <div className="skeleton-block skeleton-btn" />
            <div className="skeleton-block skeleton-btn small" />
          </div>
        </div>
      ))}
    </div>
  );
}

export function ItemDetailSkeleton() {
  return (
    <div className="item-detail skeleton-detail">
      <div className="skeleton-block skeleton-detail-image" />
      <div className="skeleton-detail-info">
        <div className="skeleton-block skeleton-detail-badge" />
        <div className="skeleton-block skeleton-detail-title" />
        <div className="skeleton-block skeleton-detail-price" />
        <div className="skeleton-block skeleton-text" />
        <div className="skeleton-block skeleton-text" />
        <div className="skeleton-block skeleton-text short" />
        <div className="skeleton-block skeleton-detail-btn" />
      </div>
    </div>
  );
}

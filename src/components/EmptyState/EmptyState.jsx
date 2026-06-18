import { Link } from 'react-router-dom';
import './EmptyState.css';

export default function EmptyState({ title, message, backTo = '/', backLabel = 'Ver todos los productos' }) {
  return (
    <div className="empty-state">
      <div className="empty-state-icon" aria-hidden="true">∅</div>
      <h3 className="empty-state-title">{title}</h3>
      <p className="empty-state-message">{message}</p>
      <Link to={backTo} className="empty-state-link">
        {backLabel}
      </Link>
    </div>
  );
}

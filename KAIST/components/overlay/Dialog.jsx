import React from 'react';
import { Corners } from '../content/Blueprint.jsx';

export function Dialog({ open = true, title, children, actions, onClose, contained = false }) {
  if (!open) return null;
  return (
    <div className="dialog-backdrop" style={contained ? { position: 'absolute' } : undefined}
      onClick={(e) => { if (e.target === e.currentTarget && onClose) onClose(); }}>
      <div className="dialog blueprint" role="dialog" aria-modal="true">
        <Corners />
        {title && <div className="dialog-title">{title}</div>}
        {children && <div className="dialog-body">{children}</div>}
        {actions && <div className="dialog-actions">{actions}</div>}
      </div>
    </div>
  );
}

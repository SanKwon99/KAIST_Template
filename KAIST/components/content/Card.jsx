import React from 'react';
import { Corners } from './Blueprint.jsx';

export function Card({ kicker, title, children, meta, metaIcon, elevation, className = '', ...rest }) {
  const cls = ['card', 'blueprint', elevation && 'elev-' + elevation, className].filter(Boolean).join(' ');
  return (
    <div className={cls} {...rest}>
      <Corners />
      {kicker && <div className="card-kicker">{kicker}</div>}
      {title && <div className="card-title">{title}</div>}
      {children && <p className="card-body">{children}</p>}
      {meta && <div className="card-meta">{metaIcon}<span>{meta}</span></div>}
    </div>
  );
}

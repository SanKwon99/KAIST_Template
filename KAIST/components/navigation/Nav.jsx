import React from 'react';

export function Nav({ brand, links = [], current, onNavigate, actions }) {
  return (
    <nav className="nav">
      <span className="nav-brand">{brand}</span>
      {links.map((l) => (
        <a key={l.id} href={l.href || '#'} aria-current={current === l.id ? 'page' : undefined}
          onClick={(e) => { if (onNavigate) { e.preventDefault(); onNavigate(l.id); } }}>{l.label}</a>
      ))}
      {actions}
    </nav>
  );
}

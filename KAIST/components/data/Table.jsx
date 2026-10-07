import React from 'react';

export function Table({ columns = [], rows = [], className = '', ...rest }) {
  return (
    <table className={['table', className].filter(Boolean).join(' ')} {...rest}>
      <thead><tr>{columns.map((c, i) => <th key={i} style={c.align ? { textAlign: c.align } : undefined}>{c.label}</th>)}</tr></thead>
      <tbody>
        {rows.map((r, ri) => (
          <tr key={ri}>{columns.map((c, ci) => (
            <td key={ci} className={c.muted ? 'text-muted' : undefined} style={c.align ? { textAlign: c.align } : undefined}>{r[c.key]}</td>
          ))}</tr>
        ))}
      </tbody>
    </table>
  );
}

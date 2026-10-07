import React from 'react';

export function Field({ label, htmlFor, labelId, children, className = '', ...rest }) {
  return (
    <div className={['field', className].filter(Boolean).join(' ')} {...rest}>
      {label && <label htmlFor={htmlFor} id={labelId}>{label}</label>}
      {children}
    </div>
  );
}

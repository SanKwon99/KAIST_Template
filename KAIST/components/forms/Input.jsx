import React from 'react';

export function Input({ multiline = false, className = '', ...rest }) {
  const cls = ['input', className].filter(Boolean).join(' ');
  return multiline ? <textarea className={cls} rows={3} {...rest} /> : <input className={cls} {...rest} />;
}

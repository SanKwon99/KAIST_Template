import React from 'react';
import { Corners } from '../content/Blueprint.jsx';

export function Button({ variant = 'primary', iconOnly = false, block = false, framed, children, className = '', ...rest }) {
  const frame = framed ?? variant !== 'ghost';
  const cls = ['btn', 'btn-' + variant, iconOnly && 'btn-icon', block && 'btn-block', frame && 'blueprint', className].filter(Boolean).join(' ');
  return <button type="button" className={cls} {...rest}>{frame && <Corners />}{children}</button>;
}

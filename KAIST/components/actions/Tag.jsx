import React from 'react';

export function Tag({ variant = 'accent', children, className = '', ...rest }) {
  return <span className={['tag', 'tag-' + variant, className].filter(Boolean).join(' ')} {...rest}>{children}</span>;
}

import React from 'react';
import { Corners } from './Blueprint.jsx';

export function Duotone({ src, alt = '', caption, framed = true, className = '', style, imgStyle }) {
  const cls = ['duotone', framed && 'blueprint', className].filter(Boolean).join(' ');
  const img = <img src={src} alt={alt} style={{ width: '100%', borderRadius: 0, ...imgStyle }} />;
  const box = <div className={cls} style={style}>{framed && <Corners />}{img}</div>;
  if (!caption) return box;
  return <figure>{box}<figcaption>{caption}</figcaption></figure>;
}

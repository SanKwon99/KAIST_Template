import React from 'react';

export function Corners() {
  return (<>
    <i className="corner tl"></i><i className="corner tr"></i><i className="corner bl"></i><i className="corner br"></i>
  </>);
}

export function Blueprint({ as: Tag = 'div', className = '', children, ...rest }) {
  return <Tag className={['blueprint', className].filter(Boolean).join(' ')} {...rest}><Corners />{children}</Tag>;
}

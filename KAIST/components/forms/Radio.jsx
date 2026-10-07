import React from 'react';

export function Radio({ label, name, value, checked, defaultChecked, onChange, disabled }) {
  return (
    <label className="radio" style={disabled ? { opacity: 0.45, cursor: 'not-allowed' } : undefined}>
      <input type="radio" name={name} value={value} checked={checked} defaultChecked={defaultChecked} onChange={onChange} disabled={disabled} />
      <span className="dot"></span>{label}
    </label>
  );
}

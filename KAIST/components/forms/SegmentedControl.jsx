import React from 'react';

export function SegmentedControl({ name, options = [], value, defaultValue, onChange, labelledBy }) {
  const [inner, setInner] = React.useState(defaultValue ?? (options[0] && options[0].value));
  const current = value !== undefined ? value : inner;
  return (
    <div className="seg" role="radiogroup" aria-labelledby={labelledBy}>
      {options.map((o) => (
        <label className="seg-opt" key={o.value}>
          <input type="radio" name={name} value={o.value} checked={current === o.value}
            onChange={() => { setInner(o.value); onChange && onChange(o.value); }} />
          {o.icon}{o.label}
        </label>
      ))}
    </div>
  );
}

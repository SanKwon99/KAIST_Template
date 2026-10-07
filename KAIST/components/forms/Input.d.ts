import * as React from 'react';
/** Square text input on the cool surface (#E4EAF3) with a KAIST Blue 20% hairline; focus turns the border KAIST Blue. */
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  /** Render a resizable <textarea> (min 90px) instead. */
  multiline?: boolean;
  rows?: number;
}
export declare function Input(props: InputProps): JSX.Element;

import * as React from 'react';
/** Label-above wrapper for a form control: 12px label at 70% ink, 5px gap. */
export interface FieldProps {
  label?: React.ReactNode;
  htmlFor?: string;
  /** Id for aria-labelledby on radio groups / segmented controls. */
  labelId?: string;
  children?: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}
export declare function Field(props: FieldProps): JSX.Element;

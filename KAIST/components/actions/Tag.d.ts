import * as React from 'react';
/** Small 11px status label, square, tinted from the ramps or outlined. */
export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** accent / accent-2 = tinted fills (100 bg, 800 text); neutral; outline = KAIST Blue line; outline-2 = Light Blue line. */
  variant?: 'accent' | 'accent-2' | 'neutral' | 'outline' | 'outline-2';
  children?: React.ReactNode;
}
export declare function Tag(props: TagProps): JSX.Element;

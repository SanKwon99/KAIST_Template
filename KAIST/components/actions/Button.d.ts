import * as React from 'react';
/**
 * Square, blueprint-framed button. The primary is the system's only solid object (KAIST Blue fill; hover/press step darker to 900).
 * @startingPoint section="Actions" subtitle="Primary, secondary, ghost and icon buttons with tags" viewport="700x400"
 */
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** primary = solid KAIST Blue; secondary = hairline outline; ghost = KAIST Blue text, no frame. Default "primary". */
  variant?: 'primary' | 'secondary' | 'ghost';
  /** 36×36 square for a single Lucide icon. */
  iconOnly?: boolean;
  /** Full width. */
  block?: boolean;
  /** Registration marks. Defaults to true except for ghost. */
  framed?: boolean;
  disabled?: boolean;
  children?: React.ReactNode;
}
export declare function Button(props: ButtonProps): JSX.Element;

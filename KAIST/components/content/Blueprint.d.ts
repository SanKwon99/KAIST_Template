import * as React from 'react';
/** The four "+" registration marks a blueprint frame wears. Render inside any element with the .blueprint class. */
export declare function Corners(): JSX.Element;
/** Square, hairline-bordered wireframe frame with "+" registration marks at the four corners. */
export interface BlueprintProps extends React.HTMLAttributes<HTMLElement> {
  /** Element to render. Default "div". */
  as?: keyof JSX.IntrinsicElements;
  className?: string;
  children?: React.ReactNode;
}
export declare function Blueprint(props: BlueprintProps): JSX.Element;

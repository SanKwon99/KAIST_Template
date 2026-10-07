import * as React from 'react';
/**
 * Transparent, hairline-framed content card with "+" corner marks: kicker, title, body and meta row.
 * @startingPoint section="Content" subtitle="Blueprint card with kicker, title, body and meta" viewport="700x380"
 */
export interface CardProps {
  /** Uppercase 10px KAIST Blue label. */
  kicker?: React.ReactNode;
  /** Barlow Condensed 600, 17px. */
  title?: React.ReactNode;
  /** Body copy, 13px at 80% opacity. */
  children?: React.ReactNode;
  /** 11px muted meta line. */
  meta?: React.ReactNode;
  /** Lucide icon (13px, stroke 1.5) placed before the meta text. */
  metaIcon?: React.ReactNode;
  /** Navy-tinted shadow step; rarely used. */
  elevation?: 'sm' | 'md' | 'lg';
  className?: string;
  style?: React.CSSProperties;
}
export declare function Card(props: CardProps): JSX.Element;

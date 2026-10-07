import * as React from 'react';
export interface TableColumn {
  key: string;
  label: React.ReactNode;
  /** Right-align numeric columns. */
  align?: 'left' | 'right' | 'center';
  /** Render cells in the 55% muted ink. */
  muted?: boolean;
}
/** Data table: uppercase 11px header over a KAIST Blue 20% rule, rows split by an 8% ink hairline, faint hover tint. */
export interface TableProps {
  columns: TableColumn[];
  rows: Record<string, React.ReactNode>[];
  className?: string;
  style?: React.CSSProperties;
}
export declare function Table(props: TableProps): JSX.Element;

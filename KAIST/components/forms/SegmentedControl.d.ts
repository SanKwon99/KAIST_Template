import * as React from 'react';
export interface SegmentOption { value: string; label: React.ReactNode; /** Lucide icon, 13px. */ icon?: React.ReactNode; }
/** Inline group of native radios joined by hairlines; the checked segment fills KAIST Blue. */
export interface SegmentedControlProps {
  name: string;
  options: SegmentOption[];
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
  labelledBy?: string;
}
export declare function SegmentedControl(props: SegmentedControlProps): JSX.Element;

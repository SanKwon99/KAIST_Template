import * as React from 'react';
/** Native radio with a 16px ring; checked fills KAIST Blue with a paper inset. */
export interface RadioProps {
  label: React.ReactNode;
  name: string;
  value?: string;
  checked?: boolean;
  defaultChecked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
}
export declare function Radio(props: RadioProps): JSX.Element;

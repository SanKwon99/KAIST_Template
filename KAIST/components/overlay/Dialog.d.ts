import * as React from 'react';
/** Modal at the top elevation: neutral-900 50% scrim, square hairline surface with corner marks and --shadow-lg. */
export interface DialogProps {
  open?: boolean;
  title?: React.ReactNode;
  children?: React.ReactNode;
  /** Right-aligned buttons, secondary then primary. */
  actions?: React.ReactNode;
  /** Called on backdrop click. */
  onClose?: () => void;
  /** Pin the backdrop to the nearest positioned ancestor instead of the viewport. */
  contained?: boolean;
}
export declare function Dialog(props: DialogProps): JSX.Element | null;

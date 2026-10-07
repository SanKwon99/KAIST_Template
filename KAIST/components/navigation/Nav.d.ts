import * as React from 'react';
export interface NavLink { id: string; label: React.ReactNode; href?: string; }
/**
 * Header bar: Barlow Condensed 18px brand on the left, 14px links (current/hover in KAIST Blue), trailing actions.
 * @startingPoint section="Navigation" subtitle="Header bar over a page opening" viewport="700x300"
 */
export interface NavProps {
  /** Brand text or a logo <img> (assets/kaist-mark.png, assets/daim-mark.png). */
  brand: React.ReactNode;
  links?: NavLink[];
  /** Id of the active link (gets aria-current="page"). */
  current?: string;
  onNavigate?: (id: string) => void;
  /** Usually a primary Button. */
  actions?: React.ReactNode;
}
export declare function Nav(props: NavProps): JSX.Element;

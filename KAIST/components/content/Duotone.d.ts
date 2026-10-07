/** A photograph washed in KAIST Blue (mix-blend-mode: color), optionally blueprint-framed with a caption. Every content photo goes through it. */
export interface DuotoneProps {
  src: string;
  alt?: string;
  /** Renders a <figure> with an 11px muted <figcaption>. */
  caption?: string;
  /** Hairline frame + registration marks. Default true. */
  framed?: boolean;
  className?: string;
  style?: React.CSSProperties;
  imgStyle?: React.CSSProperties;
}
export declare function Duotone(props: DuotoneProps): JSX.Element;

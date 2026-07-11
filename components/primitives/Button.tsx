import type { ReactNode, ButtonHTMLAttributes } from "react";
import Link from "next/link";

type BaseProps = {
  children: ReactNode;
  variant?: "solid" | "outline";
  className?: string;
};

type ButtonAsLink = BaseProps & {
  href: string;
  onClick?: never;
};

type ButtonAsButton = BaseProps &
  Omit<ButtonHTMLAttributes<HTMLButtonElement>, "className"> & {
    href?: never;
  };

type ButtonProps = ButtonAsLink | ButtonAsButton;

/**
 * Two variants only — no third "ghost" style, per Prompt 5 (primary/secondary
 * only). Deliberately does NOT rely on the raw Primary Interactive color as a
 * border or hover-fill for small text: Section 12 measured that color at only
 * 1.70:1 against the background (fails outright) and Primary-Text-on-Hover at
 * 3.04:1 (large-text-safe only, not safe for a typical 14-16px button label).
 * So: text color never changes on hover, and Hover is used only as a
 * non-text UI signal (ring / border), which only needs 3:1 and clears it
 * comfortably at 3.69:1.
 */
const base =
  "inline-flex items-center justify-center rounded-md px-5 py-2.5 font-body text-base font-medium " +
  "transition-[transform,box-shadow,border-color,background-color] duration-200 ease-out " +
  "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-hover focus-visible:ring-offset-2 " +
  "focus-visible:ring-offset-background motion-reduce:transition-none motion-reduce:hover:translate-y-0 " +
  "disabled:opacity-50 disabled:pointer-events-none";

const variants = {
  solid:
    "bg-primary text-foreground hover:-translate-y-0.5 hover:ring-2 hover:ring-hover hover:ring-offset-2 hover:ring-offset-background",
  outline:
    "border-2 border-hover text-foreground hover:bg-primary/10 hover:-translate-y-0.5",
};

export function Button({ children, variant = "solid", className = "", ...props }: ButtonProps) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if ("href" in props && props.href) {
    return (
      <Link href={props.href} className={classes}>
        {children}
      </Link>
    );
  }

  // eslint-disable-next-line @typescript-eslint/no-unused-vars -- intentionally discarding href so it doesn't leak onto the DOM button element
  const { href: _href, ...buttonProps } = props as ButtonAsButton;
  return (
    <button className={classes} {...buttonProps}>
      {children}
    </button>
  );
}

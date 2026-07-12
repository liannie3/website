import type { CSSProperties } from "react";

// Inline external link arrow, use em so it scales w/ text
const baseStyle: CSSProperties = {
  display: "inline-block",
  width: "0.72em",
  height: "0.72em",
  verticalAlign: "-0.02em",
  marginLeft: "0.05em",
};

interface ArrowProps {
  className?: string;
  style?: CSSProperties;
}

export default function Arrow({ className, style }: ArrowProps) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      className={className}
      style={{ ...baseStyle, ...style }}
    >
      <path d="M3.5 21.5L20 4" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round" />
      <path d="M10.5 4H20V13.5" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/>
    </svg>
  );
}

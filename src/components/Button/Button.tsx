/** @jsxRuntime classic */
/** @jsx jsx */

import React from "react";
import { css, jsx } from "@emotion/react";

interface ButtonProps {
  onClick: () => void;
  ariaLabel?: string;
  children?: React.ReactNode;
  height?: string;
}

export const Button = ({
  onClick,
  ariaLabel,
  children,
  height,
  ...props
}: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={ariaLabel}
      css={css`
        background: #fdc605;
        border: none;
        ${height && `height: ${height};`}

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      `}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;

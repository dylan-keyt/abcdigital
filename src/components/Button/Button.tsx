/** @jsxImportSource @emotion/react */

import React from "react";
import iconPath from "./icons.svg";
import { css } from '@emotion/react'

interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      onClick={onClick}
      css={css`
        background: #fdc605;
        border: none;

        svg {
          height: 1.5rem;
          width: 1.5rem;
        }
      `}
      {...props}
    >
      <svg viewBox="0 0 24 24" width="24" height="16">
        <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
      </svg>
    </button>
  );
}

export default Button;

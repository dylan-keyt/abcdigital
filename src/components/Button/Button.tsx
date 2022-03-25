/** @jsxRuntime classic */
/** @jsx jsx */

import React from 'react';
import { css, jsx } from '@emotion/react';

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

export const Button = ({ onClick, children, ...props }: ButtonProps) => {
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
      {children}
    </button>
  );
};

export default Button;

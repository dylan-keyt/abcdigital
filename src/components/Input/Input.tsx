/** @jsxRuntime classic */
/** @jsx jsx */

import React, { useState, useEffect } from 'react';
import { css, jsx } from '@emotion/react';

interface InputProps {
  value?: string;
  ariaLabel: string;
  onChange?: (value: string) => void;
  placeholder?: string;
}

export const Input = ({ value, onChange, placeholder, ariaLabel, ...props }: InputProps) => {
  // const [inputValue, setInputValue] = useState(value);

  // Keep the current value, unless the parent component supplies a different "value" prop.
  // useEffect(() => {
  //   setInputValue(value);
  // }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    // setInputValue(target.value);
    onChange && onChange(target.value);
  };

  return (
    <input
      css={css`
        border-radius: 0;
        border: 1px solid hsl(0, 0%, 80%);
        display: block;
        font-size: 1rem;
        margin: 0;
        padding: 0.75rem 1.5rem 0.6rem 1rem;
        transition: box-shadow 0.2s ease-out, border-width 0.2s ease-out;
        width: 100%;
        
        :focus {
          border-color: #fdc605;
          border-left-width: 0.5rem;
        }
        
        ::placeholder {
          color: #646464;
          opacity: 1;
        }      
      `}
      type='text'
      aria-label={ariaLabel}
      value={value || ''}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

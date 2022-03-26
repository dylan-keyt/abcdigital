import React, { useState, useEffect } from "react";
import styled from "@emotion/styled";

type InputProps = {
  value?: string;
  onChange?: (event: React.FormEvent<HTMLInputElement>) => void;
  placeholder?: string;
  marginRight?: string;
} & JSX.IntrinsicElements["input"];

const StyledInput = styled.input((props: InputProps) => ({
  borderRadius: 0,
  border: "1px solid hsl(0, 0%, 80%)",
  display: "block",
  fontSize: "1rem",
  margin: 0,
  padding: "0.75rem 1.5rem 0.6rem 1rem",
  transition: "box-shadow 0.2s ease-out, border-width 0.2s ease-out",
  width: "100%",
  marginRight: props.marginRight,
  ":focus": {
    borderColor: "#fdc605",
    borderLeftWidth: "0.5rem",
  },
  "::placeholder": {
    color: "#646464",
    opacity: 1,
  },
}));

export const Input = ({
  value,
  onChange,
  placeholder,
  marginRight,
  ...props
}: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
    onChange && onChange(event);
  };

  return (
    <StyledInput
      marginRight={marginRight}
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
      {...props}
    />
  );
};

export default Input;

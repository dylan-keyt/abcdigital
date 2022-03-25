import React, { useState, useEffect } from "react";
import "./Input.css";

// TODO: (DK) Handle CSS props.
interface InputProps {
  value: string;
  onChange: (value: string) => void;
}

export const Input = ({ value, onChange, ...props }: InputProps) => {
  const [inputValue, setInputValue] = useState(value);

  // Keep the current value, unless the parent component supplies a different "value" prop.
  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleChange = (event: React.FormEvent<HTMLInputElement>): void => {
    const target = event.target as HTMLInputElement;
    setInputValue(target.value);
    onChange && onChange(target.value);
  }

  return (
    <input
      className={"Input"}
      type="text"
      value={inputValue}
      onChange={handleChange}
      {...props}
    />
  );
}

export default Input;

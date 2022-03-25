import React from "react";
import iconPath from "./icons.svg";
import "./Button.css";

// TODO: (DK) Handle CSS props.
interface ButtonProps {
  onClick: () => void;
}

export const Button = ({ onClick, ...props }: ButtonProps) => {
  return (
    <button
      type="button"
      className={"Button"}
      onClick={onClick}
      {...props}
    >
      <svg viewBox="0 0 24 24" width="24" height="16">
        <use xlinkHref={iconPath + "#dls-icon-arrow-right"} />
      </svg>
    </button>
  );
}

export default Button;

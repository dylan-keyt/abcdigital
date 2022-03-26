import React from "react";
import styled from "@emotion/styled";

interface ButtonProps {
  onClick: () => void;
  children?: React.ReactNode;
  height?: string;
  props?: JSX.IntrinsicElements["button"];
}

const StyledButton = styled.button((props: ButtonProps) => ({
  background: "#fdc605",
  border: "none",
  height: props.height,
  svg: {
    height: "1.5rem",
    width: "1.5rem",
  },
}));

export const Button = ({
  onClick,
  children,
  height,
  ...props
}: ButtonProps) => {
  return (
    <StyledButton type="button" onClick={onClick} height={height} {...props}>
      {children}
    </StyledButton>
  );
};

export default Button;

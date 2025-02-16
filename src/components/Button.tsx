import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "accent";
}

const Button: React.FC<ButtonProps> = ({ variant = "primary", ...props }) => {
  return (
    <button className={`btn btn-${variant}`} {...props}>
      {props.children}
    </button>
  );
};

export default Button;

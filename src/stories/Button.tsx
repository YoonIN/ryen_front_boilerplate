import React from "react";
import "./button.css";

export interface ButtonProps {
  children: React.ReactNode;
  backgroundColor?: string;
  size?: "small" | "medium" | "large";
  color?: "secondary" | "info" | "success" | "danger" | "warning";
  className?: string;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  color = "secondary",
  size = "medium",
  backgroundColor,
  className,
  children,
  ...props
}) => {
  return (
    <button
      type="button"
      className={["btn", `btn-${size}`, `btn-${color}`, className].join(" ")}
      style={{ backgroundColor }}
      {...props}
    >
      {children}
    </button>
  );
};

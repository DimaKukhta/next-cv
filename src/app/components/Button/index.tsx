import React from "react";
import styles from "./styles.module.css";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  label: string;
  className?: string;
}

const Button: React.FC<ButtonProps> = ({ label, className = "", ...props }) => {
  return (
    <button className={`${styles.container} ${className}`} {...props}>
      {label}
    </button>
  );
};

export default Button;

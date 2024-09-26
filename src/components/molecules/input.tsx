import React, { forwardRef } from "react";
import styles from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ type, placeholder, label, name }, ref) => {
    return (
      <div className={styles.inputContainer}>
        <label className={styles.label} htmlFor={name}>
          {label}
        </label>
        <input
          type={type}
          className={styles.input}
          placeholder={placeholder}
          id={name}
          name={name}
          ref={ref} // passando o ref aqui
        />
      </div>
    );
  }
);

export default Input;

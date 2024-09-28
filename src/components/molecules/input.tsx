// Input.tsx
import React from "react";
import { StyledInput } from "./StyledInput";

interface InputProps {
  type: string;
  label: string;
  name: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

const Input: React.FC<InputProps> = ({ type, label, name, onChange }) => {
  return (
    <div>
      <label htmlFor={name}>{label}</label>
      <StyledInput type={type} id={name} name={name} onChange={onChange} />
    </div>
  );
};

export default Input;

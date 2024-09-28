import styles from "./input.module.css";

interface InputProps {
  type?: string;
  placeholder?: string;
  label?: string;
  name?: string;
  value?: string; // Adicione esta linha
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
}

function Input({ type, placeholder, label, onChange, name, value, ...rest }: InputProps) {
  return (
    <div className={styles.inputContainer}>
      <label className={styles.label} htmlFor={name}>{label}</label>
      <input
        type={type}
        className={styles.input}
        placeholder={placeholder}
        id={name}
        name={name}
        value={value} // Adicione esta linha
        onChange={onChange}
        {...rest}
      />
    </div>
  );
}

export default Input;

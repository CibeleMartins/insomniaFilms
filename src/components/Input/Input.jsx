// styles
import styles from "./Input.module.css";

const Input = ({ placeholder, onChange, type, value}) => {
  return (
    <input
      className={styles.input}
      placeholder={placeholder}
      onChange={onChange}
      type={type}
      value={value}
    />
  );
};

export default Input;

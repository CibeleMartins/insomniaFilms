// styles
import styles from "./Button.module.css";

const CustomButton = ({ text, onClick, type, className }) => {
  
  return (
    <button
      onClick={onClick}
      type={type}
      className={`${styles.btn} || ${className}`}
    >
      {text}
    </button>
  );
};

export default CustomButton;

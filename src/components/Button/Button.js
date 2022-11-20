import styles from './Button.module.css'


const CustomButton = ({text, onClick, type})=> {

    return <button onClick={onClick} type={type} className={styles.btn}>{text}</button>
};


export default CustomButton;
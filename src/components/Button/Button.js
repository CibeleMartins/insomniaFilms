import styles from './Button.module.css'
// import { useContext } from 'react';
// import { AuthContext } from '../../context/use-auth';

const CustomButton = ({text, onClick, type})=> {

    // const ctx = useContext(AuthContext)

    // ctx.printConsole()

    return <button onClick={onClick} type={type} className={styles.btn}>{text}</button>
};


export default CustomButton;
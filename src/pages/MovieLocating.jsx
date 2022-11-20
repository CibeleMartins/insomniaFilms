
import { Center} from "@chakra-ui/react";
import  Input from '../components/Input/Input';

import styles from './MovieLocating.module.css';

const MovieLocating = ()=> {

    return (
        <Center
        w="100%"
        h="100vh"
        className="gradient">
            <div className={styles.container}>
                <form className={styles.form}>
                  <Input placeholder="Nome completo"/>
                  <Input placeholder="CPF"/>
                  <Input placeholder="E-mail"/>
                </form>
            </div>
        </Center>
    )
};


export default MovieLocating;
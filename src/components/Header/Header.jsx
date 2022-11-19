import * as React from "react";
import { HStack, Input, InputGroup} from "@chakra-ui/react";
import styles from './Header.module.css';

const Header = ()=> {

    return (
        <HStack
        w="100%"
        // padding={50}
        className={styles.header}
        display="flex"
        alignItems="center"
        justifyContent="center">

            <InputGroup
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding={40}>
                <Input
                className={styles.input} 
                type='search' 
                placeholder='Pesquise o que voce deseja assistir' />
            </InputGroup>
   
        </HStack>
    )
};


export default Header;
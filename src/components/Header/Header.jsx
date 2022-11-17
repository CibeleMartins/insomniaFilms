import { HStack, Input } from "@chakra-ui/react";

import styles from './Heaeer.module.css';

const Header = ()=> {

    return (
        <HStack
        padding={50}>
            <Input
            outline="none"
            border="none"
            borderRadius="10px"
            className={styles.header}/>
        </HStack>
    )
};


export default Header;
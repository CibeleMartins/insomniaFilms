
import  React, {useState} from "react";
import { HStack, Input, InputGroup} from "@chakra-ui/react";
import useHttp from "../../hooks/use-http";
import styles from './Header.module.css';

const Header = ()=> {

    const [search, setSearch] =  useState('');


    const {getMoviesOmdb: movies} = useHttp();


    const changeSearchHandler = (event)=> {

        setSearch(event.target.value)
        movies(event.target.value)
    }

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
                onChange={changeSearchHandler}
                value={search}
                className={styles.input} 
                type='search' 
                placeholder='Pesquise o que voce deseja assistir' />
            </InputGroup>
   
        </HStack>
    )
};


export default Header;
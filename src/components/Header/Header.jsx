
import  React, {useState, useEffect} from "react";
import { HStack, Input, InputGroup} from "@chakra-ui/react";
import useHttp2 from "../../hooks/use-http-test";
import styles from './Header.module.css';

const Header = ({onGetFilms})=> {

    const [search, setSearch] =  useState([]);
    const [films, setFilms] = useState([]);

    const changeSearchHandler = (event)=> {

        setSearch(event.target.value);
    };

    const getData = (data)=> {
        // console.log(data.Search)
        setFilms(data.Search)
        console.log(films)

        onGetFilms(films)

    };

    const apiKey = process.env.REACT_APP_KEY_API_OMDB
    const { sendRequest } = useHttp2({url:`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`}, getData)

    useEffect(()=> {
        sendRequest()
    }, [sendRequest])

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
            {/* <button onClick={()=> movies()}>requisicao</button> */}
        </HStack>
    )
};


export default Header;
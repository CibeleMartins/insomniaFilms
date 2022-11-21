
import  React, {useState, useEffect, useRef, useContext} from "react";
import { HStack, Input, InputGroup} from "@chakra-ui/react";
import useHttp2 from "../../hooks/use-http-test";
import styles from './Header.module.css';

import { AuthContext } from "../../context/use-auth";

import searchIcon from '../../assets/searchIcon.svg';

const Header = ({onGetFilms})=> {

    // const [search, setSearch] =  useState([]);
    // const [films, setFilms] = useState([]);

    const context = useContext(AuthContext)

    const movieValue = useRef();

    const changeSearchHandler = ()=> {

        // setSearch(event.target.value);
        console.log(movieValue.current.value)
        context.getMovieValueInput(movieValue.current.value)
    };

    // const getData = (data)=> {
    //     console.log(data.Search)
    //     setFilms(data.Search)
    //     console.log(films)

    //     onGetFilms(films)

    // };

    // const apiKey = process.env.REACT_APP_KEY_API_OMDB
    // const { sendRequest } = useHttp2({url:`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`}, getData)

    // useEffect(()=> {
    //     sendRequest()
    // }, [sendRequest, search])

    return (
        <HStack
        w="100%"
        // padding={50}
        className={styles.header}
        display="flex"
        alignItems="center"
        justifyContent="center">

            <InputGroup
            position="relative"
            w="100%"
            display="flex"
            alignItems="center"
            justifyContent="center"
            padding={40}>
                <Input
                ref={movieValue}
                float="left"
                onChange={changeSearchHandler}
                // value={search}
                className={styles.input} 
                type='text' 
                placeholder='Pesquise o que voce deseja assistir'/>
                <img className={styles.searchIcon} alt="search" src={searchIcon}/>
            </InputGroup>
            {/* <button onClick={()=> movies()}>requisicao</button> */}
        </HStack>
    )
};


export default Header;
/* eslint-disable react-hooks/exhaustive-deps */
// libs and hooks
import React, { useState, useEffect, useContext} from "react";
import { HStack, Input, InputGroup } from "@chakra-ui/react";
// hook http
import useHttp2 from "../../hooks/use-http";

// styles
import styles from "./Header.module.css";

// images
import searchIcon from "../../assets/searchIcon.svg";
import { AuthContext } from "../../context/use-auth";

const Header = ({ onGetFilms }) => {
  const [search, setSearch] = useState([]);
  const [films, setFilms] = useState([]);

  const ctx = useContext(AuthContext)
  
  const changeSearchHandler = (event) => {
    setSearch(event.target.value);
  };

  const getData = async (data) => {
    console.log('filmes pesquisa no componente Header', data.Search)
    setFilms(data.Search);
  };

  const apiKey = process.env.REACT_APP_OMDB_API_KEY;
  const { sendRequest } = useHttp2(
    { url: `https://www.omdbapi.com/?s=${search}&apikey=${apiKey}` },
    getData
  );

  useEffect(() => {
    const result = sendRequest();
    console.log('filmes no useEffect ', result)
    result.then((resp)=> {console.log('retorno promise no useEffect', resp)

    if(resp.data.Search.length > 0) {
      ctx.setMovies(resp.data.Search)
    } 
    }).catch(()=> {
      ctx.setMovies([])
      console.log('filmes pesquisados dentro useEffect apos apagar tudo', films)
      console.log('filmes pesquisados do AuthContext dentro useEffect apos apagar tudo', ctx.movies)
    })
    
  }, [sendRequest, search]);

  return (
    <HStack
      w="100%"
      className={styles.header}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <InputGroup
        position="relative"
        w="100%"
        display="flex"
        alignItems="center"
        justifyContent="center"
        padding={40}
      >
        <Input
          // ref={movieValue}
          float="left"
          onChange={changeSearchHandler}
          value={search}
          className={styles.input}
          type="text"
          placeholder="Pesquise o que voce deseja assistir"
        />
        <img className={styles.searchIcon} alt="search" src={searchIcon} />
      </InputGroup>
    </HStack>
  );
};

export default Header;

// libs, methods and hooks
import { useEffect, useState } from "react";
import { createContext } from "react";

import useHttp2 from "../hooks/use-http-test";

export const AuthContext = createContext({

});

export const AuthContextCustom = ({children})=> {

    const [search, setSearch] = useState('');
    const [films, setFilms] = useState([]);

    const getArrayMoviesSearching = (arrayMovies)=> {

        setFilms([arrayMovies])
        console.log(arrayMovies, films)
    }
    
    const getMovieValueInput = (movieValue)=> {
    
      setSearch(movieValue)
        console.log(movieValue)
    }


    const apiKey = process.env.REACT_APP_KEY_API_OMDB
    const { sendRequest } = useHttp2({url:`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`}, getArrayMoviesSearching)


    useEffect(()=> {
        sendRequest()
    }, [sendRequest])
  

    return <AuthContext.Provider
    value={{
        getMovieValueInput,
        films
    }}>
             {children}
        </AuthContext.Provider>
};
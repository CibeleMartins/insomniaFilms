import { useState} from "react";
import axios from "axios";

const useHttp = ()=> {

    const [search, setSearch] = useState('');

    const [moviesOmdb, setMoviesOmdb] = useState([]);

    const apiKey = process.env.REACT_APP_KEY_API_OMDB

    const getMoviesOmdb = (valueInput) => {

        setSearch(valueInput)

        try {
            const requisition = axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);

        } catch (error) {
            
            console.log(error)
        }

       console.log(valueInput)
    }

    return {
        getMoviesOmdb
    };
};


export default useHttp;
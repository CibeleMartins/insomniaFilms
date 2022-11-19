import { useState} from "react";
import axios from "axios";

const useHttp = ()=> {

    const [search, setSearch] = useState('');

    const apiKey = process.env.REACT_APP_KEY_API_OMDB

    const getMoviesOmdb = (valueInput) => {

        setSearch(valueInput)

       const requisition = axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`).then(response => console.log(response));

       console.log(valueInput)
    }

    return {
        getMoviesOmdb
    };
};


export default useHttp;
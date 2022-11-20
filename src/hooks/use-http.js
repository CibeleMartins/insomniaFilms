import { useState, useCallback} from "react";
import axios from "axios";

const useHttp = ()=> {

    const [search, setSearch] = useState('');

    const [movies, setMovies] = useState([]);

    const apiKey = process.env.REACT_APP_KEY_API_OMDB

    const getMoviesOmdb = async (valueInput) => {

        setSearch(valueInput)

        try {
            const requisition = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);

            const data = await requisition.data.Search

            setMovies(data)

            console.log(data)

        } catch (error) {
            
            console.log(error)
        }

    }

    return {
        getMoviesOmdb,
        moviesArray: movies,
        // getData
    
    };
};


export default useHttp;
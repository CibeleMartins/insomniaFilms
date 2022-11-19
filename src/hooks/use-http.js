import { useState} from "react";
import axios from "axios";

const useHttp = ()=> {

    const [search, setSearch] = useState('');

    const apiKey = process.env.REACT_APP_KEY_API_OMDB

    let arrayMovies = [];

    const getMoviesOmdb = async (valueInput) => {

        setSearch(valueInput)

        try {
            const requisition = await axios.get(`https://www.omdbapi.com/?s=${search}&apikey=${apiKey}`);

            const data = await requisition.data

            arrayMovies.push(data)

            console.log(arrayMovies)

        } catch (error) {
            
            console.log(error)
        }
    }

    return {
        getMoviesOmdb,
        arrayMovies
    };
};


export default useHttp;
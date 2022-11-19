import { useState} from "react";


const useHttp = ()=> {

    const [search, setSearch] = useState()

    const getMovies = (valueInput) => {

        setSearch(valueInput)

        console.log(search)
    }

    return {
        getMovies
    };
};


export default useHttp;
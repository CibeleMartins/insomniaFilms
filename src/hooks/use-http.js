import { useState} from "react";


const useHttp = ()=> {

    const [search, setSearch] = useState('')

    const getMoviesOmdb = (valueInput) => {

        setSearch(valueInput)

        // console.log(search)
    }

    return {
        getMoviesOmdb
    };
};


export default useHttp;
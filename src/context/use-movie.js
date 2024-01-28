// libs, methods and hooks
import axios from "axios";
import { useState, createContext } from "react";
export const MovieContext = createContext({});

export const MovieContextCustom = ({ children }) => {
  const [detailsMovie, setDetailsMovie] = useState({
    display: false,
    details: [],
  });

  const [canLocate, setCanLocate] = useState(null)

  const [movies, setMovies] = useState([]);

  const canLocated = (type, id) => {
    let resp;
    if (type === "series") {
      resp = axios.get(
        process.env.REACT_APP_EMBEDDER_SERIES + `imdb=${id}&sea=1&epi=1`
      );

      console.log('series embedder', resp)
    }

    resp = axios.get(process.env.REACT_APP_EMBEDDER_MOVIE + `${id}`).then((r)=> {
      console.log('filmes embedder', r)
    }).catch((e)=> {
      console.log('filmes embedder', e)
    });
    

  };

  const getDetailsMovie = (stateDetails) => {
    console.log("Detalhes do filme a ser locado", stateDetails);
    setDetailsMovie(stateDetails);
  };

  return (
    <MovieContext.Provider
      value={{
        getDetailsMovie,
        detailsMovie,
        setMovies,
        movies,
        canLocated
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

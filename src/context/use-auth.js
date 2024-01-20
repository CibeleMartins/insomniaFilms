// libs, methods and hooks
import { useState, createContext } from "react";
export const AuthContext = createContext({});

export const AuthContextCustom = ({ children }) => {
  const [detailsMovie, setDetailsMovie] = useState({
    display: false,
    details: [],
  });

  const [movies, setMovies]= useState([])

  const getDetailsMovie = (stateDetails) => {
    setDetailsMovie(stateDetails);
  };

  console.log('filmes da pesquisa no AuthContext', movies)
  return (
    <AuthContext.Provider
      value={{
        getDetailsMovie,
        detailsMovie,
        setMovies, 
        movies
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

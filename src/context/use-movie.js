// libs, methods and hooks
import { useState, createContext } from "react";
import { generateToken } from "../config/token";
import {db} from '../config/firestore';
import { addDoc, collection } from "firebase/firestore";
import emailjs from "@emailjs/browser"

export const MovieContext = createContext({});
export const MovieContextCustom = ({ children }) => {
  const [detailsMovie, setDetailsMovie] = useState({
    display: false,
    details: [],
  });
  const [movieLocation, setMovieLocation] = useState({})
  const [movies, setMovies] = useState([]);


  const dataFinalLocation = '29/01/2024'

  const getDetailsMovie = (stateDetails) => {
    console.log("Detalhes do filme a ser locado", stateDetails);
    setDetailsMovie(stateDetails);
  };

  const generateIntentionLocate = async ()=> {

    const token = generateToken()
    console.log('tipo do movie na intencao de locacao ', detailsMovie.details[4])
    if(detailsMovie.details[4] === 'series') {
      //vai ser preciso uma consulta um pouco mais inteligente aqui
      console.log('gerou o link da série')
      alert('ainda não locamos series')
      // const movie = process.env.process.env.REACT_APP_EMBEDDER_MOVIE + detailsMovie.details[0].id
    } else {
      const movie = process.env.process.env.REACT_APP_EMBEDDER_MOVIE + detailsMovie.details[5]
      const movieOfLocation = {
        dataValidadeToken: dataFinalLocation,
        linkMovie: movie,
        token: token
      }
      setMovieLocation(movieOfLocation)
      console.log('movie da locacao', movieLocation)
    }
   
  }

  const locate = async (dataFormLocation)=> {
    try {
      const docRef = await addDoc(collection(db, "insomniaFilms"), movieLocation);
      console.log("Document written with ID: ", docRef.id);
    } catch (e) {
      console.error("Error adding document: ", e);
    }

    //serviço de email
    const publicKey = process.env.REACT_APP_PUBLICKEY_EMAILJS
    const idService = process.env.REACT_APP_ID_SERVICE_EMAILJS;
    const template = process.env.REACT_APP_TEMPLATE_EMAILJS;

    const templateParams = {
      to_name: "Insomnia Films",
      from_name: dataFormLocation.completeName,
      message: `Você locou o filme: ${detailsMovie.details[0]} 
      Valor pago: R$ ${detailsMovie.details[3]},00, a data final da locação é: ${dataFinalLocation}, até lá você pode acessar nosso site e assistir o filme com esse toke ${movieLocation.token}`,
      emailUser: dataFormLocation.email
    }

    emailjs.send(idService, template, templateParams, publicKey).then(response => {
      console.log("Email enviado com sucesso!", response.status, response.text)
    }, (error)=> {
        console.log(error)
    })
  }

  return (
    <MovieContext.Provider
      value={{
        getDetailsMovie,
        detailsMovie,
        setMovies,
        movies,
        generateIntentionLocate,
        locate
      }}
    >
      {children}
    </MovieContext.Provider>
  );
};

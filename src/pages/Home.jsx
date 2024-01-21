// libs and hooks
import { useContext, useEffect, useState } from "react";
import { VStack, HStack, Box } from "@chakra-ui/react";
import { motion } from "framer-motion";

// components
import AnimatedText from "../components/AnimatedText/AnimatedText";
import Slider from "../components/Slider/Slider";
import Header from "../components/Header/Header";
import { AuthContext } from "../context/use-auth";
import styles from './Home.module.css'
const Home = () => {
  const [films, setFilms] = useState([]);

  const ctx = useContext(AuthContext)

  const placeholderText = [
    { type: "heading1", text: "A sua locadora" },
    { type: "heading2", text: "online" },
    {
      type: "heading3",
      text: "Pra assistir quando quiser",
    },
    {type: "heading4", text: "Em alta resolução"},
    { type: "heading5", text: "E por um preço baixo" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  useEffect(()=> {

    const randomNumber = getRandomInt(1, 10);

    let loadedFilms = [];

    if(ctx.movies !== undefined && ctx.movies.length > 0) {
      for (const filmKey in ctx.movies) {
        loadedFilms.push({
          id: filmKey,
          title: ctx.movies[filmKey].Title,
          poster: ctx.movies[filmKey].Poster,
          year: ctx.movies[filmKey].Year,
          price: randomNumber,
        });
      }
    }
    // console.log('filmes pesquisado na Home e formatados', loadedFilms)
    setFilms(loadedFilms);
  }, [
    ctx.movies
  ])

  return (
    <>
      <Header />
      <VStack
        h="100vh"
        width="100%"
        className="gradient"
        display="flex"
      >
        <HStack className={styles.textMoviesContainer} w="100%" h="100%" display="flex" spacing="15%">
          <motion.div
            className="motionDiv"
            initial="hidden"
            // animate="visible"
            animate={"visible"}
            variants={container}
          >
            <div className="container">
              {placeholderText.map((item, index) => {
                return <AnimatedText {...item} key={index} />;
              })}
            </div>
          </motion.div>
          
          <div className={styles.slider}>
            <Slider data={films} />
          </div>
          
        </HStack> 
 
      </VStack>
    </>
  );
};

export default Home;

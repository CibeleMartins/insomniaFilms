// libs and hooks
import { useState } from "react";
import { VStack, HStack } from "@chakra-ui/react";
import { motion } from "framer-motion";

// components
import AnimatedText from "../components/AnimatedText/AnimatedText";
import Slider from "../components/Slider/Slider";
import Header from "../components/Header/Header";

const Home = () => {
  // const [replay, setReplay] = useState(true);
  // // Placeholder text data, as if from API

  const [films, setFilms] = useState([]);

  const placeholderText = [
    { type: "heading1", text: "A sua locadora online" },
    {
      type: "heading2",
      text: "Pra assistir quando quiser, em alta resolução",
    },
    { type: "heading3", text: "E por um preço baixo" },
  ];

  const container = {
    visible: {
      transition: {
        staggerChildren: 0.025,
      },
    },
  };

  // // Quick and dirt for the example
  // const handleReplay = () => {
  //   setReplay(!replay);
  //   setTimeout(() => {
  //     setReplay(true);
  //   }, 600);
  // };

  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
  }

  const getFilmsInHeader = (films) => {
    const randomNumber = getRandomInt(1, 10);

    let loadedFilms = [];

    for (const filmKey in films) {
      loadedFilms.push({
        id: filmKey,
        title: films[filmKey].Title,
        poster: films[filmKey].Poster,
        year: films[filmKey].Year,
        price: randomNumber,
      });
    }

    // console.log(loadedFilms)
    setFilms(loadedFilms);
  };

  return (
    <>
      <Header onGetFilms={getFilmsInHeader} />
      <VStack
        h="100vh"
        width="100%"
        className="gradient"
        display="flex"
        // alignItems="center"
      >
        <HStack w="100%" h="100vh" display="flex" spacing="15%">
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
            {/* <button onClick={handleReplay}>
                    Replay <span>⟲</span>
                </button> */}
          </motion.div>

          <Slider data={films} />
        </HStack>
      </VStack>
    </>
  );
};

export default Home;

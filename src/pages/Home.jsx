import { VStack, HStack } from "@chakra-ui/react";
import React, { useState } from "react";
import { motion } from "framer-motion";
import AnimatedText from "../components/AnimatedText/AnimatedText";
import Slider from '../components/Slider/Slider'



import Header from "../components/Header/Header";

const Home = ()=> {

    const [replay, setReplay] = useState(true);
    // Placeholder text data, as if from API
    const placeholderText = [
      { type: "heading1", text: "A sua locadora online" },
      {
        type: "heading2",
        text: "Pra assistir quando quiser, em alta resolução"
      },
      {type: "heading3", text: "E por um preço baixo"}
    ];
  
    const container = {
      visible: {
        transition: {
          staggerChildren: 0.025
        }
      }
    };
  
    // Quick and dirt for the example
    const handleReplay = () => {
      setReplay(!replay);
      setTimeout(() => {
        setReplay(true);
      }, 600);
    };
  

    return (
        
        <VStack
        h="100vh"
        width="100%"
        className="gradient"
        display="flex"
        alignItems="flex-start">
            <Header/>
            <HStack
            w="100%"
            // paddingLeft="50px"
            >
                <motion.div
                className="motionDiv"
                initial="hidden"
                // animate="visible"
                animate={replay ? "visible" : "hidden"}
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

                <Slider/>
            </HStack>
        </VStack>
    )
}

export default Home;
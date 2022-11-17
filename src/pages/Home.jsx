import { VStack } from "@chakra-ui/react";

import Header from "../components/Header/Header";

const Home = ()=> {

    return (
        
        <VStack
        h="100vh"
        width="100%"
        className="gradient">
            <Header/>
        </VStack>
    )
}

export default Home;
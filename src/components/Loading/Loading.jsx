import { Center } from "@chakra-ui/react";

import video from '../../assets/videoBg.mp4';
import logo from '../../assets/logo.png';

const Loading = ()=> {

    return (
        <Center
        w="100%"
        h="100vh"
        bg="black">
            <video src={video} autoPlay loop muted/>
           <img className="insomnia" alt="logo" src={logo}/>
        </Center>
    );
};


export default Loading;
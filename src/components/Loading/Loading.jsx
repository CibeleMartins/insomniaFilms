// components
import { Center } from "@chakra-ui/react";

// video and image
import video from "../../assets/videoBg.mp4";
import logo from "../../assets/logo.png";

const Loading = () => {
  return (
    <Center w="100%" h="100vh" bg="black">
      <div className="overlay"></div>
      <video src={video} autoPlay loop muted />
      <img className="insomnia" alt="logo" src={logo} />
    </Center>
  );
};

export default Loading;

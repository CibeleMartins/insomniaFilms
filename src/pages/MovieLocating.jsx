//libs and hooks
import React, { useContext, useRef } from "react";
import emailjs from "@emailjs/browser"

// context
import { AuthContext } from "../context/use-auth";

// stripe elements
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { Center, VStack, HStack, Text } from "@chakra-ui/react";

// components
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import Input from "../components/Input/Input";
import CustomButton from "../components/Button/Button";

// styles
import styles from "./MovieLocating.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.

const promise = loadStripe(
  "pk_test_51M6MSDKiFavfq3oOF6PY8eIDN7JLP9w3p18LQqWDXgTufLpMMcooXpasef1CFZTzhmp6KKeIST902bNisN81eX0x00JUaiOZW8"
);

const sendEmailLinkMovie = (e)=> {

  e.preventDefault()
}


export default function MovieLocating() {

  const completeName = useRef();
  const cpf = useRef();
  const email = useRef();

  const context = useContext(AuthContext);

  console.log(context.detailsMovie.details);

  return (
    <Center w="100%" h="100vh" className="gradient">
      <div className={styles.container}>
        <HStack 
        display="flex"
        w="100%"
        h="30vh">
          <form onSubmit={sendEmailLinkMovie} className={styles.formLocating}>
            <Input ref={completeName} placeholder="Nome completo" />
            <Input ref={cpf} placeholder="CPF" />
            <Input ref={email} placeholder="E-mail" />
          </form>

          <HStack
          w="50%">
            <HStack
            w="50%"
            display="flex"
            justifyContent="center">
              <img className={styles.posterFilm} alt="posterFilme" src={context.detailsMovie.details[1]} />
            </HStack>
            <VStack
            w="50%"
            h="200px"
            justifyContent="space-around"
            disply="flex">
              <Text
              textAlign="center"
              fontSize={30}>{context.detailsMovie.details[0]}</Text>
              <Text>{context.detailsMovie.details[2]}</Text>
              <Text>{context.detailsMovie.details[3]}</Text>
            </VStack>
          </HStack>
        </HStack>
        <Elements stripe={promise}>
          <CheckoutForm />
        </Elements>

        <CustomButton text="Finalizar e locar filme" />
      </div>
    </Center>
  );
}

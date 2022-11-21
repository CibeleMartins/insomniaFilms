// hooks
import React, { useContext } from "react";

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

export default function MovieLocating() {
  const context = useContext(AuthContext);

  console.log(context.detailsMovie.details);
  return (
    <Center w="100%" h="100vh" className="gradient">
      <div className={styles.container}>
        <HStack 
        display="flex"
        w="100%"
        h="30vh">
          <VStack
          w="50%"
          display="flex"
          alignItems="flex-start">
            <Input placeholder="Nome completo" />
            <Input placeholder="CPF" />
            <Input placeholder="E-mail" />
          </VStack>

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

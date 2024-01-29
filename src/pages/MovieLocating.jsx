//libs and hooks
import React, { useContext, useState } from "react";
// context
import { MovieContext } from "../context/use-movie";

// stripe elements
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { VStack, HStack, Text, Stack } from "@chakra-ui/react";

// components
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import Input from "../components/Input/Input";
import CustomButton from "../components/Button/Button";

// styles
import styles from "./MovieLocating.module.css";

const promise = loadStripe(
 process.env.REACT_APP_STRIPE_PK
);

export default function MovieLocating() {

  const[ completeName, setCompleteName ]= useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');
  
  const [paymentSuccess, setPaymentSuccess] = useState('');

  const context = useContext(MovieContext);

  const price = `R$ ${context.detailsMovie.details[3]},00`

  const getPaymentSuccess = (state)=> {

    console.log(state)
    setPaymentSuccess(state)
  }

  const sendEmailLinkMovie = (e)=> {

    e.preventDefault()

    if (completeName === '' || cpf === ''|| email === '') {

      alert("Preencha todos os campos, por favor")

      return;
    } else if (paymentSuccess === false) {

      alert("Realize o pagamento antes de enviar o formulário!")
      return;
    }

    context.locate({completeName: completeName, email: email})
  }
 

  return (
    <VStack flexDir="column-reverse" display="flex" justifyContent="space-evenly" w="100%" h="100vh" className="gradient">
      <form onSubmit={sendEmailLinkMovie} className={styles.container}>
        <HStack 
        display="flex"
        w="100%"
        h="30vh">
          <div className={styles.formLocating}>
            <Input onChange={(e)=> setCompleteName(e.target.value)} value={completeName} placeholder="Nome completo" />
            <Input onChange={(e)=> setCpf(e.target.value)} value={cpf} placeholder="CPF" />
            <Input onChange={(e)=> setEmail(e.target.value)} value={email} placeholder="E-mail" />
          </div>

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
            h="150px"
            justifyContent="space-evenly"
            display="flex">
              <Text
              textAlign="center"
              fontSize={30}>{context.detailsMovie.details[0]}</Text>
              <Text>{context.detailsMovie.details[2]}</Text>
              <Text>{price}</Text>
            </VStack>
          </HStack>
        </HStack>
        <CustomButton
        text="Finalizar e locar filme"/>
      </form>

      <HStack>
          <Elements stripe={promise}>
            <CheckoutForm options={{mode: 'payment', amount: parseInt(price.replace("R$", "")).toFixed(2), currency: 'brl'}} onGetSuccessPayment={getPaymentSuccess}/>
          </Elements>
      </HStack>
    </VStack>
  );
}

//libs and hooks
import React, { useContext, useState } from "react";
import emailjs from "@emailjs/browser"

// context
import { AuthContext } from "../context/use-auth";

// stripe elements
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { VStack, HStack, Text } from "@chakra-ui/react";

// components
import CheckoutForm from "../components/CheckoutForm/CheckoutForm";
import Input from "../components/Input/Input";
import CustomButton from "../components/Button/Button";

// styles
import styles from "./MovieLocating.module.css";

const promise = loadStripe(
  "pk_test_51M6MSDKiFavfq3oOF6PY8eIDN7JLP9w3p18LQqWDXgTufLpMMcooXpasef1CFZTzhmp6KKeIST902bNisN81eX0x00JUaiOZW8"
);

export default function MovieLocating() {

  const[ completeName, setCompleteName ]= useState('');
  const [cpf, setCpf] = useState('');
  const [email, setEmail] = useState('');

  const [paymentSuccess, setPaymentSuccess] = useState('');

  const context = useContext(AuthContext);

  const price = `R$ ${context.detailsMovie.details[3]},00`

  const publicKey = process.env.REACT_APP_EMAIL_JS_PUBLIC_KEY;
  const idService = process.env.REACT_APP_ID_EMAIL_JS;
  const template = process.env.REACT_APP_TEMPLATE_EMAIL_JS;

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

    const templateParams = {
      to_name: "Insomnia Films",
      from_name: completeName,
      message: `Você locou o filme: ${context.detailsMovie.details[0]} 
      Valor pago: R$ ${context.detailsMovie.details[3]},00`,
      emailUser: email
    }

    emailjs.send(idService, template, templateParams, publicKey).then(response => {
      console.log("Email enviado com sucesso!", response.status, response.text)

      setCompleteName('')
      setCpf('')
      setEmail('')

    }, (error)=> {
        console.log(error)
    })
  }
 

  return (
    <HStack display="flex" justifyContent="space-evenly" w="100%" h="100vh" className="gradient">
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
            <CheckoutForm onGetSuccessPayment={getPaymentSuccess}/>
          </Elements>
      </HStack>
    </HStack>
  );
}


// import { Center} from "@chakra-ui/react";
// import  Input from '../components/Input/Input';

// import styles from './MovieLocating.module.css';
// import PaymentForm from "../components/PaymentForm/PaymentForm";

// const MovieLocating = ()=> {

//     return (
//         <Center
//         w="100%"
//         h="100vh"
//         className="gradient">
//             {/* <div className={styles.container}>
//                 <form className={styles.form}>
//                   <Input placeholder="Nome completo"/>
//                   <Input placeholder="CPF"/>
//                   <Input placeholder="E-mail"/>
//                 </form>
//             </div> */}

//             <PaymentForm/>
//         </Center>
//     )
// };


// export default MovieLocating;

import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/PaymentForm/CheckoutForm";
import "./MovieLocating.module.css";

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const promise = loadStripe("pk_test_51M6MSDKiFavfq3oOF6PY8eIDN7JLP9w3p18LQqWDXgTufLpMMcooXpasef1CFZTzhmp6KKeIST902bNisN81eX0x00JUaiOZW8");

export default function MovieLocating() {
  return (
    <div className="App">
      <Elements stripe={promise}>
        <CheckoutForm />
      </Elements>
    </div>
  );
};




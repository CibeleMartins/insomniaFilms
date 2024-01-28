// hooks
import React, { useState } from "react";

// strip elements
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

import "./CheckoutForm.module.css";

export default function CheckoutForm({onGetSuccessPayment, options}) {
  const [error, setError] = useState(null);
  const stripe = useStripe();
  const elements = useElements();
  const [processing, setProcessing] = useState("");
  const [disabled, setDisabled] = useState(true);
  const [succeeded, setSucceeded] = useState(false);
  const backendUrl = process.env.REACT_APP_AIRCODE_URL;
  console.log('url aircode',backendUrl)
  const cardStyle = {
    style: {
      base: {
        color: "#32325d",
        fontFamily: "Arial, sans-serif",
        fontSmoothing: "antialiased",
        fontSize: "16px",
        "::placeholder": {
          color: "#32325d",
        },
      },
      invalid: {
        fontFamily: "Arial, sans-serif",
        color: "#fa755a",
        iconColor: "#fa755a",
      },
    },
  };

  const handleChange = async (event) => {
    // Listen for changes in the CardElement
    // and display any errors as the customer types their card details
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };

  const handleSubmit = async (ev) => {
    ev.preventDefault();
    setProcessing(true);

    if (elements == null || stripe == null) {
      return;
    }

    // Trigger form validation and wallet collection
    const { error: submitError } = await elements.submit();
    if (submitError?.message) {
      // Show error to your customer
      setError(submitError.message);
      return;
    }
    //req backend
    const res = await fetch(`${backendUrl}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        currency: options.currency,
        amount: Math.round(options?.amount * 100),
        paymentMethodType: "card"
      }),
    });
    const { client_secret: clientSecret } = await res.json();
    const clientSecretString = clientSecret.toString()
    const payload = await stripe.confirmCardPayment(clientSecretString, {
      payment_method: {
        card: elements.getElement(CardElement),
      }
    });

    if (payload.error) {
      setError(`Payment failed ${payload.error.message}`);
      setProcessing(false);
    } else {
      setError(null);
      setProcessing(false);
      setSucceeded(true);
      onGetSuccessPayment(succeeded)
    }
  };



  return (
    <form id="payment-form" onSubmit={handleSubmit}>
      <CardElement
        id="card-element"
        options={cardStyle}
        onChange={handleChange}
      />
      <button disabled={processing || disabled || succeeded} id="submit">
        <span id="button-text">
          {processing ? (
            <div className="spinner" id="spinner"></div>
          ) : (
            "Pay now"
          )}
        </span>
      </button>
      {/* Show any error that happens when processing the payment */}
      {error && (
        <div className="card-error" role="alert">
          {error}
        </div>
      )}
      {/* Show a success message upon completion */}

      {succeeded === true ?  <p className="result-message">
        Pagamento efetuado com sucesso!
        <a
          href={`https://dashboard.stripe.com/test/payments`}
        >
          {" "}
          Stripe dashboard.
        </a> Enviaremos um link no seu e-mail para assistir o filme ;
      </p> : null }
    </form>
  );
}

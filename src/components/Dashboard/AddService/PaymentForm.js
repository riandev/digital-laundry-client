import React, { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";

const PaymentForm = ({userBookingData}) => {
  const [userPaymentStatus,setUserPaymentStatus]=useState(false);
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }
    const cardElement = elements.getElement(CardElement);
    const { error, paymentMethod } = await stripe.createPaymentMethod({
      type: "card",
      card: cardElement,
    });

    if (error) {
      console.log("[error]", error);
    } else {
      console.log(paymentMethod.id);
      const paymentWithUser={...userBookingData,paymentId: paymentMethod.id };
      
      fetch('http://localhost:5000/userPaymentInfo',{
        method: 'POST',
        headers: {'Content-type': 'application/json'},
        body: JSON.stringify(paymentWithUser)
      })
      .then(res => res.json())
      .then(data => setUserPaymentStatus(data))
    }
  };
  return (
    <div>
      <form style={{display: userPaymentStatus === false ? 'block' : 'none'}} onSubmit={handleSubmit}>
        <CardElement />
        <button className="btn btn-primary mt-5" type="submit" disabled={!stripe}>
          Pay
        </button>
      </form>
      <div>
        {userPaymentStatus === true && <div>
          <p style={{ color: "#1cc7c1"}}>Thanks For Your Payment</p>
        </div> }
      </div>
    </div>
  );
};

export default PaymentForm;

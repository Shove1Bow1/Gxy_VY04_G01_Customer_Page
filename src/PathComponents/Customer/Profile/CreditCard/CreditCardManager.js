import React, { useState, useEffect } from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "./CheckoutForm";
import "./CreditCard.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons'

// Make sure to call loadStripe outside of a component’s render to avoid
// recreating the Stripe object on every render.
// This is your test publishable API key.
const stripePromise = loadStripe("pk_test_51KohrzJZBclpjj5yKmYChCBiDJZmbU65IRymQcUO8MOncF0BSLBe0ucM0wlRmz7KW07QI9Qytjv3E8tViSSvv4wX00tzijcatM");

export default function App() {
  const [clientSecret, setClientSecret] = useState("");

  useEffect(() => {
    // Create PaymentIntent as soon as the page loads
    fetch("http://localhost:8020/Customer/create-payment-intent", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ items: [{ id: "xl-tshirt" }] }),
    })
      .then((res) => res.json())
      .then((data) => {
        setClientSecret(data.clientSecret);
      });
  }, []);

  const appearance = {
    theme: 'stripe',
  };
  const options = {
    clientSecret,
    appearance,
  };
  const [showModal,setShow]=useState(false);
  const GenerateADialog = () => {
    return (
      <div className='modal' onClick={() => setShow(false)}>
        <div className='modal-content' onClick={e => e.stopPropagation()}>
          <div className='modal-header'>
            <h4 className='modal-title'>Add Card<span className="XIcons"><i className="bi bi-x"></i></span></h4>
          </div>
          <div className='modal-body'>
            {clientSecret && (
              <Elements options={options} stripe={stripePromise}>
                <CheckoutForm/>
              </Elements>
            )}
          </div>
        </div>
      </div>
    )
  };
  function EmptyCard() {
    return (
        <button className="EC-Body" onClick={()=>setShow(true)}>
          <div className="Card-Header">
            <span> <FontAwesomeIcon icon={faPlusCircle} size="3x" /></span>
            <p>Add Card</p>
          </div>
        </button>
    )
  }
  return (
    <div className="all-body-card">
      <EmptyCard />
      {showModal ? <GenerateADialog /> : null}
    </div>
  );
}
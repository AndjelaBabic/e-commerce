import React from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios'; 

const StripeCheckoutButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey = 'pk_test_51JOlJyK1c84eyVCgXzZ7guGAP5sQTdEvoRR8wqXtfJm3R0uWwpQQIeOW7aT7Q4TxvkngGaDRLENeGIO0jeTAKCQk00lA8BwLYx';

  const onToken = token => {
    axios({
      url: 'payment', 
      method: 'post', 
      data: {
        amount: priceForStripe, 
        token: token
      }
    })
    alert('Payment Succesful!');
  };

  return (
    <StripeCheckout
      label='Pay Now'
      name='E-commerce Ltd.'
      billingAddress
      shippingAddress
      image='https://svgshare.com/i/CUz.svg'
      description={`Your total is $${price}`}
      amount={priceForStripe}
      panelLabel='Pay Now'
      token={onToken}
      stripeKey={publishableKey}
    />
  );
};

export default StripeCheckoutButton;

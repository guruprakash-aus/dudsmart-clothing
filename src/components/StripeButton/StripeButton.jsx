import React from "react";
import StripeCheckout from "react-stripe-checkout";

const StripeButton = ({ price }) => {
  const priceForStripe = price * 100;
  const publishableKey =
    "pk_test_51HPxALJN4xw8v0KFJb1EEQUYyeKI9InjJ9eUYsQqiieytLMA34fK26na5WDrQemnK3Awm2ob1kvPy6Ww93nubLLV00PA59pGjy";

  const onToken = (token) => {
    console.log(token);
    alert("Payment Successful");
  };

  return (
    <div>
      <StripeCheckout
        label='Pay Now'
        name='Dudsmart Clothing Ltd.'
        billingAddress
        shippingAddress
        image='https://svgshare.com/i/CUz.svg'
        description={`Your total is $${price}`}
        amount={priceForStripe}
        panelLabel='Pay Now'
        token={onToken}
        stripeKey={publishableKey}
        currency='AUD'
      />
    </div>
  );
};

export default StripeButton;

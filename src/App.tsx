import React from 'react';
import Home from './screens/home';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";

const initialOptions = {
  "client-id": "AQkrS_veYVWWC7C8VkPepw4HmnlZN0mGEhjpfACGbuNK6ZYsssh6jbtSEFzuXFLdcchTxp6cL6VBuSPS",
  "currency": "USD",
  "intent": "capture"
};

const App = () => {

  return (
    <PayPalScriptProvider options={initialOptions}>
      <Home />
    </PayPalScriptProvider>
  )
}

export default App;

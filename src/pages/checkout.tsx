import { Button, Card, Col, Form, Row } from "react-bootstrap";
import { useContext, useState } from "react";
import axios from "axios";
import { CartStateContext } from "../contexts/cart";


export function Checkout() {

  const { items } = useContext(CartStateContext);

  const handleSubmit = async() => {
  
    try {    
      const response = await axios.post('https://localhost:7260/Checkout', items);
      console.log("Form Submitted");
    } catch(error) {
      console.log(error);
    }
  }

  return (
    <div className="Checkout">
      <form onSubmit={handleSubmit}>
        <button type="submit">Checkout</button>
      </form>
    </div>
  );
}
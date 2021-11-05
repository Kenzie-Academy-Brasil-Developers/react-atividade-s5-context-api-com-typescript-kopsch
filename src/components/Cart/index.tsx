import React from "react";
import { Container } from "./styles";
import { useCart } from "../../providers/Cart";
import ProductCard from "../ProductCard";

const Cart = () => {
  const { cart } = useCart();

  return (
    <Container>
      {cart.map((item) => (
        <ProductCard
          type="remove"
          key={item.id}
          title={item.title}
          description={item.description}
          image={item.image}
          price={item.price}
        />
      ))}
    </Container>
  );
};

export default Cart;

import React from "react";
import { Product } from "../../interfaces/cart.interface";
import { Button, Container, Description, Image, Price, Title } from "./styles";
import { useCart } from "../../providers/Cart";

const ProductCard = ({ type, title, description, image, price }: Product) => {
    const {addProduct, deleteProduct} = useCart()
  return (
    <Container>
      <Image alt={title} src={image} />
      <Title>{title}</Title>
      <Description>{description}</Description>
      <Price>
        {price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" })}
      </Price>
      {type === "add" ? <Button onClick={() => addProduct({title, description, image, price})}>ADD TO CART</Button> :
      <Button onClick={() => deleteProduct({title, description, image, price})}>REMOVE</Button>}
    </Container>
  );
};

export default ProductCard;

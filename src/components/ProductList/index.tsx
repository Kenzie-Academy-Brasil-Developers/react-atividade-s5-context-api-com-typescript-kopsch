import React from "react";
import { useCart } from "../../providers/Cart";
import ProductCard from "../ProductCard";
import { Container } from "./styles";

const ProductList = () => {
  const { products } = useCart();
  return (
    <Container>
      {products.map((item) => (
        <ProductCard
          type="add"
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

export default ProductList;

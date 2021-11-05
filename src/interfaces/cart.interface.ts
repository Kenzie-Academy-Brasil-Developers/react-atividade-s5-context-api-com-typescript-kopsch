import { ReactNode } from "react";

export interface Product {
  type?: string;
  id?: number;
  title: string;
  description: string;
  price: number;
  image: string;
}

export interface cartProps {
  children: ReactNode;
}

export interface CartProviderData {
  cart: Product[];
  products: Product[];
  addProduct: (product: Product) => void;
  deleteProduct: (product: Product) => void;
}

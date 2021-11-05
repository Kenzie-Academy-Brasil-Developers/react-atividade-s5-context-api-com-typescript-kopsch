import { ReactNode } from "react";
import { CartProvider } from "./Cart";

interface providersProps {
    children: ReactNode;
}

const Providers = ({children}:providersProps) => {
    return (
        <CartProvider>
            {children}
        </CartProvider>
    )
}

export default Providers
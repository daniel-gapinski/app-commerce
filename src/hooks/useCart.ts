import { CartContext } from "@/app/data/contexts/CartProvider";
import { useContext } from "react";

const useCart = () => useContext(CartContext);

export default useCart;
import { useContext } from "react";
import { CartContext } from "../context/cart";

export default function useCart() {
    const {cart,addToCart, removeFromCart, substractCant} = useContext(CartContext)

    return {cart,  addToCart, removeFromCart, substractCant}
}
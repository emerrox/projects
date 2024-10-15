import { useContext, useReducer } from "react";
import { CartContext } from "../context/cart";
import { cartReducer } from "../reducers/cart";

export default function useCart() {
    const {cart,setCart} = useContext(CartContext)
    const[state,dispatch] = useReducer(cartReducer)
    
    function addToCart(item) {
        dispatch({
            type: 'ADD_TO_CART',
            payload: item
        })
    }

    function removeFromCart(id){
        dispatch({
            type: 'REMOVE_FROM_CART',
            payload: id
        })
    }

    function addCant(id) {
        let newCart = [...cart]
        newCart[cart.findIndex(obj => obj.id === id)].cant++
        setCart(newCart)
    }

    function subtractCant(id) {
        let newCart = [...cart]
        if (newCart[cart.findIndex(obj => obj.id === id)].cant <= 1){
            removeFromCart(id)
        }else{
            newCart[cart.findIndex(obj => obj.id === id)].cant--
            setCart(newCart)
        }
    }

    return {cart: state, addToCart, removeFromCart, addCant, subtractCant}
}
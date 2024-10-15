import { createContext, useReducer } from 'react';
import { cartReducer } from '../reducers/cart';

export const CartContext = createContext();

const useCartReduce = ()=>{
  const[state,dispatch] = useReducer(cartReducer,[])
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

function substractCant(id){
  dispatch({
      type: 'SUBSTRACT_CANT',
      payload: id
  })
}

  return {state, addToCart, removeFromCart, substractCant}
}

export const CartProvider = ({ children }) => {
  const{state, addToCart, removeFromCart, substractCant} = useCartReduce()

  return (
    <CartContext.Provider value={{ cart:state,addToCart, removeFromCart, substractCant}}>
      {children}
    </CartContext.Provider>
  );
};

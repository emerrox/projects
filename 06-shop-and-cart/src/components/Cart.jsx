import '../css/cart.css'
import { AddIcon, CartIcon, RemoveFromCartIcon, RemoveIcon } from './Icons'
import { useId } from 'react'
import useCart from '../hooks/useCart'

export default function Cart(){
    const cartCheckboxId = useId()
    const {cart, removeFromCart, addToCart, substractCant} = useCart()


    return(
        <>
        <label htmlFor={cartCheckboxId} className='cart-button'>
            <CartIcon />
        </label>
        <input type="checkbox" name="cart-button" id={cartCheckboxId} hidden />

        <aside className='cart'>
            <ul>
                {cart.map(el=>(
                    <li key={el.id} className='prods'>
                        <img src={el.thumbnail} alt="" />
                        
                        <span className='cant' >
                            <span onClick={() => substractCant(el.id)}><RemoveIcon /></span> 
                            {el.cant}
                            <span onClick={() => addToCart(el)}><AddIcon /></span>
                        </span>

                        <span onClick={() => removeFromCart(el.id)}>
                           <RemoveFromCartIcon /> 
                        </span> 
                    </li>
                ))}

            </ul>

            <footer>

            </footer>
        </aside>
        </>
    )
}
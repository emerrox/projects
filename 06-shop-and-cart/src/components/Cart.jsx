import '../css/cart.css'
import { AddIcon, CartIcon, RemoveFromCartIcon, RemoveIcon } from './Icons'
import { useId } from 'react'
import useCart from '../hooks/useCart'

export default function Cart(){
    const cartCheckboxId = useId()
    const {cart, removeFromCart, addCant, subtractCant} = useCart()


    return(
        <>
        <label htmlFor={cartCheckboxId} className='cart-button'>
            <CartIcon />
        </label>
        <input type="checkbox" name="cart-button" id={cartCheckboxId} hidden />

        <aside className='cart'>
            <ul>
                {/*
                <li className='prods'>
                    <img src={imgBailongo} alt="" />
                    <RemoveFromCartIcon />
                </li>
                */}

                {cart.map(el=>(
                    <li key={el.id} className='prods'>
                        <img src={el.img} alt="" />
                        
                        <span className='cant' >
                            <span onClick={() => subtractCant(el.id)}><RemoveIcon /></span> 
                            {el.cant}
                            <span onClick={() => addCant(el.id)}><AddIcon /></span>
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